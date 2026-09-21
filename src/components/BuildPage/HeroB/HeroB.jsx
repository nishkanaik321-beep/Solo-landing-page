import './HeroB.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Flame, UserCheck, Award } from 'lucide-react'

const STATS = [
  { value: '40+', label: 'Live project briefs' },
  { value: '12', label: 'Hackathon themes' },
  { value: '100%', label: 'Mentor-reviewed' },
]

const LIVE_NOW = [
  { icon: Target, label: 'Live projects', accent: 'var(--blue)' },
  { icon: Flame, label: 'Hackathons', accent: 'var(--orange)' },
  { icon: UserCheck, label: 'Mentor reviews', accent: 'var(--success)' },
  { icon: Award, label: 'Credentials', value: 'Awarded on completion', accent: 'var(--gold)' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] } },
})

function HeroB() {
  return (
    <section className="hero-b">
      <div className="hero-b__bg" aria-hidden="true">
        <span className="hero-b__blob hero-b__blob--1" />
        <span className="hero-b__blob hero-b__blob--2" />
      </div>

      <div className="container hero-b__inner">
        <div className="hero-b__content">
          <motion.p className="eyebrow" initial="hidden" animate="show" variants={fadeUp(0)}>
            BUILD
          </motion.p>

          <motion.h1 className="hero-b__title" initial="hidden" animate="show" variants={fadeUp(0.08)}>
            Prove it by building
            <br />
            <span className="hero-b__title-accent">something real.</span>
          </motion.h1>

          <motion.p className="hero-b__subtitle" initial="hidden" animate="show" variants={fadeUp(0.16)}>
            Reading about a skill and using it under real constraints are two
            different things. Build turns what you've learned into something
            you actually shipped — guided and assessed by mentors the whole
            way through.
          </motion.p>

          <motion.div className="hero-b__ctas" initial="hidden" animate="show" variants={fadeUp(0.24)}>
            <a href="#live-projects" className="btn btn-primary">
              Browse live projects
              <ArrowRight size={15} />
            </a>
            <a href="#hackathons" className="btn btn-ghost">See hackathons</a>
          </motion.div>

          <motion.div className="hero-b__stats" initial="hidden" animate="show" variants={fadeUp(0.32)}>
            {STATS.map((stat) => (
              <div className="hero-b__stat" key={stat.label}>
                <span className="hero-b__stat-value">{stat.value}</span>
                <span className="hero-b__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-b__panel"
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <div className="hero-b__panel-head">
            <span className="hero-b__panel-dot" aria-hidden="true" />
            On the build board
          </div>

          <div className="hero-b__panel-list">
            {LIVE_NOW.map(({ icon: Icon, label, value, accent }, i) => (
              <motion.div
                className="hero-b__panel-row"
                key={label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.45, ease: [0.16, 0.8, 0.3, 1] }}
              >
                <span className="hero-b__panel-icon" style={{ color: accent }}>
                  <Icon size={17} strokeWidth={2.1} />
                </span>
                <span className="hero-b__panel-label">{label}</span>
                <span className="hero-b__panel-value">{value}</span>
              </motion.div>
            ))}
          </div>

          <Link to="/signin" className="hero-b__panel-cta">
            Start building
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroB
