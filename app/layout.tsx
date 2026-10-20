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
  alternates: {
    canonical: 'https://berakahseguros.com.br',
  },
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

/* ── Schema JSON-LD Estruturado para AEO / GEO / Google Search ── */
const jsonLdOrg = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Berakah Seguros',
  legalName: 'Berakah Seguros',
  taxID: '67.756.954/0001-08',
  description: 'Corretora de seguros consultiva integrante do Grupo Baruch. Cotações e consultoria especializada em seguro auto, residencial, vida, saúde e empresarial.',
  url: 'https://berakahseguros.com.br',
  logo: 'https://berakahseguros.com.br/logos/logo_03.png',
  image: 'https://berakahseguros.com.br/hero-home.jpg',
  telephone: '+55-98-98482-5999',
  email: 'contato@berakahseguros.com.br',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Grupo Baruch',
    description: 'Holding empresarial sólida e multissetorial com atuação em todo o Brasil.',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'MA / SP',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Planos e Apólices de Seguros',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro Automóvel e Frotas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro Residencial e Condomínio' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro de Vida e Sucessão Patrimonial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Planos de Saúde e Odonto' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro Empresarial e Riscos Operacionais' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Responsabilidade Civil (D&O e E&O)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seguro Viagem Nacional e Internacional' } },
    ],
  },
  sameAs: [
    'https://instagram.com/berakahseguros',
    'https://facebook.com/berakahseguros',
    'https://linkedin.com/company/berakahseguros',
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
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
