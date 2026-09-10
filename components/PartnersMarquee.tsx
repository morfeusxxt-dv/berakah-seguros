'use client'

import Image from 'next/image'
import { INSURERS } from '@/lib/insurers'

export function PartnersMarquee() {
  // Top featured insurers for the header trust bar
  const featured = INSURERS.filter((i) => i.featured).slice(0, 16)

  return (
    <div className="marquee-wrapper" aria-label="Seguradoras conveniadas">
      <div className="marquee-group">
        {featured.map((ins, index) => (
          <div key={`track1-${ins.id}-${index}`} className="marquee-logo-card" title={ins.name}>
            <Image
              src={ins.logo}
              alt={ins.name}
              width={95}
              height={26}
              className="marquee-logo-img"
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget
                if (!target.src.endsWith(ins.png)) {
                  target.src = ins.png
                }
              }}
            />
          </div>
        ))}
      </div>

      <div className="marquee-group" aria-hidden="true">
        {featured.map((ins, index) => (
          <div key={`track2-${ins.id}-${index}`} className="marquee-logo-card" title={ins.name}>
            <Image
              src={ins.logo}
              alt={ins.name}
              width={95}
              height={26}
              className="marquee-logo-img"
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget
                if (!target.src.endsWith(ins.png)) {
                  target.src = ins.png
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
