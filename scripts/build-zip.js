const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('📦 Gerando pacote de deploy para Hostinger...');
const outDir = path.join(__dirname, '..', 'out');
const zipFile = path.join(__dirname, '..', 'hostinger_deploy.zip');

if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

// Compacta os arquivos com barras normais (compatível com Linux / Hostinger)
execSync(`tar.exe -a -cf "${zipFile}" * .htaccess`, {
  cwd: outDir,
  shell: true,
  stdio: 'inherit',
});

console.log('✅ hostinger_deploy.zip gerado com sucesso!');
