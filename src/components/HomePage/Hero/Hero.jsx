import './Hero.css'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Rocket, Sparkles, Diamond, BadgeCheck, Play } from 'lucide-react'
import { heroStats, heroFloatingCards } from '../../../data/content.js'

const headlineLines = [
  { text: 'Learn skills.', accent: false },
  { text: 'Discover opportunities.', accent: true },
  { text: 'Build your future', accent: false },
]

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.16, 0.8, 0.3, 1] },
  }),
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] } },
})

function CountUpStat({ value, label, delay }) {
  const numericMatch = value.match(/[\d,]+/)
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : ''
  const suffix = numericMatch ? value.slice(numericMatch.index + numericMatch[0].length) : ''
  const display = numericMatch ? numericMatch[0] : value

  return (
    <motion.div className="hero__stat" variants={fadeUp(delay)} initial="hidden" animate="show">
      <b>{prefix}{display}{suffix}</b>
      <span>{label}</span>
    </motion.div>
  )
}

const iconMap = {
  rocket: Rocket,
  sparkles: Sparkles,
  sparkle: Diamond,
  check: BadgeCheck,
  'arrow-up-right': ArrowUpRight,
}

function FloatingCard({ card, mouse, index }) {
  const depth = 10 + (index % 3) * 6
  const parallaxStyle = {
    transform: `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`,
  }

  return (
    <div className="hero__float-wrap" style={{ ...card.style, ...parallaxStyle }}>
      <motion.div
        className={`hero__float-card hero__float-card--${card.kind}`}
        initial={{ opacity: 0, scale: 0.7, rotate: index % 2 === 0 ? -8 : 8 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { delay: 0.5 + index * 0.1, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] },
          scale: { delay: 0.5 + index * 0.1, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] },
          rotate: { delay: 0.5 + index * 0.1, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] },
          y: { delay: 1.2 + index * 0.15, duration: 4 + (index % 3), repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        {card.kind === 'journey' ? (
          <>
            <div className="hero__float-journey-top">
              <span className="hero__float-eyebrow">{card.eyebrow}</span>
              <ArrowUpRight size={14} />
            </div>
            <div className="hero__float-journey-stages">
              <span>{card.stageStart}</span>
              <span>{card.stageEnd}</span>
            </div>
            <p>{card.title}</p>
          </>
        ) : (
          <>
            {(() => {
              const Icon = iconMap[card.icon]
              return Icon ? (
                <span className="hero__float-icon" style={{ color: card.accent }}>
                  <Icon size={15} strokeWidth={2.2} />
                </span>
              ) : null
            })()}
            <div className="hero__float-text">
              <strong>{card.title}</strong>
              <span>{card.subtitle}</span>
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMouse({ x, y })
  }

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 })

  return (
    <section
      id="top"
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero__floats" aria-hidden="true">
        {heroFloatingCards.map((card, i) => (
          <FloatingCard key={card.id} card={card} mouse={mouse} index={i} />
        ))}
      </div>

      <div className="container hero__content">
        <h1 className="hero__heading">
          {headlineLines.map((line, i) => (
            <motion.span
              key={line.text}
              className={`hero__line ${line.accent ? 'hero__line--accent' : ''}`}
              custom={i}
              variants={lineVariants}
              initial="hidden"
              animate="show"
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p className="hero__lede" variants={fadeUp(0.55)} initial="hidden" animate="show">
          SOLO (Skills, Opportunities, Learning and Outcome) connects structured pathways,
          cryptographically verified CLR credentials, and AI skill-matching to launch your career.
        </motion.p>

        <motion.div className="hero__ctas" variants={fadeUp(0.68)} initial="hidden" animate="show">
          <a href="#showcase" className="btn btn-primary">
            <Play size={15} fill="currentColor" />
            Watch a Demo
          </a>
          <a href="#journey" className="btn btn-ghost">See how it works</a>
        </motion.div>

        <div className="hero__stats">
          {heroStats.map((stat, i) => (
            <CountUpStat key={stat.label} value={stat.value} label={stat.label} delay={0.8 + i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
