'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight, Car, House, HeartPulse,
  BriefcaseBusiness, Plane, ShieldCheck, Smartphone,
  Stethoscope, Truck, Anchor, CheckCircle2, MessageSquare,
} from 'lucide-react'

type Category = 'todos' | 'voce' | 'empresa'

interface Solution {
  icon: any
  title: string
  slug: string
  category: 'voce' | 'empresa'
  tag: string
  desc: string
  benefits: string[]
  featured?: boolean
}

const solutions: Solution[] = [
  // ── Para Você & Família
  {
    icon: Car,
    title: 'Seguro Auto & Motos',
    slug: 'auto',
    category: 'voce',
    tag: 'Mais Procurado',
    desc: 'Cobertura completa contra colisão, roubo, furto, terceiros e desastres naturais, com assistência 24h sem limite de km em todo o Brasil.',
    benefits: ['Guincho 24h em todo o Brasil', 'Carro reserva com ar-condicionado', 'Cobertura para vidros, faróis e retrovisores', 'Indenização 100% tabela FIPE ou valor contratado', 'Assistência residencial básica inclusa'],
    featured: true,
  },
  {
    icon: House,
    title: 'Seguro Residencial',
    slug: 'residencial',
    category: 'voce',
    tag: 'Proteção Patrimonial',
    desc: 'O lar da sua família protegido contra incêndio, vendaval, danos elétricos, roubo de bens e vazamentos hidráulicos.',
    benefits: ['Cobertura para estrutura física e conteúdo', 'Assistência emergencial (eletricista, encanador, chaveiro)', 'Responsabilidade civil familiar', 'Danos elétricos a eletrodomésticos e eletrônicos', 'Pagamento de aluguel em caso de sinistro'],
    featured: false,
  },
  {
    icon: HeartPulse,
    title: 'Seguro de Vida & Sucessão',
    slug: 'vida',
    category: 'voce',
    tag: 'Blindagem Familiar',
    desc: 'Segurança e liquidez imediata para seus dependentes, com coberturas em vida para diagnóstico de doenças graves e invalidez.',
    benefits: ['Indenização isenta de imposto de renda e inventário', 'Adiantamento em vida para diagnóstico de doenças graves', 'Diárias por incapacidade temporária (DIT)', 'Cobertura para invalidez total ou parcial por acidente', 'Assistência funeral familiar completa'],
    featured: true,
  },
  {
    icon: Stethoscope,
    title: 'Saúde & Odontológico',
    slug: 'saude',
    category: 'voce',
    tag: 'Qualidade de Vida',
    desc: 'Planos de saúde individuais, familiares e coletivos por adesão com acesso aos hospitais, laboratórios e especialistas de referência.',
    benefits: ['Ampla rede credenciada nacional', 'Reembolso ágil para consultas e procedimentos fora da rede', 'Programas de telemedicina 24h sem coparticipação', 'Cobertura obstétrica completa e exames preventivos', 'Planos odontológicos conjugados'],
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Equipamentos Portáteis',
    slug: 'portateis',
    category: 'voce',
    tag: 'Tecnologia',
    desc: 'Smartphones, notebooks, câmeras fotográficas e drones protegidos onde quer que você esteja, no Brasil ou no exterior.',
    benefits: ['Roubo e furto qualificado cobertos', 'Danos acidentais por queda e derramamento de líquidos', 'Cobertura internacional para viagens a negócios ou lazer', 'Reposição rápida de aparelhos de última geração', 'Franquia justa e simplificada'],
    featured: false,
  },
  {
    icon: Plane,
    title: 'Seguro Viagem Nacional & Internacional',
    slug: 'viagem',
    category: 'voce',
    tag: 'Tranquilidade Global',
    desc: 'Assistência médica hospitalar, farmacêutica e jurídica para viagens turísticas, corporativas ou estudos no exterior.',
    benefits: ['Atendimento médico em caso de urgência e emergência', 'Cobertura de extravio ou atraso de bagagem', 'Cancelamento ou interrupção de viagem involuntária', 'Cobertura para esportes amadores e turismo de aventura', 'Atendimento 24h em português em qualquer fuso'],
    featured: false,
  },

  // ── Para Sua Empresa & Negócios
  {
    icon: BriefcaseBusiness,
    title: 'Seguro Empresarial & Patrimonial',
    slug: 'empresarial',
    category: 'empresa',
    tag: 'Corporativo',
    desc: 'Blindagem completa para seu estabelecimento comercial, escritório, galpão ou indústria contra incêndio, roubo e danos.',
    benefits: ['Proteção de prédios, instalações, estoques e maquinário', 'Cobertura de lucros cessantes e despesas fixas contínuas', 'Responsabilidade civil de operações e produtos', 'Danos elétricos e quebra de máquinas de precisão', 'Serviços emergenciais para manutenção do imóvel'],
    featured: true,
  },
  {
    icon: Car,
    title: 'Seguro de Frotas de Veículos',
    slug: 'frotas',
    category: 'empresa',
    tag: 'Gestão de Frotas',
    desc: 'Gestão unificada de apólices automotivas para frotas de veículos leves, vans executivas e caminhões com atendimento prioritário.',
    benefits: ['Apólice única com faturamento centralizado', 'Assistência 24h dedicada para frotas comerciais', 'Descontos progressivos por sinistralidade reduzida', 'Rastreamento e telemetria integráveis', 'Carro reserva específico para reposição operacional'],
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: 'Responsabilidade Civil (RC Geral & D&O)',
    slug: 'rc',
    category: 'empresa',
    tag: 'Proteção Jurídica',
    desc: 'Proteção patrimonial para diretores e administradores (D&O), além de cobertura de erros e omissões para prestadores de serviços (E&O).',
    benefits: ['Defesa jurídica e custas processuais cobertas', 'Indenização a terceiros por danos corporais ou materiais', 'Proteção pessoal aos bens dos executivos e gestores', 'Cobertura de danos morais decorrentes de sinistros', 'Customização por segmento de atuação (médico, engenharia, TI)'],
    featured: false,
  },
  {
    icon: Truck,
    title: 'Transporte & Cargas',
    slug: 'transporte',
    category: 'empresa',
    tag: 'Logística',
    desc: 'Cobertura completa para cargas transportadas por via rodoviária, aérea, marítima ou ferroviária em âmbito nacional e internacional.',
    benefits: ['RCTR-C, RC-DC e coberturas adicionais obrigatórias', 'Proteção contra tombamento, colisão e roubo em trânsito', 'Averbação eletrônica simplificada e ágil', 'Equipe especializada em gerenciamento de riscos de carga', 'Indenização ágil para não paralisar o fluxo de caixa'],
    featured: false,
  },
  {
    icon: Anchor,
    title: 'Seguro Náutico & Aeronáutico',
    slug: 'nautico',
    category: 'empresa',
    tag: 'Alto Padrão',
    desc: 'Proteção de bens de luxo: lanchas, iates, veleiros, jetskis, helicópteros e aeronaves executivas particulares.',
    benefits: ['Cobertura de casco, motores e acessórios de navegação', 'Responsabilidade civil náutica e aeronáutica', 'Remoção de destroços e socorro e salvamento marítimo', 'Guarda em marina ou hangar credenciado', 'Cobertura para transporte terrestre em carretas rodoviárias'],
    featured: false,
  },
]

