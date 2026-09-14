import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFAB } from '@/components/WhatsAppFAB'
import { ScrollReveal } from '@/components/ScrollReveal'

/* ── Fontes via next/font (não bloqueante de renderização) ── */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Berakah Seguros | Proteção com Propósito',
    template: '%s | Berakah Seguros',
  },
  description: 'Seguros pensados para proteger suas conquistas, seus planos e as pessoas que fazem tudo valer a pena. Atendimento próximo e personalizado.',
  keywords: ['Berakah Seguros', 'seguro auto', 'seguro de vida', 'seguro residencial', 'seguro empresarial', 'seguro viagem', 'corretora de seguros'],
  authors: [{ name: 'Berakah Seguros' }],
  metadataBase: new URL('https://berakahseguros.com.br'),
  openGraph: {
    title: 'Berakah Seguros | Proteção com Propósito',
    description: 'O que importa para você merece cuidado.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Berakah Seguros',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/logo_06.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F2A900',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <ScrollReveal />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
