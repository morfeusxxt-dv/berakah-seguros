/**
 * Informações de contato oficiais da Berakah Seguros
 */
export const CONTACT_INFO = {
  phone: {
    display: '(98) 98482-5999',
    formatted: '+55 (98) 98482-5999',
    raw: '5598984825999',
    tel: 'tel:+5598984825999',
  },
  whatsapp: {
    number: '5598984825999',
    getLink: (message?: string) =>
      message
        ? `https://wa.me/5598984825999?text=${encodeURIComponent(message)}`
        : 'https://wa.me/5598984825999',
  },
  email: 'contato@berakahseguros.com.br',
  schedule: 'Seg–Sex, 9h–18h',
  cnpj: '67.756.954/0001-08',
} as const
