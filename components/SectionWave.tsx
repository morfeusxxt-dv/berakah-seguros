/**
 * SectionWave — Divisor SVG curvado entre seções.
 *
 * Props:
 * - topColor:  cor do fundo da seção acima (preenche o topo da wave)
 * - fillColor: cor do fundo da seção abaixo (preenche o interior da wave)
 * - flip:      inverte horizontalmente para variar o sentido da curva
 * - height:    altura do divisor em px (default 64)
 */
export function SectionWave({
  topColor = 'transparent',
  fillColor = '#ffffff',
  flip = false,
  height = 64,
  className = '',
}: {
  topColor?: string
  fillColor?: string
  flip?: boolean
  height?: number
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        display: 'block',
        lineHeight: 0,
        position: 'relative',
        zIndex: 1,
        marginTop: -1,
        marginBottom: -1,
        background: topColor,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: `${height}px`, display: 'block' }}
      >
        <path
          d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}

/**
 * SectionWaveGentle — Wave mais suave/orgânica com dois pontos de inflexão.
 * Ideal para transições entre seções de fundo similar.
 */
export function SectionWaveGentle({
  topColor = 'transparent',
  fillColor = '#ffffff',
  flip = false,
  height = 56,
  className = '',
}: {
  topColor?: string
  fillColor?: string
  flip?: boolean
  height?: number
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        display: 'block',
        lineHeight: 0,
        position: 'relative',
        zIndex: 1,
        marginTop: -1,
        marginBottom: -1,
        background: topColor,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: `${height}px`, display: 'block' }}
      >
        <path
          d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1380,14 1440,28 L1440,56 L0,56 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}
