import './AboutB.css'
import { motion } from 'framer-motion'
import { Flame, Target, Users, Gift, ArrowUpRight } from 'lucide-react'

const FORMATS = [
  {
    number: '01',
    title: 'Live Project',
    description:
      'Work on a real problem for a real context, balancing user needs, constraints, and outcomes.',
    icon: Target,
    accent: 'var(--blue)',
  },
  {
    number: '02',
    title: 'Hackathon',
    description:
      'Bring an idea, meet your team, and turn a challenge into something real in a day or a weekend.',
    icon: Flame,
    accent: 'var(--orange)',
  },
  {
    number: '03',
    title: 'Team Build',
    description:
      'Combine different skills to plan, design, and build something together that actually works.',
    icon: Users,
    accent: 'var(--success)',
  },
  {
    number: '04',
    title: 'Build for Free',
    description:
      'Take on a real-world project at no cost, gain hands-on experience, and earn proof when you complete it.',
    icon: Gift,
    accent: 'var(--gold)',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function AboutB() {
  return (
    <section className="sprints">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp(0)}
        >
          HACKATHONS &amp; LIVE PROJECTS
        </motion.p>
        <motion.h2
          className="sprints__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0.06)}
        >
          Choose how you want to build.
        </motion.h2>
        <motion.p
          className="sprints__subtitle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp(0.12)}
        >
          Work on challenges that push you to think, build, and solve
          problems beyond the classroom — every one of them guided and
          assessed by a mentor.
        </motion.p>

        <div className="sprints__grid">
          {FORMATS.map((format, i) => {
            const Icon = format.icon
            return (
              <motion.div
                className="sprint-card"
                key={format.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp(0.16 + i * 0.07)}
              >
                <div className="sprint-card__top">
                  <span className="sprint-card__number">{format.number}</span>
                  <span className="sprint-card__icon" style={{ color: format.accent }}>
                    <Icon size={20} strokeWidth={2} />
                  </span>
                </div>
                <h3 className="sprint-card__title">{format.title}</h3>
                <p className="sprint-card__desc">{format.description}</p>
                <span className="sprint-card__arrow" aria-hidden="true">
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutB
