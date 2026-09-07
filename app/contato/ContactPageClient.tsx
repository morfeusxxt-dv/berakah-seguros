'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare, ShieldAlert } from 'lucide-react'
import { EmergencyModal } from '@/components/EmergencyModal'

const contactInfo = [
  { icon: Phone,   label: 'Telefone Direto', value: '(11) 99999-9999',               href: 'tel:+5511999999999' },
  { icon: Mail,    label: 'E-mail Comercial', value: 'contato@berakahseguros.com.br', href: 'mailto:contato@berakahseguros.com.br' },
  { icon: MapPin,  label: 'Endereço Corporativo', value: 'São Paulo, SP — Brasil',    href: '#' },
  { icon: Clock,   label: 'Horário de Atendimento', value: 'Seg–Sex: 9h às 18h (Plantão 24h Sinistro)', href: '#' },
]

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [tipoSeguro, setTipoSeguro] = useState('auto')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* ── INNER HERO CINEMÁTICA COM IMAGEM DE FUNDO ──── */}
      <section className="page-hero" aria-labelledby="contato-hero-heading">
        <Image
          src="/hero-solucoes.jpg"
          alt="Atendimento consultivo e personalizado da Berakah Seguros"
          fill
          className="hero-bg"
          priority
        />
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-gradient-bottom" aria-hidden="true" />
        <div className="hero-content">
          <span className="eyebrow">
            Canais de Atendimento • Berakah Seguros
          </span>
          <h1 id="contato-hero-heading">
            Estamos <span>aqui</span> para você.
          </h1>
          <p className="hero-lead">
            Seja para uma nova cotação personalizada, tirar dúvidas sobre apólices ou acionar suporte emergencial de sinistro. Nossa equipe atende com agilidade e total transparência.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ─────────────────────── */}
      <section className="section" style={{ background: 'var(--warm-bg)' }}>
        <div className="contact-grid" style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          
          {/* Info side */}
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <span className="eyebrow" style={{ color: '#D99500' }}>Fale Conosco</span>
              <h2 style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-0.035em', lineHeight: 1.15, marginTop: '12px', color: 'var(--text)' }}>
                Escolha o canal que <span style={{ color: '#D99500' }}>preferir.</span>
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginTop: '12px' }}>
                Na Berakah Seguros, você não conversa com robôs confusos. Nossos corretores prestam atendimento consultivo para encontrar a melhor apólice para o seu caso.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '18px 20px',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ width: '42px', height: '42px', background: 'rgba(255,199,0,0.15)', color: '#D99500', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--ff-heading)', fontWeight: 700, color: '#D99500', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {label}
                    </div>
                    {href !== '#' ? (
                      <a href={href} style={{ color: 'var(--text)', fontSize: '14px', fontWeight: 600, marginTop: '2px', display: 'block' }}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--text)', fontSize: '14px', fontWeight: 600, marginTop: '2px', display: 'block' }}>
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency / Sinistro 24h Box */}
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldAlert size={18} color="#DC2626" />
                <span style={{ fontSize: '11px', fontWeight: 800, fontFamily: 'var(--ff-heading)', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#DC2626' }}>
                  Apoio ao Sinistro 24h
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>
                Sofreu uma colisão ou pane elétrica? Consulte os telefones de emergência das seguradoras conveniadas:
              </p>
              <div>
                <EmergencyModal />
              </div>
            </div>

            {/* WhatsApp Highlight Box */}
            <div style={{ background: 'var(--white)', border: '2px solid var(--yellow)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#25D366', display: 'inline-block' }} />
                <span style={{ fontSize: '11px', fontWeight: 800, fontFamily: 'var(--ff-heading)', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#25D366' }}>
                  Atendimento Ágil
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                Prefere falar pelo WhatsApp?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                Inicie uma conversa direta para receber cotações rápidas e comparativos das seguradoras.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Berakah%20Seguros%20e%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                id="contato-wa-highlight"
              >
                <MessageSquare size={16} /> Abrir WhatsApp Agora
              </a>
            </div>
          </div>

          {/* Form side */}
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '40px 36px',
              boxShadow: 'var(--shadow)',
            }}
          >
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', padding: '40px 0' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(37,211,102,0.12)', color: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--text)' }}>
                  Solicitação recebida com sucesso!
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7, maxWidth: '420px', fontSize: '15px' }}>
                  Recebemos seus dados. Um corretor da Berakah Seguros entrará em contato em instantes com as cotações nas principais seguradoras.
                </p>

                {/* Instant WhatsApp Accelerator Button */}
                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Enviei uma solicitação pelo formulário do site da Berakah Seguros:
