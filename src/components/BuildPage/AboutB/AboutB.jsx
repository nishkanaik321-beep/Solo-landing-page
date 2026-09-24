import './AboutB.css'
import { motion } from 'framer-motion'
import { Flame, Target, Users, Gift } from 'lucide-react'

const FORMATS = [
  {
    title: 'Hackathon',
    description:
      'Bring an idea, meet your team, and turn a challenge into something real in a day or a weekend.',
    icon: Flame,
    accent: 'var(--orange)',
  },
  {
    title: 'Live Project',
    description:
      'Work on a real problem for a real context, balancing user needs, constraints, and outcomes.',
    icon: Target,
    accent: 'var(--blue)',
  },
  {
    title: 'Team Build',
    description:
      'Collaborate across different skills to plan, design, and build something that actually works.',
    icon: Users,
    accent: 'var(--success)',
  },
  {
    title: 'Build for Free',
    description:
      'Build a real-world project at no cost, gain hands-on experience, and earn a credential when you complete it.',
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
          Build under real constraints.
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
                <span className="sprint-card__icon" style={{ color: format.accent }}>
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="sprint-card__title">{format.title}</h3>
                <p className="sprint-card__desc">{format.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutB
