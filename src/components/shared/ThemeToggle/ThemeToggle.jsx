import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

/**
 * Shared dark/light switch used by any section that supports both themes
 * at runtime (e.g. Journey on the homepage, Skills on Discover, Hackathons
 * on Build). Keeping the markup here means every instance looks and
 * behaves identically.
 */
function ThemeToggle({ isLight, onToggle, sectionLabel = 'section' }) {
  return (
    <button
      type="button"
      className={`theme-switch ${isLight ? 'theme-switch--light' : ''}`}
      role="switch"
      aria-checked={isLight}
      aria-label={`Switch ${sectionLabel} to ${isLight ? 'dark' : 'light'} theme`}
      onClick={onToggle}
    >
      <span className="theme-switch__icon theme-switch__icon--moon">
        <Moon size={13} />
      </span>
      <span className="theme-switch__icon theme-switch__icon--sun">
        <Sun size={13} />
      </span>
      <motion.span
        className="theme-switch__knob"
        animate={{ x: isLight ? 26 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isLight ? <Sun size={13} /> : <Moon size={13} />}
      </motion.span>
    </button>
  )
}

export default ThemeToggle
