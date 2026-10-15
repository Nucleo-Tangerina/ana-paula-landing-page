import { siVisa, siMastercard, siAmericanexpress, siPix } from 'simple-icons'
import { Barcode } from 'lucide-react'
import './PayMethods.css'

// Brand marks from simple-icons; Elo and Hipercard aren't in that set, so the
// row shows the three major networks plus Pix and Boleto.
const BRANDS = [
  { label: 'Visa', icon: siVisa },
  { label: 'Mastercard', icon: siMastercard },
  { label: 'American Express', icon: siAmericanexpress },
]

function Mark({ path, hex }: { path: string; hex: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path d={path} fill={`#${hex}`} />
    </svg>
  )
}

export function PayMethods() {
  return (
    <div className="pay">
      <p className="pay__label">Formas de pagamento</p>
      <ul role="list" className="pay__list">
        {BRANDS.map((b) => (
          <li key={b.label} title={b.label}>
            <Mark path={b.icon.path} hex={b.icon.hex} />
            <span className="visually-hidden">{b.label}</span>
          </li>
        ))}
        <li title="Pix">
          <Mark path={siPix.path} hex={siPix.hex} />
          <span className="pay__name">Pix</span>
        </li>
        <li title="Boleto">
          <Barcode size={20} strokeWidth={1.75} aria-hidden />
          <span className="pay__name">Boleto</span>
        </li>
      </ul>
    </div>
  )
}
