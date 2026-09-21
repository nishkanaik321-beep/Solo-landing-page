import './SourcesS.css'
import { motion } from 'framer-motion'
import { BookOpen, Compass, Handshake, Hammer } from 'lucide-react'

const SOURCES = [
  {
    key: 'courses',
    label: 'Courses',
    icon: BookOpen,
    accent: 'var(--orange)',
    desc: 'Finish every module and pass the final assessment to earn a course badge from the issuing partner.',
  },
  {
    key: 'pathways',
    label: 'Pathways',
    icon: Compass,
    accent: 'var(--blue)',
    desc: 'Complete every step of a pathway and it rolls up into a single milestone credential for that role.',
  },
  {
    key: 'internships',
    label: 'Internships',
    icon: Handshake,
    accent: 'var(--success)',
    desc: 'Wrap up your placement and your host organization signs off, turning the internship into verified experience.',
  },
  {
    key: 'projects',
    label: 'Live projects & hackathons',
    icon: Hammer,
    accent: 'var(--gold)',
    desc: 'Once a mentor reviews and approves your submission, the build becomes a credential with the evidence attached.',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function SourcesS() {
  return (
    <section className="sources" id="sources">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp(0)}
        >
          WHERE CREDENTIALS COME FROM
        </motion.p>
        <motion.h2
          className="sources__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0.06)}
        >
          Four ways to earn one.
        </motion.h2>
        <motion.p
          className="sources__subtitle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp(0.12)}
        >
          Nothing gets issued for showing up. Every credential on SOLO ties
          back to something you actually finished and someone actually
          checked.
        </motion.p>

        <div className="sources__grid">
          {SOURCES.map((source, i) => {
            const Icon = source.icon
            return (
              <motion.div
                className="source-card"
                key={source.key}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp(0.16 + i * 0.08)}
              >
                <span className="source-card__icon" style={{ color: source.accent }}>
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3 className="source-card__title">{source.label}</h3>
                <p className="source-card__desc">{source.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SourcesS
