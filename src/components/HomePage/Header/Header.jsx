import './Header.css'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../Logo/Logo.jsx'
import { navLinks } from '../../../data/content.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>

        <nav className="header__nav">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link key={link.label} to={link.href}>{link.label}</Link>
            ) : (
              <a key={link.label} href={link.href} onClick={(e) => e.preventDefault()}>
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="header__cta">
          <Link to="/signin" className="btn btn-ghost">Sign In</Link>
          <Link to="/signin" className="btn btn-primary">Start Learning</Link>
        </div>

        <button
          className="header__toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="header__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <div className="header__mobile-inner">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link key={link.label} to={link.href} onClick={handleNavClick}>
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick()
                    }}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="header__mobile-ctas">
                <Link to="/signin" className="btn btn-ghost" onClick={handleNavClick}>Sign In</Link>
                <Link to="/signin" className="btn btn-primary" onClick={handleNavClick}>Start Learning</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
