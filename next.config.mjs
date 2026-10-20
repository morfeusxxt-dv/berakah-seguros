/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript: build falha em erros (comportamento correto e seguro)
  // typescript.ignoreBuildErrors removido

  output: 'export',
  trailingSlash: true,

  // Otimização de imagens: no modo export estático usamos unoptimized: true
  images: {
    unoptimized: true,
  },

  // Remove o header X-Powered-By do Next.js
  poweredByHeader: false,
}

export default nextConfig
