import './HeroD.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Handshake, Briefcase, Hammer } from 'lucide-react'

const STATS = [
  { value: '0+', label: 'Verified Courses' },
  { value: '0+', label: 'Skills tracked' },
  { value: '0+', label: 'Pathways mapped' },
]

const LIVE_NOW = [
  { icon: BookOpen, label: 'Courses', accent: 'var(--orange)' },
  { icon: Handshake, label: 'Internships', accent: 'var(--success)' },
  { icon: Briefcase, label: 'Jobs', accent: 'var(--blue)' },
  { icon: Hammer, label: 'Live projects', accent: 'var(--gold)' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] } },
})

function HeroD() {
  return (
    <section className="hero-d">
      <div className="hero-d__bg" aria-hidden="true">
        <span className="hero-d__blob hero-d__blob--1" />
        <span className="hero-d__blob hero-d__blob--2" />
      </div>

      <div className="container hero-d__inner">
        <div className="hero-d__content">
          <motion.p className="eyebrow" initial="hidden" animate="show" variants={fadeUp(0)}>
            DISCOVER
          </motion.p>

          <motion.h1 className="hero-d__title" initial="hidden" animate="show" variants={fadeUp(0.08)}>
            Find your direction
            <br />
            <span className="hero-d__title-accent">before you commit to it.</span>
          </motion.h1>

          <motion.p className="hero-d__subtitle" initial="hidden" animate="show" variants={fadeUp(0.16)}>
            Browse pathways, see which skills are actually in demand, and line up
            courses, internships, jobs and live projects — all before you spend a
            single hour learning.
          </motion.p>

          <motion.div className="hero-d__ctas" initial="hidden" animate="show" variants={fadeUp(0.24)}>
            <a href="#pathways" className="btn btn-primary">
              Explore pathways
              <ArrowRight size={15} />
            </a>
            <a href="#offerings" className="btn btn-ghost">See what's here</a>
          </motion.div>

          <motion.div className="hero-d__stats" initial="hidden" animate="show" variants={fadeUp(0.32)}>
            {STATS.map((stat) => (
              <div className="hero-d__stat" key={stat.label}>
                <span className="hero-d__stat-value">{stat.value}</span>
                <span className="hero-d__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-d__panel"
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <div className="hero-d__panel-head">
            <span className="hero-d__panel-dot" aria-hidden="true" />
            Live on SOLO right now
          </div>

          <div className="hero-d__panel-list">
            {LIVE_NOW.map(({ icon: Icon, label, value, accent }, i) => (
              <motion.div
                className="hero-d__panel-row"
                key={label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.45, ease: [0.16, 0.8, 0.3, 1] }}
              >
                <span className="hero-d__panel-icon" style={{ color: accent }}>
                  <Icon size={17} strokeWidth={2.1} />
                </span>
                <span className="hero-d__panel-label">{label}</span>
                <span className="hero-d__panel-value">{value}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/signin" className="hero-d__panel-cta">
            Build profile
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroD
