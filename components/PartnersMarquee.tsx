'use client'

import Image from 'next/image'
import { INSURERS } from '@/lib/insurers'

export function PartnersMarquee() {
  // Use all featured partners, repeated twice for infinite continuous seamless loop
  const marqueeItems = [...INSURERS, ...INSURERS]

  return (
    <div className="partners-marquee-container" aria-label="Carrossel de seguradoras parceiras">
      <div className="partners-marquee-track">
        {marqueeItems.map((ins, index) => (
          <div key={`${ins.id}-${index}`} className="partners-marquee-item" title={ins.name}>
            <Image
              src={ins.logo}
              alt={ins.name}
              width={110}
              height={32}
              className="partners-marquee-img"
              onError={(e) => {
                const target = e.currentTarget
                if (!target.src.endsWith(ins.png)) {
                  target.src = ins.png
                }
              }}
            />
            <span className="partners-marquee-label">{ins.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
