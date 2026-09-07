'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight, Plus, Check,
  Car, House, HeartPulse, BriefcaseBusiness, Plane,
  Smartphone, Stethoscope, ShieldCheck,
} from 'lucide-react'
import { InsuranceSimulator } from '@/components/InsuranceSimulator'
import { TestimonialsSection } from '@/components/TestimonialsSection'

/* ── Catálogo de Seguros ──────────────────── */
const services = [
  { icon: Car,               slug: 'auto',         title: 'Seguro Auto',         desc: 'Proteção completa para veículos individuais ou frotas, com assistência 24h sem limite de km em todo o Brasil.', featured: false },
  { icon: House,             slug: 'residencial',  title: 'Seguro Residencial',  desc: 'Seu lar e tudo o que você construiu protegidos contra incêndio, roubo, danos elétricos e desastres naturais.', featured: false },
  { icon: HeartPulse,        slug: 'vida',         title: 'Seguro de Vida',      desc: 'Segurança financeira e liquidez imediata para sua família, além de coberturas completas com amparo em vida.', featured: true },
  { icon: Stethoscope,       slug: 'saude',        title: 'Saúde & Odonto',      desc: 'Planos individuais e corporativos com acesso às melhores redes hospitalares, laboratórios e especialistas.', featured: false },
  { icon: BriefcaseBusiness, slug: 'empresarial',  title: 'Seguro Empresarial',  desc: 'Proteção patrimonial completa para seu comércio, escritório ou indústria, incluindo lucros cessantes.', featured: false },
  { icon: ShieldCheck,       slug: 'rc',           title: 'Responsabilidade Civil', desc: 'Blindagem jurídica e patrimonial para executivos (D&O), médicos, advogados, engenheiros e prestadores.', featured: false },
  { icon: Smartphone,        slug: 'portateis',    title: 'Equipamentos Portáteis', desc: 'Notebooks, smartphones e câmeras protegidos no Brasil e no exterior contra roubo, furto e danos acidentais.', featured: false },
  { icon: Plane,             slug: 'viagem',       title: 'Seguro Viagem',       desc: 'Assistência médica hospitalar 24h em viagens nacionais e internacionais, extravio de bagagem e repatriação.', featured: false },
]

const partnerInsurers = [9, 10, 11, 12, 13, 14, 15, 16]

const blogPosts = [
  { slug: 'seguro-auto-guia-completo',   thumb: '/blog-auto.jpg',    category: 'Auto',        date: '28 de Agosto de 2026', title: 'Guia definitivo: como escolher o seguro auto ideal sem pagar a mais por isso',         excerpt: 'Franquia normal ou reduzida? Cobertura compreensiva ou apenas terceiros? Entenda cada detalhe antes de contratar.' },
  { slug: 'seguro-de-vida-para-familia', thumb: '/blog-vida.jpg',    category: 'Vida',        date: '15 de Julho de 2026',  title: 'Por que o seguro de vida moderno é a ferramenta definitiva de proteção em vida',      excerpt: 'Mais do que uma apólice, o seguro de vida moderno é uma estratégia de liquidez, amparo a doenças graves e blindagem familiar.' },
  { slug: 'seguro-empresarial-guia',     thumb: '/blog-empresa.jpg', category: 'Empresarial', date: '3 de Junho de 2026',   title: 'Seu negócio está verdadeiramente protegido? Riscos operacionais que ameaçam seu CNPJ', excerpt: 'Conheça as coberturas essenciais de incêndio, lucros cessantes e responsabilidade civil para manter sua empresa segura.' },
]

