import { useId } from 'react'

/**
 * Engraved seal: ring lettering, a ticked guilloche ring and the figure at the
 * centre, all in ink line. Our own mark of a promise, never an institution's.
 */
export function Seal({ figure, unit, ring, className = '' }: { figure: string; unit: string; ring: string; className?: string }) {
  const id = useId().replace(/:/g, '')
  const ticks = Array.from({ length: 72 }, (_, i) => (i * 360) / 72)
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-label={`${figure} ${unit}`}>
      <defs>
        <path id={`ring-${id}`} d="M100,100 m-79,0 a79,79 0 1,1 158,0 a79,79 0 1,1 -158,0" />
      </defs>
      <g fill="none" stroke="currentColor">
        <circle cx="100" cy="100" r="97" strokeWidth="1.25" />
        <circle cx="100" cy="100" r="93" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="66" strokeWidth="1" />
        <circle cx="100" cy="100" r="61" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="56" strokeWidth="0.35" strokeDasharray="1 2.2" />
        {ticks.map((a) => (
          <line key={a} x1="100" y1="35.5" x2="100" y2="38.5" strokeWidth="0.6" transform={`rotate(${a} 100 100)`} />
        ))}
      </g>
      <text fill="currentColor" fontSize="9.5" letterSpacing="2.6" fontWeight="500">
        <textPath href={`#ring-${id}`} startOffset="0">
          {ring}
        </textPath>
      </text>
      <text x="100" y="108" textAnchor="middle" fill="currentColor" fontSize="46" fontWeight="500" letterSpacing="-1.5">
        {figure}
      </text>
      <text x="100" y="128" textAnchor="middle" fill="currentColor" fontSize="10" letterSpacing="3" fontWeight="500">
        {unit}
      </text>
    </svg>
  )
}
