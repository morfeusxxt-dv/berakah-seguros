import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Berakah Seguros — Dicas e Educação Securitária',
  description: 'Artigos, guias práticos e análises sobre seguros auto, vida e empresarial. Informação clara e transparente para você tomar as melhores decisões.',
}

export const posts = [
  {
    slug: 'seguro-auto-guia-completo',
    thumb: '/blog-auto.jpg',
    category: 'Auto & Frotas',
    date: '28 de Agosto de 2026',
    readTime: '7 min',
    title: 'Guia definitivo: como escolher o seguro auto ideal sem pagar a mais por isso',
    excerpt: 'Franquia normal ou reduzida? Cobertura compreensiva ou apenas terceiros? Entenda cada detalhe antes de contratar e evite pagar por cláusulas desnecessárias.',
    content: `
      <h2>1. O Cenário Atual do Trânsito e a Necessidade de Proteção</h2>
      <p>Com o trânsito cada vez mais intenso nas cidades brasileiras e o aumento expressivo no custo de reposição de peças originais, circular sem um seguro automotivo abrangente é assumir um risco financeiro desproporcional. Em uma colisão urbana moderada, os custos de reparos, sensores eletrônicos, faróis em LED e airbags podem facilmente ultrapassar 40% do valor do veículo.</p>
      <p>O seguro auto não serve apenas para ressarcir o seu carro em caso de colisão ou roubo — ele protege o seu patrimônio financeiro contra indenizações elevadas causadas a terceiros.</p>

      <h2>2. Cobertura Compreensiva vs. Cobertura a Terceiros (RCF-V)</h2>
      <p>Muitos motoristas têm dúvidas sobre qual modalidade escolher:</p>
      <ul>
        <li><strong>Cobertura Compreensiva (Colisão, Incêndio e Roubo):</strong> É a modalidade mais completa. Garante indenização integral (perda total ou roubo não localizado) ou reparos parciais, além de desastres naturais como alagamentos e queda de árvores.</li>
        <li><strong>Responsabilidade Civil Facultativa (RCF-V / Terceiros):</strong> Cobre danos materiais e corporais causados a outros veículos ou pedestres. Na Berakah Seguros, recomendamos um limite de pelo menos R$ 150.000 a R$ 300.000 para terceiros, garantindo que qualquer eventualidade contra um importado não desestruture seu orçamento.</li>
      </ul>

      <h2>3. O Dilema da Franquia: Normal ou Reduzida?</h2>
      <p>A franquia é a participação obrigatória do segurado em sinistros com conserto do veículo:</p>
      <ul>
        <li><strong>Franquia Reduzida:</strong> Você paga um prêmio anual ligeiramente superior, mas em caso de sinistro com conserto, o valor pago para a oficina cai pela metade. Ideal para quem usa o veículo todos os dias em trânsito intenso.</li>
        <li><strong>Franquia Normal / Padrão:</strong> Prêmio anual mais econômico. Recomendada para motoristas que utilizam pouco o veículo e possuem garagem fechada em casa e no trabalho.</li>
      </ul>

      <h2>4. Cláusulas Opcionais que Valem a Pena</h2>
      <p>Ao cotar com a Berakah, avaliamos seu perfil para selecionar as cláusulas adicionais que trazem real valor:</p>
      <ul>
        <li><strong>Carro Reserva (7, 15 ou 30 dias):</strong> Indispensável para quem depende do carro para trabalhar ou transportar a família.</li>
        <li><strong>Proteção a Vidros, Faróis e Retrovisores:</strong> Uma das coberturas mais acionadas no Brasil, com custo acessível e sem perda de classe de bônus na renovação.</li>
        <li><strong>Assistência 24h Ilimitada:</strong> Guincho com quilometragem livre para pane elétrica, mecânica, troca de pneus e socorro emergencial.</li>
      </ul>

      <h2>5. Conclusão</h2>
      <p>O seguro auto ideal é aquele que equilibra cobertura abrangente com preço justo. A Berakah Seguros pesquisa simultaneamente em mais de 8 seguradoras do mercado para apresentar as melhores opções. Fale com um de nossos consultores e faça uma simulação sem compromisso.</p>
    `,
  },
  {
    slug: 'seguro-de-vida-para-familia',
    thumb: '/blog-vida.jpg',
    category: 'Vida & Sucessão',
    date: '15 de Julho de 2026',
    readTime: '6 min',
    title: 'Por que o seguro de vida moderno é a ferramenta definitiva de proteção em vida',
    excerpt: 'Esqueça a ideia de que seguro de vida só serve após a morte. Conheça as coberturas em vida, a isenção de inventário e a tranquilidade para seus dependentes.',
    content: `
      <h2>1. Quebrando o Tabu do Seguro de Vida</h2>
      <p>Falar sobre seguro de vida já foi considerado um tema desconfortável. Hoje, entre famílias e profissionais que constroem patrimônio, o seguro de vida se tornou uma ferramenta indispensável de segurança financeira, liquidez sucessória e proteção em vida.</p>

      <h2>2. Coberturas que Você Aproveita em Vida</h2>
      <p>A maioria das indenizações acionadas hoje ocorre com o segurado em vida:</p>
      <ul>
        <li><strong>Diagnóstico de Doenças Graves:</strong> Recebimento de capital segurado líquido em caso de diagnóstico de câncer, AVC, infarto ou transplantes, para custear tratamentos de ponta e adaptações na rotina.</li>
        <li><strong>Invalidez Permanente Total ou Parcial por Acidente:</strong> Garante o sustento financeiro e a continuidade do padrão de vida familiar se um acidente afastar você do trabalho.</li>
        <li><strong>Diária por Incapacidade Temporária (DIT):</strong> Fundamental para profissionais liberais e autônomos (médicos, advogados, dentistas) que precisam de renda garantida durante períodos de afastamento por cirurgia ou repouso médico.</li>
      </ul>

      <h2>3. Vantagens Sucessórias e Fiscais</h2>
      <p>Os custos de um inventário judicial, honorários advocatícios e tributos como ITCMD podem consumir de 12% a 20% do patrimônio familiar. Já a indenização do seguro de vida:</p>
      <ul>
        <li>Não entra no inventário e é liberada em até 30 dias diretamente aos beneficiários;</li>
        <li>É totalmente isenta de Imposto de Renda;</li>
        <li>Não pode ser retida para pagamento de eventuais dívidas do titular.</li>
      </ul>

      <h2>4. Como Dimensionar o Capital Segurado?</h2>
      <p>Nossos especialistas recomendam contratar um valor equivalente a 3 a 5 anos das despesas anuais da sua família somadas aos custos de formação dos filhos. Assim, o futuro de quem você ama fica plenamente garantido.</p>
    `,
  },
  {
    slug: 'seguro-empresarial-guia',
    thumb: '/blog-empresa.jpg',
    category: 'Empresarial & Negócios',
    date: '3 de Junho de 2026',
    readTime: '8 min',
    title: 'Seu negócio está verdadeiramente protegido? Riscos operacionais que ameaçam seu CNPJ',
    excerpt: 'Incêndio, danos elétricos, lucros cessantes e ações de responsabilidade civil. Saiba como estruturar uma blindagem corporativa para o seu negócio prosperar.',
    content: `
      <h2>1. A Importância da Blindagem Corporativa</h2>
      <p>Construir uma empresa exige dedicação, investimento em equipamentos, instalações e pessoas. No entanto, uma sobretensão na rede elétrica que queime máquinas vitais ou um vazamento no estoque pode interromper as atividades por semanas, comprometendo o fluxo de caixa.</p>

      <h2>2. Coberturas Essenciais para Qualquer CNPJ</h2>
      <p>O seguro empresarial da Berakah é modular e atende estabelecimentos comerciais, prestadores de serviços e indústrias:</p>
      <ul>
        <li><strong>Incêndio, Raio e Explosão:</strong> Cobertura básica obrigatória para prédios próprios ou alugados, garantindo a reconstrução física das instalações.</li>
        <li><strong>Danos Elétricos:</strong> Ressarcimento por queima de circuitos, fiações, transformadores e aparelhos eletrônicos decorrentes de oscilações elétricas.</li>
        <li><strong>Roubo e Furto Qualificado:</strong> Proteção para estoques, maquinário e equipamentos de trabalho.</li>
        <li><strong>Lucros Cessantes:</strong> Se a operação precisar ser interrompida após um sinistro coberto, o seguro paga as despesas fixas (salários, aluguel, encargos) e o lucro líquido previsto.</li>
      </ul>

      <h2>3. Responsabilidade Civil Geral e D&O</h2>
      <p>Se um cliente sofrer um acidente nas dependências da sua empresa, a Responsabilidade Civil cobre as custas jurídicas e eventuais indenizações. Já o Seguro D&O (Directors and Officers) protege o patrimônio pessoal de diretores e sócios diante de decisões de gestão questionadas judicialmente.</p>
    `,
  },
]

