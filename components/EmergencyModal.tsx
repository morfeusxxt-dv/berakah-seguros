'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PhoneCall, X, ShieldAlert, CheckCircle, ExternalLink } from 'lucide-react'

const seguradorasTelefones = [
  { nome: 'Porto Seguro',       fone: '0800 727 0800', desc: 'Guincho, colisão, chaveiro e residencial', logo: '/seguradoras/porto-seguro.svg' },
  { nome: 'Bradesco Seguros',   fone: '0800 701 2757', desc: 'Assistência 24h auto, vida e saúde',         logo: '/seguradoras/bradesco-seguros.svg' },
  { nome: 'Allianz Seguros',    fone: '0800 130 700',  desc: 'Sinistros, socorro mecânico e vidros',      logo: '/seguradoras/allianz.svg' },
  { nome: 'Tokio Marine',       fone: '0800 318 6546', desc: 'Auto, residencial e empresarial',           logo: '/seguradoras/tokio-marine.svg' },
  { nome: 'SulAmérica',         fone: '0800 721 0126', desc: 'Assistência 24h e sinistros',               logo: '/seguradoras/sulamerica.svg' },
  { nome: 'Mapfre Seguros',     fone: '0800 775 4545', desc: 'Apoio emergencial e guincho',               logo: '/seguradoras/mapfre.svg' },
  { nome: 'HDI Seguros',        fone: '0800 701 5430', desc: 'Avisos de sinistro e guincho rápido',       logo: '/seguradoras/hdi.svg' },
  { nome: 'Zurich Seguros',     fone: '0800 284 4848', desc: 'Sinistro e emergência 24h',                 logo: '/seguradoras/zurich.svg' },
  { nome: 'Suhai Seguros',      fone: '0800 327 8424', desc: 'Furto, roubo e assistência 24h',            logo: '/seguradoras/suhai.svg' },
  { nome: 'Sompo / Marítima',   fone: '0800 77 19 119',desc: 'Atendimento a ocorrências patrimoniais',    logo: '/seguradoras/maritima.svg' },
]

export function EmergencyModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botão Gatilho Fixo / Discreto ou no Menu */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir Telefones 24h de Seguradoras"
        className="emergency-trigger-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          padding: '8px 14px',
          borderRadius: '20px',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          color: '#DC2626',
          fontSize: '12px',
          fontWeight: 700,
          fontFamily: 'var(--ff-heading)',
          cursor: 'pointer',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        <PhoneCall size={14} /> Sinistro &amp; Telefones 24h
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="emergency-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              background: 'var(--white)',
              borderRadius: '20px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-xl)',
              padding: '32px 28px',
              position: 'relative',
              border: '1px solid var(--border)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Fechar */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar modal"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            {/* Cabeçalho do Modal */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.12)', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldAlert size={22} />
              </div>
              <div>
                <h3 id="emergency-title" style={{ fontFamily: 'var(--ff-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--text)' }}>
                  Apoio Emergencial &amp; Telefones 24h
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                  Telefones diretos das principais seguradoras conveniadas à Berakah
                </p>
              </div>
            </div>

            {/* Passo a Passo Rápido */}
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '16px', marginBottom: '22px', border: '1px solid var(--border)' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#D99500', textTransform: 'uppercase', fontFamily: 'var(--ff-heading)', display: 'block', marginBottom: '8px' }}>
                O que fazer em caso de sinistro:
              </span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: 'var(--text)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={14} color="#D99500" />
                  <span><strong>1. Segurança:</strong> Garanta a segurança física de todos e sinalize o local.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={14} color="#D99500" />
                  <span><strong>2. Registros:</strong> Tire fotos do local e anote dados de terceiros (placas, nomes).</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={14} color="#D99500" />
                  <span><strong>3. Acionamento:</strong> Ligue diretamente para o 0800 abaixo ou chame a Berakah no WhatsApp.</span>
                </li>
              </ul>
            </div>

            {/* Grid de Seguradoras */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginBottom: '24px' }}>
              {seguradorasTelefones.map(({ nome, fone, desc, logo }) => (
                <div
                  key={nome}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    background: 'var(--white)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '48px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', borderRadius: '8px', padding: '4px', flexShrink: 0 }}>
                      <Image
                        src={logo}
                        alt={nome}
                        width={44}
                        height={28}
                        style={{ objectFit: 'contain', maxHeight: '28px' }}
                      />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--ff-heading)' }}>
                        {nome}
                      </h4>
                      <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', lineHeight: 1.4 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`tel:${fone.replace(/\s+/g, '')}`}
                    style={{
                      marginTop: '10px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#D99500',
                      fontWeight: 800,
                      fontSize: '14px',
                      fontFamily: 'var(--ff-heading)',
                    }}
                  >
                    <PhoneCall size={14} /> {fone}
                  </a>
                </div>
              ))}
            </div>

            {/* Rodapé do Modal */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                Precisa do corretor Berakah no suporte?
              </span>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Sofri%20um%20sinistro%20e%20preciso%20de%20apoio%20da%20Berakah%20Seguros."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '10px 20px', borderRadius: '8px', fontSize: '13px' }}
              >
                Chamar Berakah no WhatsApp <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
