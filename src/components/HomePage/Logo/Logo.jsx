import './Logo.css'
/**
 * SOLO wordmark — rendered from the official logo asset at
 * /public/images/logo/solo-logo.png.
 */
export default function Logo({ onDark = false, size = 'md' }) {
  return (
    <span className={`logo logo--${size} ${onDark ? 'logo--on-dark' : ''}`}>
      <img className="logo__img" src="/images/logo/solo-logo.png" alt="SOLO" />
    </span>
  )
}
