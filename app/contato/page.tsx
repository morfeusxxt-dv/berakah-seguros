import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Berakah Seguros. Cotação, dúvidas ou atendimento — estamos aqui para você pelo telefone, e-mail ou WhatsApp.',
}

export default function ContatoPage() {
  return <ContactPageClient />
}
