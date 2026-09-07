'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'

import { EmergencyModal } from '@/components/EmergencyModal'

const navLinks = [
  { href: '/',          label: 'Início' },
  { href: '/sobre',     label: 'Sobre Nós' },
  { href: '/solucoes',  label: 'Soluções' },
  { href: '/blog',      label: 'Blog' },
  { href: '/contato',   label: 'Contato' },
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="header-inner">
          <Link href="/" className="brand-logo-link" aria-label="Berakah Seguros — página inicial">
            <Image
              src="/logos/logo_03.png"
              alt="Berakah Seguros"
              width={160}
              height={56}
              className="brand-logo"
              priority
            />
          </Link>

          <nav className="main-nav" aria-label="Navegação principal">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${isActive(href) ? ' active' : ''}`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <EmergencyModal />
            <Link href="/contato" className="header-cta" id="header-cta-btn">
              Fale com a gente <ArrowUpRight size={15} />
            </Link>
          </div>

          <button
            id="menu-toggle-btn"
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        className={`mobile-nav-overlay${menuOpen ? ' menu-open' : ''}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        style={{ display: menuOpen ? 'block' : 'none', opacity: menuOpen ? 1 : 0 }}
      />

      <nav
        id="mobile-nav"
        className={`mobile-nav-drawer${menuOpen ? ' menu-open' : ''}`}
        aria-label="Menu mobile"
        style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <button
          className="mobile-close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
          style={{ display: 'flex' }}
        >
          <X size={20} />
        </button>

        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link${isActive(href) ? ' active' : ''}`}
            aria-current={isActive(href) ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}

        <Link href="/contato" className="header-cta" style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', padding: '16px' }}>
          Fale com a gente <ArrowUpRight size={15} />
        </Link>
      </nav>
    </>
  )
}
