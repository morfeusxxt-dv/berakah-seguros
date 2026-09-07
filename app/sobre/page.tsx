import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Shield, Award, CheckCircle2, Building2, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nós | Berakah Seguros — Grupo Baruch',
  description: 'Conheça a história e o propósito da Berakah Seguros. Nascida no coração do Grupo Baruch para oferecer consultoria de seguros transparente, humana e com presença real.',
}

const values = [
  { title: 'Escuta Ativa & Consultiva', desc: 'Antes de apresentar qualquer plano, conhecemos sua rotina, sua família ou sua empresa para indicar coberturas que realmente fazem sentido.' },
  { title: 'Transparência Inegociável', desc: 'Sem jargões incompreensíveis, sem letras miúdas. Você sabe exatamente o que está coberto e o valor correto da franquia em cada situação.' },
  { title: 'Presença Real no Sinistro', desc: 'Não desaparecemos após a assinatura. Quando o imprevisto acontece, assumimos o suporte técnico e burocrático junto à seguradora por você.' },
  { title: 'Solidez & Credibilidade',   desc: 'Respaldados pelo Grupo Baruch, operamos com estrutura sólida, governança e acesso às maiores seguradoras do mercado nacional.' },
  { title: 'Agilidade Tecnológica',     desc: 'Processos desburocratizados, cotações rápidas e atendimento direto pelo WhatsApp com respostas claras e humanas.' },
  { title: 'Cuidado com Conquistas',    desc: 'Não vendemos apenas apólices; viabilizamos a tranquilidade para você focar no crescimento da sua família e do seu negócio.' },
]

