import './TrustStrip.css'
import { trustStripItems } from '../../../data/content.js'

function Track({ ariaHidden = false }) {
  return (
    <div className="trust-strip__track" aria-hidden={ariaHidden}>
      {trustStripItems.map((item, i) => (
        <div className="trust-strip__item" key={i}>
          <span className="trust-strip__dot" />
          {item.text}
        </div>
      ))}
    </div>
  )
}

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-strip__marquee">
        {/* Two identical tracks placed back-to-back so the loop is seamless */}
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  )
}
