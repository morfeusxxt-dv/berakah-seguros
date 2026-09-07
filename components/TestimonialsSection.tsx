'use client'

import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcelo Silveira',
    location: 'São Paulo, SP',
    type: 'Seguro Automóvel',
    badge: 'Sinistro Resolvido',
    rating: 5,
    text: 'Bati o carro na Marginal às 22h de um domingo sob forte chuva. Em menos de 40 minutos o guincho da Porto Seguro já estava no local e a Berakah cuidou de toda a burocracia do carro reserva logo pela manhã. Acompanhamento humano de verdade.',
    avatar: 'MS',
  },
  {
    name: 'Dra. Camila Lourenço',
    location: 'Campinas, SP',
    type: 'Seguro Residencial & Consultório',
    badge: 'Indenização Rápida',
    rating: 5,
    text: 'Tivemos uma sobretensão na rede elétrica que danificou equipamentos caros na clínica. A intermediação da Berakah com a seguradora foi impecável: sem enrolação e com liquidação rápida. Recomendo de olhos fechados!',
    avatar: 'CL',
  },
  {
    name: 'Roberto Fagundes',
    location: 'Santo André, SP',
    type: 'Seguro de Vida & Planejamento',
    badge: 'Cliente desde 2023',
    rating: 5,
    text: 'Sempre achei seguro de vida confuso e cheio de pegadinhas nas letras miúdas. O consultor da Berakah explicou cláusula por cláusula com total transparência. Hoje tenho paz de espírito sabendo que meus filhos estão amparados.',
    avatar: 'RF',
  },
  {
    name: 'Juliana M. Brandão',
    location: 'São Paulo, SP',
    type: 'Seguro Empresarial & Frotas',
    badge: 'Gestão Corporativa',
    rating: 5,
    text: 'Migramos as apólices da nossa empresa para a Berakah e economizamos 18% no valor anual, além de ampliarmos a cobertura contra terceiros. O atendimento no pós-venda é incomparável.',
    avatar: 'JB',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section testimonials-section" id="depoimentos" aria-labelledby="depoimentos-heading" style={{ background: 'var(--warm-bg)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        
        {/* Cabeçalho da Prova Social */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '52px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: '30px',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', gap: '3px', color: '#FFB800' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#FFB800" />
              ))}
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--ff-heading)' }}>
              4.9 / 5.0 no Google Reviews
            </span>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
              • Mais de 280 segurados ativos
            </span>
          </div>

          <h2 id="depoimentos-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(32px, 3.8vw, 48px)', letterSpacing: '-0.035em', lineHeight: 1.15, color: 'var(--text)' }}>
            Quem viveu o sinistro sabe a <span style={{ color: '#D99500' }}>diferença.</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '600px', marginTop: '12px', lineHeight: 1.65 }}>
            Seguro não se avalia na hora de pagar a fatura; avalia-se no momento da necessidade. Veja relatos reais de quem conta com a Berakah:
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
          {testimonials.map((t, index) => (
            <article
              key={index}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Topo do Card: Estrelas e Badge de Sinistro */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '2px', color: '#FFB800' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#FFB800" />
                    ))}
                  </div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: 'var(--ff-heading)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      background: 'rgba(255, 199, 0, 0.15)',
                      color: '#9A6B00',
                      textTransform: 'uppercase',
                    }}
                  >
                    <ShieldCheck size={13} /> {t.badge}
                  </span>
                </div>

                {/* Texto do Depoimento */}
                <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '22px' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--black)',
                    color: 'var(--yellow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '14px',
                    fontFamily: 'var(--ff-heading)',
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--ff-heading)' }}>
                      {t.name}
                    </h3>
                    <CheckCircle2 size={13} color="#D99500" />
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                    {t.type} • {t.location}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
