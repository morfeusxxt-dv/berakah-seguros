'use client'

import { useState } from 'react'
import { Car, Home, Heart, Building2, ArrowRight, ArrowLeft, Check, Sparkles, MessageCircle } from 'lucide-react'

interface SimulatorData {
  tipo: string
  situacao: string
  prioridade: string
  nome: string
  telefone: string
}

const tiposSeguro = [
  { id: 'auto',        label: 'Seguro Automóvel',  desc: 'Carro, moto ou frota',         icon: Car },
  { id: 'residencial', label: 'Seguro Residencial', desc: 'Casa, apartamento ou condomínio', icon: Home },
  { id: 'vida',        label: 'Vida & Saúde',       desc: 'Planejamento e família',        icon: Heart },
  { id: 'empresarial', label: 'Empresarial & RC',   desc: 'Patrimônio e responsabilidade', icon: Building2 },
]

const situacoes = [
  { id: 'renovacao',  label: 'Renovação de Seguro', desc: 'Já possuo apólice e quero comparar preços e coberturas' },
  { id: 'primeiro',   label: 'Primeira Contratação', desc: 'Não tenho seguro ativo no momento e quero proteger um bem' },
  { id: 'indeciso',   label: 'Estudo Consultivo',   desc: 'Quero entender qual modalidade faz mais sentido para mim' },
]

const prioridades = [
  { id: 'custo',      label: 'Melhor Custo-Benefício', desc: 'Economia inteligente sem abrir mão de coberturas essenciais' },
  { id: 'completo',   label: 'Cobertura Mais Ampla',   desc: 'Proteção integral para terceiros, vidros, carro reserva e guincho ilimitado' },
  { id: 'franquia',   label: 'Franquia Reduzida',      desc: 'Menor valor a pagar do bolso em caso de sinistro acidental' },
  { id: 'rapidez',    label: 'Ativação Urgente',       desc: 'Necessidade de emissão ágil e envio de proposta em até 24h' },
]

