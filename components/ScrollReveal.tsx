'use client'

import { useEffect } from 'react'

/**
 * Abordagem segura de scroll-reveal:
 * 1. JS adiciona .reveal-ready em cada seção elegível → oculta o elemento
 * 2. IntersectionObserver detecta entrada no viewport
 * 3. JS adiciona .reveal-visible → dispara a animação CSS
 *
 * Se o JS for lento ou desabilitado, as seções permanecem VISÍVEIS (default seguro).
 * Respeita prefers-reduced-motion via CSS.
 */
export function ScrollReveal() {
  useEffect(() => {
    // Seleciona apenas seções abaixo do fold — nunca o hero principal
    const selector = [
      '.trust-bar',
      '.section-dual',
      '.simulator-section',
      '.why-section',
      '.process-section',
      '.testimonials-section',
      '.partners-showcase-section',
      '.faq-section',
      '.final-cta',
      // Seções genéricas que estão abaixo do fold
      'section.section',
    ].join(', ')

    const elements = document.querySelectorAll<HTMLElement>(selector)
    if (!elements.length) return

    // Verifica se o usuário prefere menos movimento
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return // Não anima — conteúdo fica visível normalmente

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement

          if (entry.isIntersecting) {
            // Dispara a animação de entrada
            el.classList.add('reveal-visible')
            observer.unobserve(el) // Anima apenas uma vez
          }
        })
      },
      {
        threshold: 0.06,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    // Marca como ready APÓS o primeiro paint para não bloquear LCP
    const raf = requestAnimationFrame(() => {
      elements.forEach((el) => {
        // Não oculta seções que já são visíveis no viewport
        const rect = el.getBoundingClientRect()
        const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (!alreadyVisible) {
          el.classList.add('reveal-ready')
        }

        observer.observe(el)
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return null
}
