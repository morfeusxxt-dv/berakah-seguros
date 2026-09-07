import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { EmergencyModal } from '@/components/EmergencyModal'

const footerLinks = {
  empresa: [
    { href: '/sobre',    label: 'Sobre Nós' },
    { href: '/solucoes', label: 'Nossas Soluções' },
    { href: '/blog',     label: 'Blog' },
    { href: '/contato',  label: 'Contato' },
  ],
  solucoes: [
    { href: '/solucoes', label: 'Seguro Auto' },
    { href: '/solucoes', label: 'Seguro Residencial' },
    { href: '/solucoes', label: 'Seguro de Vida' },
    { href: '/solucoes', label: 'Seguro Empresarial' },
    { href: '/solucoes', label: 'Seguro Viagem' },
  ],
  contato: [
    { href: 'tel:+5511999999999',                  label: '(11) 99999-9999' },
    { href: 'mailto:contato@berakahseguros.com.br', label: 'contato@berakahseguros.com.br' },
    { href: '#',                                    label: 'Seg–Sex, 9h–18h' },
  ],
}

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-brand-lockup" aria-label="Berakah Seguros — Página inicial">
            <Image
              src="/logos/logo_08.png"
              alt="Berakah Seguros"
              width={48}
              height={42}
              className="footer-brand-mark"
            />
            <div className="footer-brand-text">
              <span className="footer-brand-name">BERAKAH</span>
              <span className="footer-brand-sub">SEGUROS</span>
            </div>
          </Link>
          <p>
            Somos uma corretora de seguros que acredita que proteger é um ato de presença. Escutamos, entendemos e cuidamos do que importa para você.
          </p>
          <div className="footer-social" style={{ marginTop: '24px' }}>
            <a href="https://instagram.com/berakahseguros" aria-label="Instagram da Berakah" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com/berakahseguros" aria-label="Facebook da Berakah" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://linkedin.com/company/berakahseguros" aria-label="LinkedIn da Berakah" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          {footerLinks.empresa.map(({ href, label }) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Soluções</h4>
          {footerLinks.solucoes.map(({ href, label }) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          {footerLinks.contato.map(({ href, label }) => (
            <a key={label} href={href}>{label}</a>
          ))}
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
            <EmergencyModal />
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', borderRadius: '4px' }}
            >
              WhatsApp <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Berakah Seguros. Todos os direitos reservados.</span>
        <span style={{ color: '#444' }}>CNPJ: 00.000.000/0001-00 · SUSEP: 000000</span>
      </div>
    </footer>
  )
}