export function InsuranceSimulator() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<SimulatorData>({
    tipo: 'auto',
    situacao: 'renovacao',
    prioridade: 'custo',
    nome: '',
    telefone: '',
  })

  const getTipoLabel = () => tiposSeguro.find(t => t.id === data.tipo)?.label || 'Seguro'
  const getSituacaoLabel = () => situacoes.find(s => s.id === data.situacao)?.label || ''
  const getPrioridadeLabel = () => prioridades.find(p => p.id === data.prioridade)?.label || ''

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Fiz a simulação no site da Berakah Seguros:
• Interesse: ${getTipoLabel()}
• Momento: ${getSituacaoLabel()}
• Prioridade: ${getPrioridadeLabel()}
• Meu nome: ${data.nome || 'Cliente do Site'}
Gostaria de receber uma cotação comparativa nas principais seguradoras.`

    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <section className="section simulator-section" id="simulador" aria-labelledby="simulador-heading" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        
        {/* Header do Simulador */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="eyebrow" style={{ color: '#D99500', justifyContent: 'center' }}>
            Simulador de Seguros
          </span>
          <h2 id="simulador-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(30px, 3.8vw, 46px)', letterSpacing: '-0.035em', marginTop: '12px', color: 'var(--text)' }}>
            Descubra a cobertura ideal em <span style={{ color: '#D99500' }}>3 passos.</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '8px' }}>
            Sem formulários chatos. Selecione seu objetivo e receba um comparativo sob medida.
          </p>
        </div>

        {/* Card Principal do Simulador */}
        <div
          style={{
            background: 'var(--white)',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow)',
            padding: 'clamp(24px, 4vw, 44px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Barra de Progresso */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', borderBottom: '1px solid var(--border)', paddingBottom: '18px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ background: 'var(--yellow)', color: 'var(--black)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', fontFamily: 'var(--ff-heading)' }}>
                {step}
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--ff-heading)' }}>
                {step === 1 && 'Passo 1: O que você deseja proteger?'}
                {step === 2 && 'Passo 2: Qual a situação da apólice?'}
                {step === 3 && 'Passo 3: Qual a sua prioridade?'}
                {step === 4 && 'Passo 4: Resumo da sua simulação'}
              </span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>
              Etapa {step} de 4
            </div>
          </div>

          {/* PASSO 1: Tipo de Seguro */}
          {step === 1 && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '10px' }}>
                {tiposSeguro.map(({ id, label, desc, icon: Icon }) => {
                  const isSelected = data.tipo === id
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setData(prev => ({ ...prev, tipo: id }))}
                      style={{
                        textAlign: 'left',
                        padding: '24px 20px',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid var(--yellow)' : '1px solid var(--border)',
                        background: isSelected ? 'var(--yellow-pale)' : 'var(--white)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isSelected ? '0 8px 24px rgba(255,199,0,0.18)' : 'none',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '10px',
                          background: isSelected ? 'var(--yellow)' : 'rgba(255,199,0,0.12)',
                          color: isSelected ? 'var(--black)' : '#D99500',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px',
                        }}
                      >
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <h4 style={{ fontFamily: 'var(--ff-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--text)', marginBottom: '4px' }}>
                        {label}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.4 }}>
                        {desc}
                      </p>
                    </button>
                  )
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn-primary"
                  style={{ borderRadius: '8px', padding: '14px 28px' }}
                >
                  Continuar <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* PASSO 2: Situação da Apólice */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                {situacoes.map(({ id, label, desc }) => {
                  const isSelected = data.situacao === id
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setData(prev => ({ ...prev, situacao: id }))}
                      style={{
                        textAlign: 'left',
                        padding: '20px 24px',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid var(--yellow)' : '1px solid var(--border)',
                        background: isSelected ? 'var(--yellow-pale)' : 'var(--white)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div>
                        <h4 style={{ fontFamily: 'var(--ff-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>
                          {label}
                        </h4>
                        <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
                          {desc}
                        </p>
                      </div>
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          border: isSelected ? 'none' : '2px solid var(--border)',
                          background: isSelected ? 'var(--yellow)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {isSelected && <Check size={14} color="#111" strokeWidth={3} />}
                      </div>
                    </button>
                  )
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-outline"
                  style={{ borderRadius: '8px' }}
                >
                  <ArrowLeft size={16} /> Voltar
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn btn-primary"
                  style={{ borderRadius: '8px', padding: '14px 28px' }}
                >
                  Continuar <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* PASSO 3: Prioridade do Cliente */}
          {step === 3 && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px', marginTop: '10px' }}>
                {prioridades.map(({ id, label, desc }) => {
                  const isSelected = data.prioridade === id
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setData(prev => ({ ...prev, prioridade: id }))}
                      style={{
                        textAlign: 'left',
                        padding: '20px',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid var(--yellow)' : '1px solid var(--border)',
                        background: isSelected ? 'var(--yellow-pale)' : 'var(--white)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '140px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#D99500', fontFamily: 'var(--ff-heading)' }}>
                            Opção
                          </span>
                          {isSelected && <Check size={16} color="#D99500" strokeWidth={3} />}
                        </div>
                        <h4 style={{ fontFamily: 'var(--ff-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--text)', marginBottom: '4px' }}>
                          {label}
                        </h4>
                        <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.45 }}>
                          {desc}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn-outline"
                  style={{ borderRadius: '8px' }}
                >
                  <ArrowLeft size={16} /> Voltar
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="btn btn-primary"
                  style={{ borderRadius: '8px', padding: '14px 28px' }}
                >
                  Ver Resumo &amp; Cotar <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* PASSO 4: Resumo e Disparo para WhatsApp */}
          {step === 4 && (
            <div>
              <div style={{ background: 'var(--surface)', borderRadius: '14px', padding: '24px', border: '1px solid var(--border)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: '#D99500', fontWeight: 700, fontSize: '13px', fontFamily: 'var(--ff-heading)' }}>
                  <Sparkles size={16} /> RESUMO DO SEU PERFIL SELECIONADO:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Seguro:</span>
                    <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getTipoLabel()}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Momento:</span>
                    <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getSituacaoLabel()}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Foco Principal:</span>
                    <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getPrioridadeLabel()}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleWhatsAppRedirect}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                      Seu Nome ou Empresa:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: João Silva"
                      value={data.nome}
                      onChange={e => setData(prev => ({ ...prev, nome: e.target.value }))}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        background: 'var(--white)',
                        color: 'var(--text)',
                        fontSize: '14px',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                      Seu WhatsApp para Contato:
                    </label>
                    <input
                      type="tel"
                      placeholder="(DDD) 99999-9999"
                      value={data.telefone}
                      onChange={e => setData(prev => ({ ...prev, telefone: e.target.value }))}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        background: 'var(--white)',
                        color: 'var(--text)',
                        fontSize: '14px',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn btn-outline"
                    style={{ borderRadius: '8px' }}
                  >
                    <ArrowLeft size={16} /> Ajustar preferências
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ borderRadius: '8px', padding: '16px 32px' }}
                  >
                    <MessageCircle size={18} /> Enviar Simulação via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