export default function BlogPage() {
  return (
    <>
      {/* ── INNER HERO CINEMÁTICA COM IMAGEM DE FUNDO ── */}
      <section className="page-hero" aria-labelledby="blog-hero-heading">
        <Image
          src="/blog-vida.jpg"
          alt="Artigos e guias práticos sobre seguros — Berakah Seguros"
          fill
          className="hero-bg"
          priority
        />
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-gradient-bottom" aria-hidden="true" />
        <div className="hero-content">
          <span className="eyebrow">
            Educação &amp; Consciência
          </span>
          <h1 id="blog-hero-heading">
            Informação clara que <span>protege o seu futuro.</span>
          </h1>
          <p className="hero-lead">
            Guias práticos, análises de coberturas e orientações essenciais preparadas por consultores experientes da Berakah Seguros.
          </p>
        </div>
      </section>

      {/* ── ARTIGOS EM DESTAQUE ──────────────── */}
      <section className="section" style={{ background: 'var(--warm-bg)' }} aria-labelledby="articles-heading">
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div className="section-head text-center" style={{ maxWidth: '640px', margin: '0 auto 56px' }}>
            <span className="eyebrow" style={{ color: '#D99500', justifyContent: 'center' }}>Leituras Recomendadas</span>
            <h2 id="articles-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,48px)', letterSpacing: '-0.035em', marginTop: '12px', color: 'var(--text)' }}>
              Artigos em <span style={{ color: '#D99500' }}>destaque.</span>
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '14px' }}>
              Entenda como dimensionar coberturas, evitar cláusulas desnecessárias e economizar com segurança na hora de contratar.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {posts.map(({ slug, thumb, category, date, readTime, title, excerpt }) => (
              <article
                key={slug}
                className="blog-card"
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.25s ease',
                }}
              >
                <div>
                  <div style={{ position: 'relative', height: '230px', width: '100%' }}>
                    <Image src={thumb} alt={title} fill style={{ objectFit: 'cover' }} />
                    <span
                      style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        background: 'var(--yellow)',
                        color: 'var(--black)',
                        fontFamily: 'var(--ff-heading)',
                        fontWeight: 800,
                        fontSize: '10px',
                        padding: '5px 12px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {category}
                    </span>
                  </div>

                  <div style={{ padding: '26px' }}>
                    <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Calendar size={13} /> {date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={13} /> {readTime}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--ff-heading)', fontWeight: 700, fontSize: '18px', lineHeight: 1.35, color: 'var(--text)', marginBottom: '12px' }}>
                      <Link href={`/blog/${slug}`} style={{ color: 'inherit' }}>
                        {title}
                      </Link>
                    </h3>

                    <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.65, marginBottom: '20px' }}>
                      {excerpt}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 26px 26px', borderTop: '1px solid var(--border)', paddingTop: '18px' }}>
                  <Link
                    href={`/blog/${slug}`}
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '13px', borderColor: 'var(--border-dark)', color: 'var(--text)' }}
                  >
                    Ler artigo completo <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────── */}
      <section className="final-cta">
        <div className="final-cta-bg" aria-hidden="true" />
        <div className="final-cta-content">
          <span className="eyebrow">Dúvida sobre sua apólice?</span>
          <h2 style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(36px,4.8vw,60px)', letterSpacing: '-0.035em' }}>
            Receba uma análise gratuita da <em>sua cobertura.</em>
          </h2>
          <p>
            Envie sua apólice atual para nossos especialistas. Avaliamos se você está pagando a mais ou se há coberturas essenciais em falta.
          </p>
          <div className="final-cta-actions">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20an%C3%A1lise%20gratuita%20da%20minha%20ap%C3%B3lice%20com%20a%20Berakah"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="blog-wa-cta-btn"
            >
              Analisar no WhatsApp <ArrowUpRight size={18} />
            </a>
            <Link href="/contato" className="btn btn-outline-dark btn-lg" id="blog-form-cta-btn">
              Falar com um consultor <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
