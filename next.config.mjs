/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript: build falha em erros (comportamento correto e seguro)
  // typescript.ignoreBuildErrors removido

  // Otimização de imagens: WebP/AVIF com cache agressivo para eliminar delay
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 24h — após o primeiro carregamento, servido do cache
    dangerouslyAllowSVG: true,
    // Não usar contentDispositionType:'attachment' — impede preload pelo browser
  },

  // Headers HTTP de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Previne clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Previne MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Força HTTPS (1 ano)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Controla informações de referência
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissões de APIs do navegador
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          // Remove header de identidade do servidor
          {
            key: 'X-Powered-By',
            value: '',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://vitals.vercel-insights.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' https://wa.me https://api.whatsapp.com",
            ].join('; '),
          },
        ],
      },
    ]
  },

  // Remove o header X-Powered-By do Next.js
  poweredByHeader: false,
}

export default nextConfig
