import './HeroB.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Flame, UserCheck, Award, CheckCircle2 } from 'lucide-react'

const STATS = [
  { value: '100+', label: 'Live project briefs' },
  { value: '100+', label: 'Hackathon themes' },
  { value: '100+', label: 'Mentor-reviewed' },
]

// Each row now carries a "status" so the board reads like it's actually live —
// a build moving through the same pipeline the rest of the page explains.
const BUILD_BOARD = [
  { icon: Target, label: 'Live project', status: 'In progress', accent: 'var(--blue)' },
  { icon: UserCheck, label: 'Mentor review', status: 'Feedback ready', accent: 'var(--orange)' },
  { icon: CheckCircle2, label: 'Evidence submitted', status: 'Under assessment', accent: 'var(--success)' },
  { icon: Award, label: 'Credential earned', status: 'Verified', accent: 'var(--gold)', done: true },
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
            Turn what you learn into work you can show, explain, and stand
            behind — through real projects, hackathons, team builds, and
            challenges, all guided and assessed by mentors along the way.
          </motion.p>

          <motion.div className="hero-b__ctas" initial="hidden" animate="show" variants={fadeUp(0.24)}>
            <a href="#live-projects" className="btn btn-primary">
              Explore live projects
              <ArrowRight size={15} />
            </a>
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
            {BUILD_BOARD.map(({ icon: Icon, label, status, accent, done }, i) => (
              <motion.div
                className={`hero-b__panel-row ${done ? 'hero-b__panel-row--done' : ''}`}
                key={label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.45, ease: [0.16, 0.8, 0.3, 1] }}
              >
                <span className="hero-b__panel-icon" style={{ color: accent }}>
                  <Icon size={17} strokeWidth={2.1} />
                </span>
                <span className="hero-b__panel-label">{label}</span>
                <span className={`hero-b__panel-value ${done ? 'hero-b__panel-value--done' : ''}`}>
                  {!done && <span className="hero-b__panel-live-dot" aria-hidden="true" />}
                  {status}
                </span>
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
