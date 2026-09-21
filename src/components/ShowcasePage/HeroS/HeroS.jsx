import './HeroS.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const STATS = [
  { value: '1,200+', label: 'Credentials issued' },
  { value: '100%', label: 'Cryptographically signed' },
  { value: 'Open Badges', label: '& CLR aligned' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] } },
})

function HeroS() {
  return (
    <section className="hero-s">
      <div className="hero-s__bg" aria-hidden="true">
        <span className="hero-s__blob hero-s__blob--1" />
        <span className="hero-s__blob hero-s__blob--2" />
      </div>

      <div className="container hero-s__inner">
        <div className="hero-s__content">
          <motion.p className="eyebrow" initial="hidden" animate="show" variants={fadeUp(0)}>
            SHOWCASE
          </motion.p>

          <motion.h1 className="hero-s__title" initial="hidden" animate="show" variants={fadeUp(0.08)}>
            Everything you finish
            <br />
            <span className="hero-s__title-accent">becomes proof.</span>
          </motion.h1>

          <motion.p className="hero-s__subtitle" initial="hidden" animate="show" variants={fadeUp(0.16)}>
            Every course, pathway, internship and project you complete on
            SOLO turns into a verified credential — stored in one wallet,
            ready to download or share whenever you need it.
          </motion.p>

          <motion.div className="hero-s__ctas" initial="hidden" animate="show" variants={fadeUp(0.24)}>
            <a href="#wallet" className="btn btn-primary">
              See the wallet
              <ArrowRight size={15} />
            </a>
            <a href="#sources" className="btn btn-ghost">How credentials are earned</a>
          </motion.div>

          <motion.div className="hero-s__stats" initial="hidden" animate="show" variants={fadeUp(0.32)}>
            {STATS.map((stat) => (
              <div className="hero-s__stat" key={stat.label}>
                <span className="hero-s__stat-value">{stat.value}</span>
                <span className="hero-s__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-s__shot"
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <img
            src="/images/showcase/credential-wallet.png"
            alt="SOLO Credential Wallet — search, filter, and manage verified badges and Open Badges credentials"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroS
