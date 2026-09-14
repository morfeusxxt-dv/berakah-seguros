'use client'

import { useEffect } from 'react'

/**
 * Observa todas as sections/elementos com classes de animação e
 * adiciona a classe `.in-view` quando entram no viewport,
 * disparando a animação de entrada definida no CSS.
 *
 * Respeita `prefers-reduced-motion` automaticamente via CSS.
 */
export function ScrollReveal() {
  useEffect(() => {
    const selectors = [
      '.section',
      '.trust-bar',
      '.section-dual',
      '.simulator-section',
      '.why-section',
      '.process-section',
      '.testimonials-section',
      '.partners-showcase-section',
      '.faq-section',
      '.final-cta',
    ].join(', ')

    const elements = document.querySelectorAll(selectors)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            // Uma vez visível, para de observar para não re-animar
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -48px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
