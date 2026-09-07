import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft, Clock, Calendar, MessageSquare, ShieldCheck } from 'lucide-react'
import { posts } from '../page'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Berakah Seguros`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.thumb],
    },
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2)
  const waText = encodeURIComponent(`Olá, li o artigo "${post.title}" no blog da Berakah Seguros e gostaria de tirar dúvidas com um corretor.`)

  return (
    <article style={{ background: 'var(--warm-bg)', minHeight: '100vh', color: 'var(--text)' }}>
      {/* Article Header Clean */}
      <div style={{ background: 'linear-gradient(180deg, #F5F3ED 0%, #FAF9F6 100%)', borderBottom: '1px solid var(--border)', padding: '52px 24px 44px' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap' }}>
            <span
              style={{
                background: 'var(--yellow)',
                color: 'var(--black)',
                fontFamily: 'var(--ff-heading)',
                fontWeight: 800,
                fontSize: '11px',
                padding: '5px 12px',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {post.category}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--muted)' }}>
              <Calendar size={14} /> {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--muted)' }}>
              <Clock size={14} /> {post.readTime} de leitura
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--ff-heading)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4.2vw, 44px)',
              letterSpacing: '-0.035em',
              lineHeight: 1.2,
              color: 'var(--text)',
            }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: '840px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <Link
          href="/blog"
          className="text-link"
          style={{
            marginBottom: '32px',
            display: 'inline-flex',
            gap: '8px',
            alignItems: 'center',
            color: '#D99500',
            borderBottomColor: '#D99500',
            fontWeight: 700,
          }}
        >
          <ArrowLeft size={16} /> Voltar para todos os artigos
        </Link>

        {/* Featured Image */}
        <div style={{ position: 'relative', height: '380px', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '36px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <Image src={post.thumb} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
        </div>

        {/* Lead paragraph */}
        <div
          style={{
            fontSize: '18px',
            lineHeight: 1.75,
            color: 'var(--text-light)',
            marginBottom: '40px',
            padding: '24px 28px',
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderLeftWidth: '4px',
            borderLeftColor: 'var(--yellow)',
            borderRadius: '0 12px 12px 0',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {post.excerpt}
        </div>

        {/* Full article HTML */}
        <div
          className="article-prose"
          style={{
            fontSize: '16px',
            lineHeight: 1.85,
            color: 'var(--text)',
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* In-Article Conversion Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF6EA 100%)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            borderRadius: '16px',
            padding: '48px 36px',
            marginTop: '64px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ width: '52px', height: '52px', background: 'rgba(255,199,0,0.2)', color: '#D99500', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <ShieldCheck size={28} />
          </div>
          <span className="eyebrow" style={{ color: '#D99500', justifyContent: 'center' }}>Consultoria Gratuita</span>
          <h3
            style={{
              fontFamily: 'var(--ff-heading)',
              fontWeight: 800,
              fontSize: 'clamp(24px, 3vw, 34px)',
              letterSpacing: '-0.03em',
              margin: '12px 0 16px',
              color: 'var(--text)',
            }}
          >
            Ficou com dúvidas sobre a sua apólice?
          </h3>
          <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 28px', fontSize: '15px', lineHeight: 1.7 }}>
            Fale diretamente com os consultores da Berakah Seguros. Comparamos as melhores seguradoras para o seu perfil, sem custo e sem compromisso.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/5511999999999?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id={`article-wa-btn-${post.slug}`}
            >
              <MessageSquare size={16} /> Tirar dúvidas no WhatsApp
            </a>
            <Link href="/contato" className="btn btn-outline-dark btn-lg" id={`article-contact-btn-${post.slug}`}>
              Solicitar cotação por formulário <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '72px 24px' }}>
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ marginBottom: '36px' }}>
              <span className="eyebrow" style={{ color: '#D99500' }}>Continue Lendo</span>
              <h2
                style={{
                  fontFamily: 'var(--ff-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  letterSpacing: '-0.03em',
                  marginTop: '10px',
                  color: 'var(--text)',
                }}
              >
                Artigos relacionados
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {related.map((item) => (
                <article
                  key={item.slug}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ position: 'relative', height: '180px', width: '100%' }}>
                    <Image src={item.thumb} alt={item.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span style={{ color: '#D99500', fontSize: '11px', fontWeight: 800, fontFamily: 'var(--ff-heading)', textTransform: 'uppercase' }}>
                      {item.category}
                    </span>
                    <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '16px', fontWeight: 700, color: 'var(--text)', margin: '10px 0' }}>
                      <Link href={`/blog/${item.slug}`} style={{ color: 'inherit' }}>
                        {item.title}
                      </Link>
                    </h3>
                    <Link href={`/blog/${item.slug}`} className="service-card-link" style={{ color: '#D99500', marginTop: '12px', fontWeight: 700 }}>
                      Ler artigo <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
