'use client'

import { useState } from 'react'
import {
  Car,
  Home,
  HeartPulse,
  Stethoscope,
  WalletCards,
  Building2,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Bike,
  Wrench,
  User,
  Users,
  Info,
} from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact'

interface SimulatorData {
  tipo: string
  // Saúde
  modalidadeSaude: 'individual' | 'familiar' | 'empresarial'
  tipoEmpresaSaude: 'mei' | 'outras'
  idades: string
  profissao: string
  cep: string
  // Consórcio
  produtoConsorcio: 'carro' | 'moto' | 'imovel' | 'servicos'
  adminConsorcio: 'br' | 'porto' | 'yamaha' | 'todas'
  // Comum
  situacao: string
  prioridade: string
  nome: string
  telefone: string
}

const tiposSeguro = [
  { id: 'auto',        label: 'Seguro Auto & Moto',      desc: 'Carro, moto ou frotas',              icon: Car },
  { id: 'saude',       label: 'Plano de Saúde & Odonto',  desc: 'Individual, familiar ou empresarial', icon: Stethoscope },
  { id: 'consorcio',   label: 'Consórcio (Auto/Moto/Imóvel/Serviços)', desc: 'Aquisição sem juros via Porto, BR e Yamaha', icon: WalletCards },
  { id: 'vida',        label: 'Seguro de Vida & Sucessão',desc: 'Proteção financeira e familiar',     icon: HeartPulse },
  { id: 'residencial', label: 'Seguro Residencial',      desc: 'Casa, apartamento ou condomínio',     icon: Home },
  { id: 'empresarial', label: 'Empresarial & RC',        desc: 'Patrimônio, D&O e responsabilidade',   icon: Building2 },
]

const produtosConsorcio = [
  { id: 'moto',     label: 'Consórcio de Moto',      icon: Bike,        desc: 'Planos especiais com alta taxa de contemplação Yamaha, Porto e BR' },
  { id: 'carro',    label: 'Consórcio de Carro',     icon: Car,         desc: 'Veículos novos e seminovos sem juros abusivos de financiamento' },
  { id: 'imovel',   label: 'Consórcio Imobiliário',  icon: Home,        desc: 'Casa, apartamento, terreno ou construção com FGTS' },
  { id: 'servicos', label: 'Consórcio de Serviços',  icon: Wrench,      desc: 'Reformas, festas, viagens, cirurgias e procedimentos ou cursos' },
] as const

const administradorasConsorcio = [
  { id: 'todas',  label: 'Comparar Todas',    desc: 'Buscamos a melhor taxa entre todas' },
  { id: 'porto',  label: 'Consórcio Porto',   desc: 'Tradição, flexibilidade e lances embutidos' },
  { id: 'br',     label: 'BR Consórcio',      desc: 'Uma das maiores administradoras independentes' },
  { id: 'yamaha', label: 'Yamaha Consórcio',  desc: 'Líder nacional com planos exclusivos' },
] as const

const modalidadesSaude = [
  { id: 'individual',  label: 'Plano Individual',   icon: User,   desc: 'Pessoa física ou profissional autônomo / liberal' },
  { id: 'familiar',    label: 'Plano Familiar',     icon: Users,  desc: 'Você e seus dependentes com ampla rede e descontos' },
  { id: 'empresarial', label: 'Plano Empresarial',  icon: Building2, desc: 'MEI ou CNPJ — a partir de 1 vida (titular do CNPJ)' },
] as const

const situacoes = [
  { id: 'renovacao',  label: 'Renovação / Portabilidade', desc: 'Já possuo apólice ou plano e quero comparar preços e coberturas' },
  { id: 'primeiro',   label: 'Primeira Contratação / Simulação', desc: 'Não tenho plano/seguro ativo ou quero simular uma nova cotação ou carta' },
  { id: 'indeciso',   label: 'Estudo Consultivo Especializado', desc: 'Quero entender qual modalidade, operadora ou administradora é ideal para mim' },
]

const prioridades = [
  { id: 'custo',      label: 'Melhor Custo-Benefício', desc: 'Economia inteligente sem abrir mão de coberturas essenciais ou menores parcelas' },
  { id: 'completo',   label: 'Cobertura Mais Ampla / Alta Carta', desc: 'Proteção integral com ampla rede hospitalar, guincho ilimitado ou maior crédito' },
  { id: 'franquia',   label: 'Facilidade & Baixa Coparticipação', desc: 'Menor valor de coparticipação / franquia ou melhores condições de lance' },
  { id: 'rapidez',    label: 'Ativação Ágil', desc: 'Necessidade de emissão rápida e proposta comparativa enviada em poucas horas' },
]

