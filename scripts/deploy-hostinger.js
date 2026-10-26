const { spawn } = require('child_process');
const path = require('path');

async function deployToHostinger() {
  const zipPath = path.join(__dirname, '..', 'hostinger_deploy.zip');
  console.log('🚀 Iniciando deploy automático na Hostinger para berakahseguros.com.br...');

  const child = spawn('npx.cmd', ['--package=@hostinger/mcp@latest', 'hostinger-hosting-mcp'], {
    shell: true,
    env: {
      ...process.env,
      USER_AGENT: 'extension;antigravity;1.4.6'
    },
    stdio: ['pipe', 'pipe', 'pipe']
  });

  child.stderr.on('data', d => {
    const text = d.toString();
    if (text.includes('[INFO]') || text.includes('Error')) {
      console.log(text.trim());
    }
  });

  let buffer = '';
  child.stdout.on('data', d => {
    buffer += d.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop();
    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const msg = JSON.parse(line);
        if (msg.result && msg.result.content && msg.result.content[0] && msg.result.content[0].text) {
          try {
            console.log('✅ Resposta da Hostinger:', JSON.parse(msg.result.content[0].text));
          } catch(e) {
            console.log('✅ Resposta:', msg.result.content[0].text);
          }
        }
      } catch (e) {}
    }
  });

  const send = (msg) => {
    child.stdin.write(JSON.stringify(msg) + '\n');
  };

  // 1. Handshake MCP
  send({
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'hostinger-deploy-script', version: '1.0.0' }
    }
  });

  await new Promise(r => setTimeout(r, 2000));

  send({
    jsonrpc: '2.0',
    method: 'notifications/initialized'
  });

  // 2. Executa deploy do arquivo zip
  send({
    jsonrpc: '2.0',
    id: 2,
    method: 'tools/call',
    params: {
      name: 'execute',
      arguments: {
        operation: 'hosting_deploy',
        params: {
          domain: 'berakahseguros.com.br',
          path: zipPath,
          type: 'static'
        }
      }
    }
  });

  // Aguarda upload e extração
  await new Promise(r => setTimeout(r, 20000));
  child.kill();
  console.log('🎉 Deploy finalizado com sucesso!');
}

deployToHostinger().catch(console.error);
