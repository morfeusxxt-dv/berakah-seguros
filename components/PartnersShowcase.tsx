'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Search, ShieldCheck, ExternalLink, ChevronDown, ChevronUp, Sparkles, HeartPulse, WalletCards, Shield } from 'lucide-react'
import { INSURERS, Insurer } from '@/lib/insurers'
import { CONTACT_INFO } from '@/lib/contact'

const CATEGORIES = [
  'Todas',
  'Saúde & Benefícios',
  'Consórcios & Crédito',
  'Líder de Mercado',
  'Vida & Previdência',
  'Insurtech & Auto',
  'Multinacional',
  'Corporativo & Garantia',
] as const

interface PartnersShowcaseProps {
  title?: string
  subtitle?: string
  initialCategory?: string
  showSearch?: boolean
  initialLimit?: number
}

export function PartnersShowcase({
  title = 'Parceiros Oficiais: As Maiores Seguradoras & Administradoras',
  subtitle = 'Independência e solidez: cotamos e emitimos apólices e cartas de crédito nas companhias mais sólidas do país, garantindo as melhores condições e suporte total.',
  showSearch = true,
  initialLimit = 8,
}: PartnersShowcaseProps) {
  const [selectedCat, setSelectedCat] = useState<string>('Todas')
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(false)

  const filteredInsurers = useMemo(() => {
    return INSURERS.filter((item) => {
      const matchCat = selectedCat === 'Todas' || item.category === selectedCat
      const matchSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [selectedCat, search])

  // If searching or category is specific and has few items, show all; otherwise respect collapsed state
  const isFiltered = Boolean(search.trim()) || (selectedCat !== 'Todas' && filteredInsurers.length <= initialLimit)
  const shouldLimit = !expanded && !isFiltered
  const displayList = shouldLimit ? filteredInsurers.slice(0, initialLimit) : filteredInsurers
  const remainingCount = filteredInsurers.length - initialLimit

  return (
    <section className="partners-showcase-section" aria-label="Seguradoras e Administradoras Conveniadas">
      <div className="partners-showcase-container">
        
        {/* Header */}
        <div className="partners-showcase-header">
          <div className="partners-badge">
            <ShieldCheck size={14} /> +40 COMPANHIAS &amp; ADMINISTRADORAS
          </div>
          <h2 className="partners-title">{title}</h2>
          <p className="partners-subtitle">{subtitle}</p>
        </div>

        {/* Quick Segment Highlights */}
        <div className="partners-highlight-row">
          <div className="partners-highlight-pill">
            <Shield size={14} color="#D99500" />
            <span>Seguros Gerais &amp; Auto</span>
          </div>
          <div className="partners-highlight-pill">
            <HeartPulse size={14} color="#D99500" />
            <span>Planos de Saúde &amp; Odonto</span>
          </div>
          <div className="partners-highlight-pill">
            <WalletCards size={14} color="#D99500" />
            <span>Consórcios Imobiliário &amp; Auto</span>
          </div>
        </div>

        {/* Controls: Search & Category Pills */}
        <div className="partners-controls">
          {showSearch && (
            <div className="partners-search-box">
              <Search size={16} className="partners-search-icon" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar parceiro (ex: Porto, Bradesco, Amil, SulAmérica, Mapfre)..."
                className="partners-search-input"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="partners-search-clear"
                  aria-label="Limpar busca"
                >
                  ✕
                </button>
              )}
            </div>
          )}

          <div className="partners-categories-scroll">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCat(cat)
                  setExpanded(false)
                }}
                className={`partners-cat-btn ${selectedCat === cat ? 'active' : ''}`}
              >
                {cat}
                {cat === 'Todas' && <span className="cat-count">{INSURERS.length}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Partners (Compact & Polished) */}
        <div className="partners-grid">
          {displayList.map((ins) => (
            <div key={ins.id} className="partner-card" title={ins.name}>
              <div className="partner-card-logo-wrap">
                <Image
                  src={ins.logo}
                  alt={`Logo ${ins.name}`}
                  width={130}
                  height={44}
                  className="partner-card-logo"
                  onError={(e) => {
                    // Fallback to PNG if SVG fails to load
                    const target = e.currentTarget
                    if (!target.src.endsWith(ins.png)) {
                      target.src = ins.png
                    }
                  }}
                />
              </div>
              <div className="partner-card-info">
                <span className="partner-card-cat">{ins.category}</span>
                <h3 className="partner-card-name">{ins.name}</h3>
                {ins.description && (
                  <p className="partner-card-desc">{ins.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button (Keeps page height compact & balanced) */}
        {!isFiltered && remainingCount > 0 && (
          <div className="partners-expand-wrap">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="partners-expand-btn"
              id="toggle-partners-expand"
            >
              {expanded ? (
                <>
                  <ChevronUp size={16} /> Recolher visualização
                </>
              ) : (
                <>
                  <ChevronDown size={16} /> Ver todas as {filteredInsurers.length} companhias parceiras (+{remainingCount})
                </>
              )}
            </button>
          </div>
        )}

        {displayList.length === 0 && (
          <div className="partners-empty">
            <p>Nenhuma seguradora ou administradora encontrada para &ldquo;{search}&rdquo;.</p>
            <button
              type="button"
              onClick={() => {
                setSearch('')
                setSelectedCat('Todas')
              }}
              className="btn btn-primary"
              style={{ marginTop: 12 }}
            >
              Ver todas as companhias
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="partners-footer-note">
          <p>
            💡 <strong>Precisa de cotação em consórcio, plano de saúde ou seguro específico?</strong> Nossa equipe tem acesso aos portais de emissão direta de todas as companhias parceiras.
          </p>
          <a
            href={CONTACT_INFO.whatsapp.getLink('Olá! Gostaria de cotar meu seguro / plano de saúde / consórcio com as principais companhias.')}
            target="_blank"
            rel="noopener noreferrer"
            className="partners-cta-link"
          >
            Falar com consultor especializado <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