const faqs = [
  { q: 'Por que contratar meu seguro com a Berakah Seguros?', a: 'A Berakah Seguros combina atendimento consultivo humanizado com acesso direto às maiores seguradoras do país. Não empurramos apólices prontas: estudamos sua realidade para que você tenha a melhor cobertura pelo preço justo, com suporte total e ágil no momento do sinistro.' },
  { q: 'A Berakah faz parte de algum grupo empresarial?',     a: 'Sim! Fazemos parte do Grupo Baruch, uma holding sólida que nos confere grande poder de negociação e respaldo institucional junto às seguradoras, garantindo que nossos segurados tenham máxima tranquilidade desde o primeiro contato.' },
  { q: 'Quais tipos de seguros posso cotar com a Berakah?',    a: 'Operamos em todas as modalidades: Seguro Auto e Motos, Residencial, Vida e Sucessão, Planos de Saúde e Odonto, Empresarial, Frotas, Responsabilidade Civil (D&O / E&O), Equipamentos Portáteis, Seguro Viagem, Náutico e Cargas.' },
  { q: 'Com quais seguradoras vocês trabalham?',               a: 'Trabalhamos em parceria com as líderes do mercado nacional, como Porto Seguro, Bradesco Seguros, Allianz, Tokio Marine, SulAmérica, Mapfre, Zurich, Liberty, entre outras.' },
  { q: 'Como solicito uma cotação rápida?',                    a: 'É muito simples: você pode clicar no botão do WhatsApp e conversar instantaneamente com um consultor especialista, ou preencher o formulário no nosso site. Enviamos propostas comparativas em poucos minutos.' },
]

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO FULL-BLEED CINEMÁTICA DE LADO A LADO ─────── */}
      <section className="home-hero" id="inicio" aria-label="Início">
        <div className="home-hero-bg-wrap">
          <Image
            src="/hero-home.jpg"
            alt="Família protegida pela Berakah Seguros"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="home-hero-gradient" aria-hidden="true" />
        <div className="home-hero-gradient-bottom" aria-hidden="true" />

        <div className="home-hero-content">
          <div className="hero-trust-badge">
            <span className="dot-pulse" aria-hidden="true" />
            <span>Corretora de Seguros • Grupo Baruch</span>
          </div>

          <h1>
            Proteja o que você<br />
            construiu. O resto<br />
            <em>a gente cuida.</em>
          </h1>

          <p className="hero-lead">
            Comparamos apólices em mais de 10 seguradoras líderes para você ter a cobertura ideal pelo menor custo — com atendimento humano e apoio total em qualquer sinistro.
          </p>

          <div className="hero-actions-home">
            <Link href="/contato" className="btn btn-primary btn-lg" id="hero-cta-cotacao">
              Simular Seguro Agora <ArrowUpRight size={18} />
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20seguro%20com%20a%20Berakah."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-hero"
              id="hero-whatsapp-btn"
            >
              Falar com Especialista <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-features-row">
            <div className="hero-feat-item">
              <Check size={16} className="feat-check" />
              <span>Sem letras miúdas</span>
            </div>
            <div className="hero-feat-item">
              <Check size={16} className="feat-check" />
              <span>Apoio total no sinistro</span>
            </div>
            <div className="hero-feat-item">
              <Check size={16} className="feat-check" />
              <span>Agilidade na emissão</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (BARRA DE AUTORIDADE) ─────── */}
      <section className="trust-bar" aria-label="Seguradoras parceiras">
        <div className="trust-bar-inner">
          <div className="trust-holding-pill">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--black)', display: 'inline-block' }} />
            GRUPO BARUCH • PARCERIA OFICIAL
          </div>

          <div className="trust-insurers-wrap">
            <span className="trust-insurers-label">Cotação com as maiores seguradoras do país:</span>
            <div className="trust-insurers-list">
              {partnerInsurers.map((n) => (
                <Image
                  key={n}
                  src={`/logos/logo_${String(n).padStart(2, '0')}.png`}
                  alt={`Seguradora conveniada ${n}`}
                  width={95}
                  height={28}
                  className="trust-insurer-item"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2: A REALIDADE QUE NINGUÉM CONTA (CARDS BICOLORES) ── */}
      <section className="section-dual" id="conscientizacao" aria-labelledby="dual-heading">
        <div className="section-dual-split">
          
          {/* Lado Esquerdo: Conteúdo Direcionado a Seguros */}
          <div>
            <span className="eyebrow" style={{ color: '#D99500' }}>A Realidade que Ninguém Conta</span>
            <h2 id="dual-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(32px, 3.8vw, 50px)', letterSpacing: '-0.035em', lineHeight: 1.15, marginTop: '16px', color: 'var(--text)' }}>
              Imprevistos não avisam.<br />
              <span style={{ color: '#D99500' }}>Estar preparado, sim.</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginTop: '20px', marginBottom: '32px' }}>
              Imprevistos acontecem quando menos esperamos — de uma colisão no trânsito a um dano patrimonial ou emergência de saúde. Sem a apólice correta, o prejuízo pode desestruturar anos de conquistas. Na Berakah Seguros, estruturamos a cobertura exata para o seu perfil junto às principais seguradoras do Brasil, com acompanhamento humano em todas as etapas.
            </p>
            <Link href="/contato" className="btn btn-primary btn-lg" id="dual-cta-btn">
              Simular minha proteção <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Lado Direito: 4 Cards Bicolores (Preto e Amarelo da Marca) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }}>
            
            {/* Card 1: Preto Sólido (#111111) */}
            <div className="dual-card dual-card-black" style={{ padding: '28px 24px' }}>
              <div>
                <span className="dual-card-tag">Vulnerabilidade</span>
                <div className="dual-card-metric">1 em 3</div>
                <p className="dual-card-label">
                  brasileiros já sofreu perda patrimonial significativa por falta de seguro adequado.
                </p>
              </div>
              <div className="dual-card-footer" style={{ marginTop: '20px', paddingTop: '14px' }}>
                <span>PATRIMÔNIO EM RISCO</span>
                <ArrowUpRight size={15} />
              </div>
            </div>

            {/* Card 2: Amarelo Baruch (#FFC700) */}
            <div className="dual-card dual-card-yellow" style={{ padding: '28px 24px' }}>
              <div>
                <span className="dual-card-tag">Custo Médio</span>
                <div className="dual-card-metric">R$ 40k</div>
                <p className="dual-card-label">
                  é o custo médio de um sinistro residencial grave ou colisão pago do próprio bolso.
                </p>
              </div>
              <div className="dual-card-footer" style={{ marginTop: '20px', paddingTop: '14px' }}>
                <span>IMPACTO NO BOLSO</span>
                <ArrowUpRight size={15} />
              </div>
            </div>

            {/* Card 3: Amarelo Baruch (#FFC700) */}
            <div className="dual-card dual-card-yellow" style={{ padding: '28px 24px' }}>
              <div>
                <span className="dual-card-tag">Trânsito Urbano</span>
                <div className="dual-card-metric">70%</div>
                <p className="dual-card-label">
                  dos veículos em circulação no país não possuem seguro completo contra terceiros.
                </p>
              </div>
              <div className="dual-card-footer" style={{ marginTop: '20px', paddingTop: '14px' }}>
                <span>EXPOSIÇÃO DIÁRIA</span>
                <ArrowUpRight size={15} />
              </div>
            </div>

            {/* Card 4: Preto Sólido (#111111) */}
            <div className="dual-card dual-card-black" style={{ padding: '28px 24px' }}>
              <div>
                <span className="dual-card-tag">Agilidade Berakah</span>
                <div className="dual-card-metric">Até 24h</div>
                <p className="dual-card-label">
                  para cotação nas melhores seguradoras, análise de perfil e ativação da sua apólice.
                </p>
              </div>
              <div className="dual-card-footer" style={{ marginTop: '20px', paddingTop: '14px' }}>
                <span>RESPOSTA RÁPIDA</span>
                <ArrowUpRight size={15} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SIMULADOR INTERATIVO DE SEGUROS ─────── */}
      <InsuranceSimulator />

      {/* ── PORTFÓLIO DE SEGUROS ─────────────── */}
      <section className="section services-section" id="solucoes" aria-labelledby="services-heading">
        <div className="section-head" style={{ marginBottom: '40px' }}>
          <span className="eyebrow">Para Cada Fase da Vida</span>
          <h2 id="services-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(32px,3.8vw,48px)', letterSpacing: '-0.035em', marginTop: '14px', lineHeight: 1.15, color: 'var(--text)' }}>
            Proteção que <span style={{ color: '#D99500' }}>entende você.</span>
          </h2>
        </div>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '48px' }}>
          {services.map(({ icon: Icon, title, desc, featured, slug }) => (
            <article
              key={slug}
              className={`service-card${featured ? ' featured' : ''}`}
              style={{
                background: 'var(--white)',
                border: featured ? '2px solid var(--yellow)' : '1px solid var(--border)',
                borderRadius: '16px',
                padding: '32px 28px',
                boxShadow: featured ? '0 12px 32px rgba(255,199,0,0.12)' : 'var(--shadow-sm)',
              }}
            >
              <div
                className="service-icon"
                style={{
                  background: featured ? 'var(--yellow)' : 'rgba(255,199,0,0.12)',
                  color: featured ? '#111111' : '#D99500',
                  borderRadius: '10px',
                  width: '50px',
                  height: '50px',
                }}
              >
                <Icon size={24} strokeWidth={2} />
              </div>
              <h3 style={{ color: 'var(--text)', fontFamily: 'var(--ff-heading)', fontWeight: 700, fontSize: '19px', marginTop: '16px', marginBottom: '8px' }}>
                {title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.65, flex: 1 }}>
                {desc}
              </p>
              <Link href="/solucoes" className="service-card-link" style={{ color: '#D99500', marginTop: '18px', fontWeight: 700 }} aria-label={`Ver detalhes de ${title}`}>
                Conhecer coberturas <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/solucoes" className="btn btn-outline" id="services-all-btn" style={{ borderColor: 'var(--border-dark)', color: 'var(--text)' }}>
            Ver todas as 11 soluções de seguros <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── POR QUE A BERAKAH (INSTITUCIONAL SEGUROS) ─ */}
      <section className="why-section" id="sobre" aria-labelledby="why-heading">
        <div className="why-visual">
          <Image
            src="/home-why-holding.jpg"
            alt="Consultoria de seguros da Berakah"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="why-content">
          <span className="eyebrow">Corretora Parceira do Grupo Baruch</span>
          <h2 id="why-heading">
            Proteção real com quem<br /><span style={{ color: '#D99500' }}>está ao seu lado.</span>
          </h2>
          <p style={{ marginBottom: '32px' }}>
            Fundada por <strong>Rafaella</strong> e integrada à solidez do <strong>Grupo Baruch</strong>, a Berakah Seguros une o poder de negociação junto às maiores seguradoras do país à dedicação exclusiva de quem acompanha cada sinistro do início ao fim, com total proximidade e sem letras miúdas.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/sobre" className="btn btn-primary" id="why-sobre-btn">
              Nossa História <ArrowUpRight size={16} />
            </Link>
            <Link href="/contato" className="btn btn-outline-dark" id="why-cta-btn">
              Falar com um Corretor <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESSO SIMPLES E TRANSPARENTE ──── */}
      <section className="section process-section" id="processo" aria-labelledby="process-heading" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="section-head text-center" style={{ maxWidth: '640px', margin: '0 auto 56px' }}>
          <span className="eyebrow" style={{ color: '#D99500', justifyContent: 'center' }}>Sem Letras Miúdas</span>
          <h2 id="process-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.035em', marginTop: '14px', lineHeight: 1.15, color: 'var(--text)' }}>
            Do primeiro contato ao <span style={{ color: '#D99500' }}>acompanhamento de sinistro.</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '14px' }}>Veja como é simples e transparente contratar sua apólice conosco:</p>
        </div>
        <div className="process-grid">
          {[
            { title: 'Escuta Ativa', desc: 'Conhecemos sua rotina e o que você precisa proteger.' },
            { title: 'Estudo Personalizado', desc: 'Cotamos nas melhores seguradoras e comparamos franquias.' },
            { title: 'Apresentação Clara', desc: 'Mostramos o que cada opção realmente cobre, sem jargões.' },
            { title: 'Ativação Ágil', desc: 'Emissão rápida e envio da apólice digital no seu WhatsApp.' },
            { title: 'Presença no Sinistro', desc: 'Em qualquer eventualidade, cuidamos de toda a burocracia.' },
          ].map(({ title, desc }, i) => (
            <div className="process-step" key={title} style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '30px 22px', borderRadius: '14px' }}>
              <div className="step-num" style={{ color: 'var(--yellow)', fontFamily: 'var(--ff-heading)', fontWeight: 800 }}>0{i + 1}</div>
              <h3 style={{ color: 'var(--text)', fontFamily: 'var(--ff-heading)', fontSize: '17px', margin: '14px 0 8px' }}>{title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROVA SOCIAL & DEPOIMENTOS DE SINISTRO ─ */}
      <TestimonialsSection />

      {/* ── BLOG PREVIEW ─────────────────────── */}
      <section className="section" style={{ background: 'var(--warm-bg)' }} aria-labelledby="blog-home-heading">
        <div className="section-head-split">
          <div>
            <span className="eyebrow" style={{ color: '#D99500' }}>Educação &amp; Consciência</span>
            <h2 id="blog-home-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(32px,3.8vw,50px)', letterSpacing: '-0.035em', marginTop: '14px', color: 'var(--text)' }}>
              Conteúdo para quem pensa no <span style={{ color: '#D99500' }}>futuro.</span>
            </h2>
          </div>
          <Link href="/blog" className="text-link head-right" style={{ alignSelf: 'flex-end', color: '#D99500', borderBottomColor: '#D99500' }}>
            Acessar todos os artigos <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="blog-grid" style={{ marginTop: '44px' }}>
          {blogPosts.map(({ slug, thumb, category, date, title, excerpt }) => (
            <article key={slug} className="blog-card" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
              <div className="blog-card-thumb" style={{ position: 'relative', height: '220px', width: '100%' }}>
                <Image src={thumb} alt={title} fill style={{ objectFit: 'cover' }} />
                <span className="blog-badge" style={{ position: 'absolute', top: 16, left: 16, background: 'var(--yellow)', color: 'var(--black)', fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: '10px', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase' }}>{category}</span>
              </div>
              <div className="blog-card-body" style={{ padding: '24px' }}>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>{date}</div>
                <h3 style={{ color: 'var(--text)', fontFamily: 'var(--ff-heading)', fontSize: '17px', lineHeight: 1.35, marginBottom: '10px' }}>
                  <Link href={`/blog/${slug}`} style={{ color: 'inherit' }}>{title}</Link>
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, marginBottom: '18px' }}>{excerpt}</p>
                <Link href={`/blog/${slug}`} className="service-card-link" style={{ color: '#D99500', fontWeight: 700 }}>
                  Ler artigo completo <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section className="section faq-section" id="duvidas" aria-labelledby="faq-heading" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="section-head text-center" style={{ maxWidth: '640px', margin: '0 auto 52px' }}>
          <span className="eyebrow" style={{ color: '#D99500', justifyContent: 'center' }}>Perguntas Frequentes</span>
          <h2 id="faq-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(32px,4vw,50px)', letterSpacing: '-0.035em', marginTop: '14px', color: 'var(--text)' }}>
            Tire suas <span style={{ color: '#D99500' }}>dúvidas.</span>
          </h2>
        </div>

        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map(({ q, a }, index) => {
            const isOpen = activeFaq === index
            return (
              <div
                key={q}
                className={`faq-item${isOpen ? ' open' : ''}`}
                onClick={() => setActiveFaq(isOpen ? null : index)}
                style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', marginBottom: '12px', padding: '24px' }}
              >
                <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--ff-heading)' }}>{q}</h3>
                  <div className="faq-toggle" style={{ color: '#D99500', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>
                    <Plus size={20} />
                  </div>
                </div>
                {isOpen && (
                  <div className="faq-answer" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border)', color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7 }}>
                    <p>{a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="final-cta-bg" aria-hidden="true" />
        <div className="final-cta-content">
          <span className="eyebrow">Pronto para proteger o que importa?</span>
          <h2 id="cta-heading">
            Comece sua cotação <em>sem compromisso.</em>
          </h2>
          <p>
            Fale com um consultor especialista da Berakah Seguros pelo WhatsApp ou solicite uma simulação personalizada pelo formulário.
          </p>
          <div className="final-cta-actions">
            <Link href="/contato" className="btn btn-primary btn-lg" id="home-final-cta-btn">
              Solicitar cotação <ArrowUpRight size={18} />
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o%20com%20a%20Berakah%20Seguros"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-lg"
              id="home-final-wa-btn"
            >
              Falar no WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