export default function SolucoesPage() {
  const [filter, setFilter] = useState<Category>('todos')

  const filteredSolutions = solutions.filter((item) => {
    if (filter === 'todos') return true
    return item.category === filter
  })

  return (
    <>
      {/* ── INNER HERO CINEMÁTICA COM IMAGEM DE FUNDO ── */}
      <section className="page-hero" aria-labelledby="solucoes-hero-heading">
        <Image
          src="/hero-solucoes.jpg"
          alt="Consultora da Berakah Seguros apresentando coberturas personalizadas"
          fill
          className="hero-bg"
          priority
          sizes="100vw"
        />
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-gradient-bottom" aria-hidden="true" />
        <div className="hero-content">
          <span className="eyebrow">
            Soluções &amp; Coberturas • Berakah Seguros
          </span>
          <h1 id="solucoes-hero-heading">
            Proteção sob medida para <span>tudo o que você conquistou.</span>
          </h1>
          <p className="hero-lead">
            Do automóvel à sucessão familiar; da sua residência a frotas corporativas. Escolha a categoria e compare as melhores opções de cobertura com um consultor especialista.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO DE SOLUÇÕES COM FILTRO ────── */}
      <section className="section" style={{ background: 'var(--warm-bg)' }} aria-labelledby="solutions-list-heading">
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          
          {/* Header & Tabs */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap', marginBottom: '44px', borderBottom: '1px solid var(--border)', paddingBottom: '28px' }}>
            <div>
              <span className="eyebrow" style={{ color: '#D99500' }}>11 Modalidades Disponíveis</span>
              <h2 id="solutions-list-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,46px)', letterSpacing: '-0.035em', marginTop: '10px', color: 'var(--text)' }}>
                Encontre o seguro <span style={{ color: '#D99500' }}>ideal para o seu momento.</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', background: 'var(--surface)', padding: '6px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <button
                type="button"
                onClick={() => setFilter('todos')}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontFamily: 'var(--ff-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  background: filter === 'todos' ? 'var(--yellow)' : 'transparent',
                  color: filter === 'todos' ? 'var(--black)' : 'var(--muted)',
                  transition: 'all 0.2s ease',
                }}
              >
                Todas ({solutions.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('voce')}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontFamily: 'var(--ff-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  background: filter === 'voce' ? 'var(--yellow)' : 'transparent',
                  color: filter === 'voce' ? 'var(--black)' : 'var(--muted)',
                  transition: 'all 0.2s ease',
                }}
              >
                Para Você &amp; Família (6)
              </button>
              <button
                type="button"
                onClick={() => setFilter('empresa')}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontFamily: 'var(--ff-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  background: filter === 'empresa' ? 'var(--yellow)' : 'transparent',
                  color: filter === 'empresa' ? 'var(--black)' : 'var(--muted)',
                  transition: 'all 0.2s ease',
                }}
              >
                Para Sua Empresa (5)
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
            {filteredSolutions.map((item) => {
              const Icon = item.icon
              const waText = encodeURIComponent(`Olá, gostaria de solicitar uma cotação de ${item.title} com a Berakah Seguros.`)

              return (
                <article
                  key={item.slug}
                  id={`solucao-${item.slug}`}
                  style={{
                    background: 'var(--white)',
                    border: item.featured ? '2px solid var(--yellow)' : '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '36px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: item.featured ? '0 12px 36px rgba(255,199,0,0.12)' : 'var(--shadow-sm)',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <div>
                    {/* Top line with icon & tag */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          background: item.featured ? 'var(--yellow)' : 'rgba(255,199,0,0.15)',
                          color: item.featured ? 'var(--black)' : '#D99500',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <span
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--ff-heading)',
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: item.featured ? '#111111' : 'var(--muted)',
                          background: item.featured ? 'var(--yellow)' : 'var(--surface)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--text)', marginBottom: '10px' }}>
                      {item.title}
                    </h3>

                    <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.65', marginBottom: '24px' }}>
                      {item.desc}
                    </p>

                    {/* Benefits checklist */}
                    <div style={{ marginBottom: '32px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 800, fontFamily: 'var(--ff-heading)', letterSpacing: '0.08em', color: '#D99500', textTransform: 'uppercase', marginBottom: '12px' }}>
                        Principais Coberturas:
                      </div>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.benefits.map((b) => (
                          <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-light)', lineHeight: 1.4 }}>
                            <CheckCircle2 size={15} color="#D99500" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                    <a
                      href={`https://wa.me/5511999999999?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, justifyContent: 'center', fontSize: '13px', padding: '12px 16px' }}
                      id={`cotar-wa-${item.slug}`}
                    >
                      <MessageSquare size={15} /> Cotar no WhatsApp
                    </a>
                    <Link
                      href={`/contato?seguro=${item.slug}`}
                      className="btn btn-outline"
                      style={{ fontSize: '13px', padding: '12px 14px', borderColor: 'var(--border-dark)', color: 'var(--text)' }}
                      id={`cotar-form-${item.slug}`}
                    >
                      Formulário <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TRUST PROMISE ────────────────────── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: 'clamp(60px,8vw,90px) var(--section-px)' }} aria-labelledby="promise-heading">
        <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow" style={{ color: '#D99500' }}>Diferencial Berakah</span>
            <h2 id="promise-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,46px)', letterSpacing: '-0.035em', lineHeight: 1.15, marginTop: '14px', color: 'var(--text)' }}>
              Por que contratar com a <span style={{ color: '#D99500' }}>Berakah Seguros?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.75, marginTop: '16px' }}>
              Muitas pessoas contratam seguro sem assessoria e descobrem no momento do sinistro que a apólice não cobria o essencial. Na Berakah, fazemos uma análise técnica antes de qualquer contratação.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: 'Estudo em Múltiplas Seguradoras', desc: 'Comparamos propostas em mais de 8 seguradoras para encontrar a melhor franquia e menor custo.' },
              { title: 'Suporte Ativo no Sinistro', desc: 'Se você bater o carro ou tiver um dano no imóvel, nós acionamos a seguradora e cuidamos de tudo.' },
              { title: 'Agilidade & Atendimento Humano', desc: 'Sem robôs e sem burocracia. Você conversa diretamente com um consultor especialista para tirar dúvidas e fechar sua apólice.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '22px 24px', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '16px', fontWeight: 700, color: '#D99500', marginBottom: '6px' }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────── */}
      <section className="final-cta">
        <div className="final-cta-bg" aria-hidden="true" />
        <div className="final-cta-content">
          <span className="eyebrow">Cotação em Menos de 5 Minutos</span>
          <h2 style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(36px,4.8vw,60px)', letterSpacing: '-0.035em' }}>
            Pronto para proteger o que <em>é seu?</em>
          </h2>
          <p>
            Fale com um corretor especialista agora mesmo pelo WhatsApp ou deixe seus dados para contato.
          </p>
          <div className="final-cta-actions">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20da%20Berakah%20Seguros"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="solucoes-wa-final-btn"
            >
              Falar no WhatsApp <ArrowUpRight size={18} />
            </a>
            <Link href="/contato" className="btn btn-outline-dark btn-lg" id="solucoes-form-final-btn">
              Preencher formulário de contato <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