• Nome: ${nome || 'Cliente'}
• Seguro de Interesse: ${tipoSeguro}
• Contato: ${whatsapp || email || 'Informado no site'}
Gostaria de agilizar o envio da proposta por aqui!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                  style={{ marginTop: '12px', width: '100%', maxWidth: '380px', justifyContent: 'center' }}
                  id="contato-instant-wa"
                >
                  <MessageSquare size={18} /> Agilizar Cotação no WhatsApp Agora
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setNome('')
                    setWhatsapp('')
                    setEmail('')
                    setMsg('')
                  }}
                  className="btn btn-outline"
                  style={{ marginTop: '14px', borderColor: 'var(--border-dark)', color: 'var(--text)' }}
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '28px' }}>
                  <span className="eyebrow" style={{ color: '#D99500' }}>Cotação Online</span>
                  <h3 style={{ fontFamily: 'var(--ff-heading)', fontSize: '22px', fontWeight: 800, color: 'var(--text)', marginTop: '8px' }}>
                    Solicite sua simulação gratuita
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '6px' }}>
                    Preencha os campos abaixo e receba propostas detalhadas em seu WhatsApp ou e-mail.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    {/* Nome */}
                    <div>
                      <label htmlFor="contato-nome" style={{ display: 'block', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--ff-heading)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text)', marginBottom: '8px' }}>
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="contato-nome"
                        required
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Ex: Carlos Eduardo Silveira"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'var(--warm-bg)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          color: 'var(--text)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Telefone / WhatsApp */}
                    <div>
                      <label htmlFor="contato-tel" style={{ display: 'block', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--ff-heading)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text)', marginBottom: '8px' }}>
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        id="contato-tel"
                        required
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        placeholder="(11) 99999-9999"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'var(--warm-bg)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          color: 'var(--text)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* E-mail */}
                    <div>
                      <label htmlFor="contato-email" style={{ display: 'block', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--ff-heading)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text)', marginBottom: '8px' }}>
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="contato-email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="seuemail@empresa.com.br"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'var(--warm-bg)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          color: 'var(--text)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Tipo de Seguro */}
                    <div>
                      <label htmlFor="contato-tipo" style={{ display: 'block', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--ff-heading)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text)', marginBottom: '8px' }}>
                        Qual seguro você tem interesse? *
                      </label>
                      <select
                        id="contato-tipo"
                        value={tipoSeguro}
                        onChange={(e) => setTipoSeguro(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'var(--warm-bg)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          color: 'var(--text)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      >
                        <option value="auto">Seguro Auto / Moto / Frota</option>
                        <option value="residencial">Seguro Residencial</option>
                        <option value="vida">Seguro de Vida &amp; Sucessão</option>
                        <option value="saude">Plano de Saúde &amp; Odonto</option>
                        <option value="empresarial">Seguro Empresarial / Patrimonial</option>
                        <option value="rc">Responsabilidade Civil (D&amp;O / E&amp;O)</option>
                        <option value="portateis">Equipamentos Portáteis (Smartphone, Notebook)</option>
                        <option value="viagem">Seguro Viagem</option>
                        <option value="nautico">Seguro Náutico ou Aeronáutico</option>
                        <option value="outro">Outro tipo de cobertura</option>
                      </select>
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label htmlFor="contato-msg" style={{ display: 'block', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--ff-heading)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text)', marginBottom: '8px' }}>
                        Observações ou detalhes do bem (opcional)
                      </label>
                      <textarea
                        id="contato-msg"
                        rows={3}
                        value={msg}
                        onChange={e => setMsg(e.target.value)}
                        placeholder="Ex: Modelo/ano do veículo, CEP de circulação, ou necessidade de carro reserva..."
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: 'var(--warm-bg)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          color: 'var(--text)',
                          fontSize: '14px',
                          outline: 'none',
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                      id="contato-submit-btn"
                    >
                      {loading ? 'Processando envio...' : 'Receber Proposta Personalizada'} <ArrowUpRight size={18} />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
