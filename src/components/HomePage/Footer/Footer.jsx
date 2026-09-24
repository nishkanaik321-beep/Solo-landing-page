import './Footer.css'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import Logo from '../Logo/Logo.jsx'
import { footerColumns } from '../../../data/content.js'

const socials = [
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo onDark size="md" />
            <p>Skills-first infrastructure that turns learning into verified credentials and real opportunity.</p>
          </div>

          <div className="footer__cols">
            {footerColumns.map((col) => (
              <div className="footer__col" key={col.title}>
                <h6>{col.title}</h6>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href}>{link.label}</a>
                ))}
              </div>
            ))}

            <div className="footer__col">
              <h6>Follow Along</h6>
              <div className="footer__socials">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a key={s.label} href={s.href} aria-label={s.label} className="footer__social">
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 SOLO Network. Built for learners.</span>
          <div className="footer__swatches">
            <span style={{ background: '#FD4322' }} />
            <span style={{ background: '#FF7F07' }} />
            <span style={{ background: '#1255FF' }} />
            <span style={{ background: '#EB5038' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}
