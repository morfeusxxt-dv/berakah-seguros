const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const images = [
  'hero-home.jpg',
  'hero-sobre.jpg',
  'hero-solucoes.jpg',
  'home-why-holding.jpg',
  'blog-auto.jpg',
  'blog-empresa.jpg',
  'blog-vida.jpg',
  'rafaella.jpg',
];

async function convertAll() {
  console.log('🔄 Convertendo imagens para WebP com Edge Canvas engine...');
  
  for (const imgName of images) {
    const inputPath = path.join(__dirname, '..', 'public', imgName);
    if (!fs.existsSync(inputPath)) continue;

    const base64Input = fs.readFileSync(inputPath).toString('base64');
    const mime = imgName.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const outputName = imgName.replace(/\.(jpg|jpeg|png)$/, '.webp');
    const outputPath = path.join(__dirname, '..', 'public', outputName);

    const tempHtml = path.join(__dirname, 'temp_worker.html');
    const htmlContent = `<!DOCTYPE html>
<html>
<head><title>converting</title></head>
<body>
<canvas id="c"></canvas>
<div id="output"></div>
<script>
window.done = false;
const img = new Image();
img.onload = () => {
  const c = document.getElementById('c');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = c.toDataURL('image/webp', 0.85);
  document.getElementById('output').textContent = data;
  document.title = 'CONVERSION_COMPLETE';
};
img.src = 'data:${mime};base64,${base64Input}';
</script>
</body>
</html>`;

    fs.writeFileSync(tempHtml, htmlContent, 'utf-8');

    try {
      const dump = execSync(`"${edgePath}" --headless --disable-gpu --virtual-time-budget=5000 --dump-dom "${tempHtml}"`, {
        maxBuffer: 50 * 1024 * 1024,
      }).toString();

      const match = dump.match(/<div id="output">(data:image\/webp;base64,[^<]+)<\/div>/);
      if (match && match[1]) {
        const rawBase64 = match[1].replace(/^data:image\/webp;base64,/, '');
        const buffer = Buffer.from(rawBase64, 'base64');
        fs.writeFileSync(outputPath, buffer);
        const origSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
        const newSize = (buffer.length / 1024).toFixed(1);
        const percent = (100 - (buffer.length / fs.statSync(inputPath).size) * 100).toFixed(0);
        console.log(`✅ ${imgName} (${origSize} KB) ➔ ${outputName} (${newSize} KB) [-${percent}%]`);
      } else {
        console.log(`⚠️ Falha ao extrair base64 para ${imgName}`);
      }
    } catch (err) {
      console.error(`Erro ao converter ${imgName}:`, err.message);
    } finally {
      if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
    }
  }

  console.log('🎉 Todas as imagens foram convertidas com sucesso para WebP!');
}

convertAll();