export function InsuranceSimulator() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<SimulatorData>({
    tipo: 'auto',
    modalidadeSaude: 'individual',
    tipoEmpresaSaude: 'mei',
    idades: '',
    profissao: '',
    cep: '',
    produtoConsorcio: 'carro',
    adminConsorcio: 'todas',
    situacao: 'renovacao',
    prioridade: 'custo',
    nome: '',
    telefone: '',
  })

  const getTipoLabel = () => tiposSeguro.find(t => t.id === data.tipo)?.label || 'Solução'
  const getSituacaoLabel = () => situacoes.find(s => s.id === data.situacao)?.label || ''
  const getPrioridadeLabel = () => prioridades.find(p => p.id === data.prioridade)?.label || ''

  const getConsorcioProdutoLabel = () =>
    produtosConsorcio.find(p => p.id === data.produtoConsorcio)?.label || 'Veículo'

  const getConsorcioAdminLabel = () =>
    administradorasConsorcio.find(a => a.id === data.adminConsorcio)?.label || 'Melhor Opção'

  const getModalidadeSaudeLabel = () =>
    modalidadesSaude.find(m => m.id === data.modalidadeSaude)?.label || 'Individual'

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault()

    let detalhesEspecificos = ''

    if (data.tipo === 'saude') {
      const empresaDet = data.modalidadeSaude === 'empresarial'
        ? `• Perfil Empresa: ${data.tipoEmpresaSaude === 'mei' ? 'MEI (+6 meses de CNPJ aberto)' : 'Empresa / LTDA / S.A (sem carência mínima)'} — A partir de 1 vida (titular)\n`
        : ''
      detalhesEspecificos = `• Modalidade Saúde: ${getModalidadeSaudeLabel()}
${empresaDet}• Idade(s) da(s) vida(s): ${data.idades || 'A informar'}
• Profissão: ${data.profissao || 'A informar'}
• CEP Residencial: ${data.cep || 'A informar'}
`
    } else if (data.tipo === 'consorcio') {
      detalhesEspecificos = `• Segmento do Consórcio: ${getConsorcioProdutoLabel()}
• Administradora Preferencial: ${getConsorcioAdminLabel()} (BR Consórcio / Consórcio Porto / Yamaha)
`
    }

    const msg = `Olá! Fiz a simulação no site da Berakah Seguros:
• Solução: ${getTipoLabel()}
${detalhesEspecificos}• Momento da Apólice: ${getSituacaoLabel()}
• Prioridade: ${getPrioridadeLabel()}
• Nome: ${data.nome || 'Cliente do Site'}
• WhatsApp: ${data.telefone || 'Informado no formulário'}

Gostaria de receber uma proposta comparativa personalizada!`

    const url = CONTACT_INFO.whatsapp.getLink(msg)
    window.open(url, '_blank')
  }

  return (
    <section className="section simulator-section" id="simulador" aria-labelledby="simulador-heading" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        
        {/* Header do Simulador */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="eyebrow" style={{ color: '#D99500', justifyContent: 'center' }}>
            Simulador Consultivo Inteligente
          </span>
          <h2 id="simulador-heading" style={{ fontFamily: 'var(--ff-heading)', fontWeight: 800, fontSize: 'clamp(30px, 3.8vw, 46px)', letterSpacing: '-0.035em', marginTop: '12px', color: 'var(--text)' }}>
            Descubra a cobertura ideal em <span style={{ color: '#D99500' }}>3 passos.</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '8px' }}>
            Sem burocracia. Informe suas preferências e receba um estudo comparativo direto no seu WhatsApp.
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
                {step === 1 && 'Passo 1: O que você deseja proteger ou planejar?'}
                {step === 2 && 'Passo 2: Qual a situação da apólice ou consórcio?'}
                {step === 3 && 'Passo 3: Qual a sua prioridade principal?'}
                {step === 4 && 'Passo 4: Resumo e dados para cotação'}
              </span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>
              Etapa {step} de 4
            </div>
          </div>

          {/* PASSO 1: Tipo de Seguro e Detalhes Específicos */}
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

              {/* Sub-configuração caso escolha Plano de Saúde */}
              {data.tipo === 'saude' && (
                <div style={{ marginTop: '24px', padding: '20px', background: 'var(--warm-bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <Stethoscope size={18} color="#D99500" />
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--ff-heading)' }}>
                      Modalidade do Plano de Saúde:
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {modalidadesSaude.map(({ id, label, desc, icon: MIcon }) => {
                      const isSel = data.modalidadeSaude === id
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setData(prev => ({ ...prev, modalidadeSaude: id }))}
                          style={{
                            padding: '14px 16px',
                            borderRadius: '10px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            border: isSel ? '2px solid #D99500' : '1px solid var(--border)',
                            background: isSel ? 'var(--white)' : 'var(--surface)',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--text)', fontSize: '14px' }}>
                            <MIcon size={16} color="#D99500" />
                            {label}
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
                            {desc}
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {data.modalidadeSaude === 'empresarial' && (
                    <div style={{ marginTop: '16px', padding: '14px', background: 'rgba(217, 149, 0, 0.08)', borderRadius: '8px', border: '1px solid rgba(217, 149, 0, 0.2)' }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Info size={16} color="#D99500" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.5 }}>
                          <strong>Regras do Plano Empresarial:</strong>
                          <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                            <li><strong>MEI:</strong> Mínimo de 6 meses de CNPJ aberto</li>
                            <li><strong>Demais empresas:</strong> Sem exigência mínima de funcionamento</li>
                            <li><strong>Vidas:</strong> Pode ser calculado e contratado a partir de <strong>uma única vida</strong> (o titular do CNPJ)!</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Sub-configuração caso escolha Consórcio */}
              {data.tipo === 'consorcio' && (
                <div style={{ marginTop: '24px', padding: '20px', background: 'var(--warm-bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <WalletCards size={18} color="#D99500" />
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--ff-heading)' }}>
                      Selecione o Produto do Consórcio:
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                    {produtosConsorcio.map(({ id, label, icon: PIcon, desc }) => {
                      const isSel = data.produtoConsorcio === id
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setData(prev => ({ ...prev, produtoConsorcio: id }))}
                          style={{
                            padding: '14px 16px',
                            borderRadius: '10px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            border: isSel ? '2px solid #D99500' : '1px solid var(--border)',
                            background: isSel ? 'var(--white)' : 'var(--surface)',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--text)', fontSize: '14px' }}>
                            <PIcon size={16} color="#D99500" />
                            {label}
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
                            {desc}
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px', fontFamily: 'var(--ff-heading)' }}>
                    Administradora Preferencial:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
                    {administradorasConsorcio.map(({ id, label, desc }) => {
                      const isSel = data.adminConsorcio === id
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setData(prev => ({ ...prev, adminConsorcio: id }))}
                          style={{
                            padding: '10px 14px',
                            borderRadius: '8px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            border: isSel ? '2px solid #D99500' : '1px solid var(--border)',
                            background: isSel ? 'var(--white)' : 'var(--surface)',
                          }}
                        >
                          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>{label}</div>
                          <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '2px' }}>{desc}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

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
                            Foco
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
                    <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Solução:</span>
                    <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getTipoLabel()}</p>
                  </div>
                  {data.tipo === 'saude' && (
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Modalidade:</span>
                      <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getModalidadeSaudeLabel()}</p>
                    </div>
                  )}
                  {data.tipo === 'consorcio' && (
                    <>
                      <div>
                        <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Produto:</span>
                        <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getConsorcioProdutoLabel()}</p>
                      </div>
                      <div>
                        <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Administradora:</span>
                        <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getConsorcioAdminLabel()}</p>
                      </div>
                    </>
                  )}
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Momento:</span>
                    <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getSituacaoLabel()}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Prioridade:</span>
                    <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px', marginTop: '2px' }}>{getPrioridadeLabel()}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleWhatsAppRedirect}>
                {/* Campos adicionais para Plano de Saúde (Idade, Profissão, CEP) */}
                {data.tipo === 'saude' && (
                  <div style={{ background: 'var(--warm-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#D99500', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                      Dados para cálculo exato do Plano de Saúde:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>
                          Idade da(s) vida(s): *
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: 34 anos ou 38, 35 e 6 anos"
                          value={data.idades}
                          onChange={e => setData(prev => ({ ...prev, idades: e.target.value }))}
                          required
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            border: '1px solid var(--border)',
                            background: 'var(--white)',
                            color: 'var(--text)',
                            fontSize: '13px',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>
                          Profissão ou Cargo: *
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Advogado, Engenheiro, Administrador..."
                          value={data.profissao}
                          onChange={e => setData(prev => ({ ...prev, profissao: e.target.value }))}
                          required
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            border: '1px solid var(--border)',
                            background: 'var(--white)',
                            color: 'var(--text)',
                            fontSize: '13px',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>
                          CEP do Endereço Residencial: *
                        </label>
                        <input
                          type="text"
                          placeholder="00000-000"
                          value={data.cep}
                          onChange={e => setData(prev => ({ ...prev, cep: e.target.value }))}
                          required
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            border: '1px solid var(--border)',
                            background: 'var(--white)',
                            color: 'var(--text)',
                            fontSize: '13px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                      Seu Nome ou Empresa: *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: João Silva ou Silva Construtora"
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
                      Seu WhatsApp com DDD: *
                    </label>
                    <input
                      type="tel"
                      placeholder="(98) 99999-9999"
                      value={data.telefone}
                      onChange={e => setData(prev => ({ ...prev, telefone: e.target.value }))}
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
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--muted)', marginBottom: '20px', background: 'rgba(37,211,102,0.08)', padding: '10px 14px', borderRadius: '8px' }}>
                  <ShieldCheck size={16} color="#25D366" style={{ flexShrink: 0 }} />
                  <span>Estudo consultivo 100% gratuito e sem compromisso. Comparamos as principais seguradoras e administradoras do mercado.</span>
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
                    <MessageCircle size={18} /> Ver Cotações no WhatsApp Agora
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