export default function SobrePage() {
  return (
    <>
      {/* ── INNER HERO CINEMÁTICA COM IMAGEM DE FUNDO ── */}
      <section className="page-hero" aria-labelledby="sobre-hero-heading">
        <Image
          src="/hero-sobre.jpg"
          alt="Diretoria executiva e consultores da Berakah Seguros — Grupo Baruch"
          fill
          className="hero-bg"
          priority
        />
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-gradient-bottom" aria-hidden="true" />
        <div className="hero-content">
          <span className="eyebrow">
            Quem Somos • Grupo Baruch
          </span>
          <h1 id="sobre-hero-heading">
            Nascemos para <span>fazer diferente.</span>
          </h1>
          <p className="hero-lead">
            Uma corretora moderna com atendimento humano, próximo e ágil, com o respaldo institucional e a credibilidade do Grupo Baruch.
          </p>
        </div>
      </section>

      {/* ── NOSSA HISTÓRIA & LIDERANÇA (RAFAELLA) ──── */}
      <section className="section" style={{ background: 'var(--warm-bg)', borderBottom: '1px solid var(--border)' }} aria-labelledby="historia-heading">
        <div className="about-mission">
          <div className="mission-text">
            <span className="eyebrow" style={{ color: '#D99500' }}>Liderança & Propósito</span>
            <h2 id="historia-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(32px,3.8vw,48px)', letterSpacing: '-0.035em', lineHeight: 1.15, marginTop: '14px', marginBottom: '22px', color: 'var(--text)' }}>
              Construída com foco real <span style={{ color: '#D99500' }}>nas pessoas.</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '18px' }}>
              À frente da Berakah Seguros está <strong style={{ color: 'var(--text)' }}>Rafaella</strong>, fundadora e diretora da corretora. A empresa nasceu da convicção de que o mercado de seguros precisava de uma abordagem mais próxima, humana e transparente, onde o segurado não é tratado como apenas um número de apólice.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '18px' }}>
              Integrada ao ecossistema do <strong style={{ color: 'var(--text)' }}>Grupo Baruch</strong> — holding empresarial com solidez comercial, governança e tradição em soluções financeiras —, a Berakah une o poder de negociação junto às maiores seguradoras do país à dedicação exclusiva de quem cuida de cada cliente de forma personalizada.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '32px' }}>
              <em>&ldquo;Nosso propósito é garantir que você e sua família vivam com tranquilidade real. Quando um imprevisto acontece, assumimos toda a frente com a seguradora para que você tenha o amparo rápido que merece.&rdquo;</em>
            </p>
            <Link href="/contato" className="btn btn-primary" id="sobre-cta-btn">
              Fale com a nossa equipe <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mission-visual" style={{ position: 'relative' }}>
            <Image
              src="/rafaella.png"
              alt="Rafaella — Fundadora e Diretora da Berakah Seguros"
              width={600}
              height={450}
              style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover', aspectRatio: '4/3', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
              priority
            />
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              left: '20px',
              right: '20px',
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              gap: '14px',
              alignItems: 'center',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <div style={{ width: '42px', height: '42px', background: 'var(--yellow)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Shield size={22} color="#111111" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'var(--ff-heading)', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text)' }}>Rafaella</div>
                <div style={{ fontSize: '12px', color: '#D99500', fontWeight: 700 }}>Fundadora & Diretora da Berakah Seguros</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE TER UM SEGURO HOJE ──────── */}
      <section className="section" style={{ background: 'var(--surface)' }} aria-labelledby="por-que-heading">
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div className="section-head text-center" style={{ maxWidth: '640px', margin: '0 auto 56px' }}>
            <span className="eyebrow" style={{ color: '#D99500', justifyContent: 'center' }}>Conscientização Real</span>
            <h2 id="por-que-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,48px)', letterSpacing: '-0.035em', marginTop: '14px', color: 'var(--text)' }}>
              Por que a proteção patrimonial <span style={{ color: '#D99500' }}>é indispensável.</span>
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '14px', fontSize: '15px' }}>
              Seguro não é um custo: é a garantia de que as conquistas da sua família não serão desfeitas por um imprevisto.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { num: '65%', desc: 'dos brasileiros não possuem nenhum tipo de seguro de vida, deixando famílias desamparadas financeiramente em emergências.' },
              { num: '1 em 3', desc: 'veículos sofre algum tipo de avaria ou sinistro ao ano. Quem não tem apólice completa paga o conserto integral do próprio bolso.' },
              { num: 'R$ 0', desc: 'é o custo da consultoria inicial com a Berakah. Você recebe o estudo comparativo detalhado antes de tomar qualquer decisão.' },
            ].map(({ num, desc }) => (
              <div key={num} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px 28px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '44px', fontWeight: 900, fontFamily: 'var(--ff-heading)', color: '#D99500', lineHeight: 1, marginBottom: '14px' }}>
                  {num}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSSOS PRINCÍPIOS ───────────────── */}
      <section className="section" style={{ background: 'var(--warm-bg)', borderTop: '1px solid var(--border)' }} aria-labelledby="values-heading">
        <div className="section-head text-center" style={{ maxWidth: '640px', margin: '0 auto 60px' }}>
          <span className="eyebrow" style={{ color: '#D99500', justifyContent: 'center' }}>Nossa Cultura</span>
          <h2 id="values-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(32px,3.8vw,48px)', letterSpacing: '-0.035em', marginTop: '14px', color: 'var(--text)' }}>
            Princípios que guiam nosso <span style={{ color: '#D99500' }}>atendimento.</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '14px' }}>Pilares práticos aplicados em cada simulação, contratação e renovação.</p>
        </div>

        <div className="values-grid">
          {values.map(({ title, desc }, i) => (
            <article className="value-card" key={title} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
              <div className="value-icon" aria-hidden="true" style={{ background: 'rgba(255,199,0,0.15)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'var(--ff-heading)', color: '#D99500' }}>0{i + 1}</span>
              </div>
              <h3 style={{ color: 'var(--text)', fontFamily: 'var(--ff-heading)', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.65 }}>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── SEGURADORAS PARCEIRAS ──────────── */}
      <section className="insurers-strip" aria-labelledby="insurers-heading" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '56px var(--section-px)' }}>
        <h3 id="insurers-heading" style={{ fontFamily: 'var(--ff-heading)', color: 'var(--muted)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '28px' }}>
          Trabalhamos em parceria com as maiores seguradoras do mercado brasileiro
        </h3>
        <div className="insurers-logos" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((n) => (
            <Image
              key={n}
              src={`/logos/logo_${String(n).padStart(2, '0')}.png`}
              alt={`Seguradora parceira ${n}`}
              width={105}
              height={34}
              className="insurer-logo"
              style={{ filter: 'grayscale(100%)', opacity: 0.8 }}
            />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────── */}
      <section className="final-cta" aria-labelledby="sobre-final-cta-heading">
        <div className="final-cta-bg" aria-hidden="true" />
        <div className="final-cta-content">
          <span className="eyebrow">Vamos conversar?</span>
          <h2 id="sobre-final-cta-heading">
            Proteja suas conquistas com a <em>Berakah Seguros.</em>
          </h2>
          <p>
            Fale com um consultor especialista e receba um estudo comparativo personalizado para o seu perfil.
          </p>
          <div className="final-cta-actions">
            <Link href="/contato" className="btn btn-primary btn-lg" id="sobre-final-cta-btn">
              Solicitar cotação personalizada <ArrowUpRight size={18} />
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20equipe%20da%20Berakah%20Seguros"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-lg"
              id="sobre-wa-btn"
            >
              WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
