export interface Insurer {
  id: string
  name: string
  logo: string // SVG primary
  png: string  // PNG fallback / raster
  category: 'Líder de Mercado' | 'Multinacional' | 'Saúde & Benefícios' | 'Vida & Previdência' | 'Insurtech & Auto' | 'Corporativo & Garantia'
  featured: boolean
  description?: string
}

export const INSURERS: Insurer[] = [
  // ── Destaques Principais (Top Tier)
  {
    id: 'porto-seguro',
    name: 'Porto Seguro',
    logo: '/seguradoras/porto-seguro.svg',
    png: '/seguradoras/porto-seguro.png',
    category: 'Líder de Mercado',
    featured: true,
    description: 'Líder absoluta em Seguro Auto, Residencial e Patrimonial no Brasil.'
  },
  {
    id: 'bradesco-seguros',
    name: 'Bradesco Seguros',
    logo: '/seguradoras/bradesco-seguros.svg',
    png: '/seguradoras/bradesco-seguros.png',
    category: 'Líder de Mercado',
    featured: true,
    description: 'Maior grupo segurador da América Latina em Saúde, Vida e Previdência.'
  },
  {
    id: 'allianz',
    name: 'Allianz Seguros',
    logo: '/seguradoras/allianz.svg',
    png: '/seguradoras/allianz.png',
    category: 'Multinacional',
    featured: true,
    description: 'Gigante alemã líder global em serviços financeiros e seguros corporativos.'
  },
  {
    id: 'tokio-marine',
    name: 'Tokio Marine',
    logo: '/seguradoras/tokio-marine.svg',
    png: '/seguradoras/tokio-marine.png',
    category: 'Multinacional',
    featured: true,
    description: 'Tradição e solidez japonesa com excelência em atendimento a sinistros.'
  },
  {
    id: 'sulamerica',
    name: 'SulAmérica',
    logo: '/seguradoras/sulamerica.svg',
    png: '/seguradoras/sulamerica.png',
    category: 'Líder de Mercado',
    featured: true,
    description: 'Referência centenária em Saúde, Odonto, Vida e Previdência Privada.'
  },
  {
    id: 'mapfre',
    name: 'Mapfre Seguros',
    logo: '/seguradoras/mapfre.svg',
    png: '/seguradoras/mapfre.png',
    category: 'Multinacional',
    featured: true,
    description: 'Multinacional espanhola com presença global em seguros gerais e rurais.'
  },
  {
    id: 'zurich',
    name: 'Zurich Seguros',
    logo: '/seguradoras/zurich.svg',
    png: '/seguradoras/zurich.png',
    category: 'Multinacional',
    featured: true,
    description: 'Solidez e precisão suíça para proteção de pessoas e grandes patrimônios.'
  },
  {
    id: 'hdi',
    name: 'HDI Seguros',
    logo: '/seguradoras/hdi.svg',
    png: '/seguradoras/hdi.png',
    category: 'Multinacional',
    featured: true,
    description: 'Grupo alemão com agilidade e inovação em coberturas automotivas.'
  },
  {
    id: 'chubb',
    name: 'Chubb Seguros',
    logo: '/seguradoras/chubb.svg',
    png: '/seguradoras/chubb.png',
    category: 'Multinacional',
    featured: true,
    description: 'Maior seguradora de propriedade e responsabilidade civil de capital aberto do mundo.'
  },
  {
    id: 'metlife',
    name: 'MetLife',
    logo: '/seguradoras/metlife.svg',
    png: '/seguradoras/metlife.png',
    category: 'Vida & Previdência',
    featured: true,
    description: 'Líder mundial em seguros de vida, planos odontológicos e benefícios corporativos.'
  },
  {
    id: 'axa',
    name: 'AXA Seguros',
    logo: '/seguradoras/axa.svg',
    png: '/seguradoras/axa.png',
    category: 'Multinacional',
    featured: true,
    description: 'Uma das maiores seguradoras do mundo, especializada em linhas comerciais e pessoais.'
  },
  {
    id: 'aig',
    name: 'AIG Seguros',
    logo: '/seguradoras/aig.svg',
    png: '/seguradoras/aig.png',
    category: 'Corporativo & Garantia',
    featured: true,
    description: 'Líder global em seguros de responsabilidade civil, D&O, linhas financeiras e frotas.'
  },
  {
    id: 'icatu',
    name: 'Icatu Seguros',
    logo: '/seguradoras/icatu.svg',
    png: '/seguradoras/icatu.png',
    category: 'Vida & Previdência',
    featured: true,
    description: 'Maior seguradora 100% independente do Brasil em Vida, Previdência e Capitalização.'
  },
  {
    id: 'prudential',
    name: 'Prudential',
    logo: '/seguradoras/prudential.svg',
    png: '/seguradoras/prudential.png',
    category: 'Vida & Previdência',
    featured: true,
    description: 'Especialista máxima mundial em planejamento financeiro e proteção familiar em vida.'
  },
  {
    id: 'suhai',
    name: 'Suhai Seguros',
    logo: '/seguradoras/suhai.svg',
    png: '/seguradoras/suhai.png',
    category: 'Insurtech & Auto',
    featured: true,
    description: 'Líder nacional em cobertura exclusiva de furto e roubo para carros, motos e caminhões.'
  },
  {
    id: 'seguros-unimed',
    name: 'Seguros Unimed',
    logo: '/seguradoras/seguros-unimed.svg',
    png: '/seguradoras/seguros-unimed.png',
    category: 'Saúde & Benefícios',
    featured: true,
    description: 'Braço segurador do Sistema Unimed com excelência médica e previdenciária.'
  },
  {
    id: 'amil',
    name: 'Amil Saúde',
    logo: '/seguradoras/amil.svg',
    png: '/seguradoras/amil.png',
    category: 'Saúde & Benefícios',
    featured: true,
    description: 'Rede hospitalar e médica de ponta para empresas e famílias em todo o Brasil.'
  },
  {
    id: 'omint',
    name: 'Omint Saúde',
    logo: '/seguradoras/omint.svg',
    png: '/seguradoras/omint.png',
    category: 'Saúde & Benefícios',
    featured: true,
    description: 'Padrão premium em medicina diagnóstica, saúde executiva e seguro viagem internacional.'
  },
  {
    id: 'yelum',
    name: 'Yelum Seguradora',
    logo: '/seguradoras/yelum.svg',
    png: '/seguradoras/yelum.png',
    category: 'Insurtech & Auto',
    featured: true,
    description: 'Nova marca da Liberty Seguros no Brasil, com processos digitais e atendimento humano.'
  },
  {
    id: 'youse',
    name: 'Youse Seguros',
    logo: '/seguradoras/youse.svg',
    png: '/seguradoras/youse.png',
    category: 'Insurtech & Auto',
    featured: true,
    description: 'Plataforma 100% digital da Caixa Seguradora com flexibilidade e contratação sob medida.'
  },
  {
    id: 'ituran',
    name: 'Ituran com Seguro',
    logo: '/seguradoras/ituran.svg',
    png: '/seguradoras/ituran.png',
    category: 'Insurtech & Auto',
    featured: true,
    description: 'Tecnologia israelense de rastreamento com seguro auto de alta aceitação.'
  },
  {
    id: 'mag',
    name: 'MAG Seguros',
    logo: '/seguradoras/mag.svg',
    png: '/seguradoras/mag.png',
    category: 'Vida & Previdência',
    featured: true,
    description: 'Mongeral Aegon: quase dois séculos contínuos de proteção à vida e futuro no país.'
  },
  {
    id: 'akad',
    name: 'Akad Seguros',
    logo: '/seguradoras/akad.svg',
    png: '/seguradoras/akad.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Insurtech inovadora com forte liderança em E&O, D&O, Transportes e Riscos Cibernéticos.'
  },
  {
    id: 'azos',
    name: 'Azos',
    logo: '/seguradoras/azos.svg',
    png: '/seguradoras/azos.png',
    category: 'Insurtech & Auto',
    featured: false,
    description: 'Insurtech ágil de seguro de vida, doenças graves e invalidez sem burocracia.'
  },
  {
    id: 'justos',
    name: 'Justos Seguros',
    logo: '/seguradoras/justos.svg',
    png: '/seguradoras/justos.png',
    category: 'Insurtech & Auto',
    featured: false,
    description: 'Seguro auto que valoriza e recompensa bons motoristas com descontos transparentes.'
  },
  {
    id: 'swiss-re',
    name: 'Swiss Re',
    logo: '/seguradoras/swiss-re.svg',
    png: '/seguradoras/swiss-re.png',
    category: 'Multinacional',
    featured: false,
    description: 'Uma das maiores resseguradoras mundiais, provendo suporte a grandes riscos operacionais.'
  },
  {
    id: 'pottencial',
    name: 'Pottencial Seguradora',
    logo: '/seguradoras/pottencial.svg',
    png: '/seguradoras/pottencial.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Líder nacional e pioneira em Seguro Garantia Judicial, Licitações e Fiança Locatícia.'
  },
  {
    id: 'junto-seguros',
    name: 'Junto Seguros',
    logo: '/seguradoras/junto-seguros.svg',
    png: '/seguradoras/junto-seguros.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Referência em soluções corporativas de garantia digital e linhas financeiras.'
  },
  {
    id: 'maritima',
    name: 'Marítima / Sompo',
    logo: '/seguradoras/maritima.svg',
    png: '/seguradoras/maritima.png',
    category: 'Multinacional',
    featured: false,
    description: 'Tradição sólida no mercado brasileiro em seguros patrimoniais e de cargas.'
  },
  {
    id: 'sancor',
    name: 'Sancor Seguros',
    logo: '/seguradoras/sancor.svg',
    png: '/seguradoras/sancor.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Liderança sólida em seguros para o agronegócio, maquinário e patrimônio industrial.'
  },
  {
    id: 'universal-assistance',
    name: 'Universal Assistance',
    logo: '/seguradoras/universal-assistance.svg',
    png: '/seguradoras/universal-assistance.png',
    category: 'Saúde & Benefícios',
    featured: false,
    description: 'Líder continental em assistência médica e seguro viagem internacional.'
  },
  {
    id: 'vital-card',
    name: 'Vital Card',
    logo: '/seguradoras/vital-card.svg',
    png: '/seguradoras/vital-card.png',
    category: 'Saúde & Benefícios',
    featured: false,
    description: 'Especialista em assistência médica a viagens a lazer e negócios pelo mundo.'
  },
  {
    id: 'usebens',
    name: 'Usebens Seguradora',
    logo: '/seguradoras/usebens.svg',
    png: '/seguradoras/usebens.png',
    category: 'Insurtech & Auto',
    featured: false,
    description: 'Especializada em seguros veiculares, garantias estendidas e proteção de equipamentos.'
  },
  {
    id: 'berkley',
    name: 'Berkley International',
    logo: '/seguradoras/berkley.svg',
    png: '/seguradoras/berkley.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Braço segurador da W. R. Berkley Corporation com expertise em Garantia e RC.'
  },
  {
    id: 'cnp',
    name: 'CNP Seguros',
    logo: '/seguradoras/cnp.svg',
    png: '/seguradoras/cnp.png',
    category: 'Multinacional',
    featured: false,
    description: 'Líder francesa de seguros pessoais e proteção financeira há mais de 170 anos.'
  },
  {
    id: 'extramed',
    name: 'Extramed',
    logo: '/seguradoras/extramed.svg',
    png: '/seguradoras/extramed.png',
    category: 'Saúde & Benefícios',
    featured: false,
    description: 'Administradora de benefícios corporativos e planos coletivos de saúde.'
  },
  {
    id: 'ez-seguros',
    name: 'EZze Seguros',
    logo: '/seguradoras/ez-seguros.svg',
    png: '/seguradoras/ez-seguros.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Seguradora multiproduto com soluções integradas para pessoas e empresas.'
  },
  {
    id: 'ff-seguros',
    name: 'FF Seguros (Fairfax)',
    logo: '/seguradoras/ff-seguros.svg',
    png: '/seguradoras/ff-seguros.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Companhia da multinacional Fairfax Financial Holdings focada em riscos especiais.'
  },
  {
    id: 'msig',
    name: 'MSIG Mitsui Sumitomo',
    logo: '/seguradoras/msig.svg',
    png: '/seguradoras/msig.png',
    category: 'Multinacional',
    featured: false,
    description: 'Membro do grupo MS&AD, uma das maiores holdings seguradoras do planeta.'
  },
  {
    id: 'allseg',
    name: 'Allseg Seguradora',
    logo: '/seguradoras/allseg.svg',
    png: '/seguradoras/allseg.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Soluções sob medida para frotas, patrimônios industriais e garantias financeiras.'
  },
  {
    id: 'avla',
    name: 'Avla',
    logo: '/seguradoras/avla.svg',
    png: '/seguradoras/avla.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Insurtech corporativa pioneira em seguro de crédito e garantias contratuais B2B.'
  },
  {
    id: 'centauro',
    name: 'Centauro-ON',
    logo: '/seguradoras/centauro.svg',
    png: '/seguradoras/centauro.png',
    category: 'Vida & Previdência',
    featured: false,
    description: 'Especialista consolidada em seguro de pessoas, acidentes pessoais e previdência.'
  },
  {
    id: 'essor',
    name: 'Essor Seguros',
    logo: '/seguradoras/essor.svg',
    png: '/seguradoras/essor.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Especialista em nichos de transporte, responsabilidade civil e riscos rurais.'
  },
  {
    id: 'excelsior',
    name: 'Excelsior Seguros',
    logo: '/seguradoras/excelsior.svg',
    png: '/seguradoras/excelsior.png',
    category: 'Corporativo & Garantia',
    featured: false,
    description: 'Tradição operacional desde 1943 com presença nacional em seguros patrimoniais e habitacionais.'
  },
  {
    id: 'bradesco-vida',
    name: 'Bradesco Vida e Previdência',
    logo: '/seguradoras/bradesco-vida.svg',
    png: '/seguradoras/bradesco-vida.png',
    category: 'Vida & Previdência',
    featured: false,
    description: 'Planos completos de sucessão patrimonial, longevidade e proteção à família.'
  }
]
