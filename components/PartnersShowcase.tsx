'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Search, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react'
import { INSURERS, Insurer } from '@/lib/insurers'

const CATEGORIES = [
  'Todas',
  'Líder de Mercado',
  'Multinacional',
  'Saúde & Benefícios',
  'Vida & Previdência',
  'Insurtech & Auto',
  'Corporativo & Garantia',
] as const

interface PartnersShowcaseProps {
  title?: string
  subtitle?: string
  initialCategory?: string
  showSearch?: boolean
  limit?: number
}

export function PartnersShowcase({
  title = 'Parceiros Oficiais: As Maiores Seguradoras do Brasil',
  subtitle = 'Nossa independência nos permite cotar e emitir apólices nas companhias mais sólidas do mundo, garantindo a melhor cobertura pelo menor preço.',
  showSearch = true,
  limit,
}: PartnersShowcaseProps) {
  const [selectedCat, setSelectedCat] = useState<string>('Todas')
  const [search, setSearch] = useState('')

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

  const displayList = limit ? filteredInsurers.slice(0, limit) : filteredInsurers

  return (
    <section className="partners-showcase-section" aria-label="Seguradoras Conveniadas">
      <div className="partners-showcase-container">
        
        {/* Header */}
        <div className="partners-showcase-header">
          <span className="partners-badge">
            <ShieldCheck size={14} /> +40 COMPANHIAS CONVENIADAS
          </span>
          <h2 className="partners-title">{title}</h2>
          <p className="partners-subtitle">{subtitle}</p>
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
                placeholder="Buscar seguradora (ex: Porto, Bradesco, Allianz, Suhai)..."
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
                onClick={() => setSelectedCat(cat)}
                className={`partners-cat-btn ${selectedCat === cat ? 'active' : ''}`}
              >
                {cat}
                {cat === 'Todas' && <span className="cat-count">{INSURERS.length}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Partners */}
        <div className="partners-grid">
          {displayList.map((ins) => (
            <div key={ins.id} className="partner-card" title={ins.name}>
              <div className="partner-card-logo-wrap">
                <Image
                  src={ins.logo}
                  alt={`Logo ${ins.name}`}
                  width={140}
                  height={50}
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

        {displayList.length === 0 && (
          <div className="partners-empty">
            <p>Nenhuma seguradora encontrada para &ldquo;{search}&rdquo;.</p>
            <button
              type="button"
              onClick={() => {
                setSearch('')
                setSelectedCat('Todas')
              }}
              className="btn btn-primary"
              style={{ marginTop: 12 }}
            >
              Ver todas as seguradoras
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="partners-footer-note">
          <p>
            💡 <strong>Precisa de cotação em alguma companhia específica?</strong> Nossa equipe tem acesso aos portais de emissão direta de todas as seguradoras acima.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20cotar%20meu%20seguro%20com%20as%20principais%20seguradoras."
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
