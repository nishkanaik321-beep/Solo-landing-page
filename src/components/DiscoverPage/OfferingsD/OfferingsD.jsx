import './OfferingsD.css'
import { motion } from 'framer-motion'
import { BookOpen, Handshake, Briefcase, Hammer, ArrowRight } from 'lucide-react'

const OFFERINGS = [
  {
    key: 'courses',
    label: 'Courses',
    description:
      'Self-paced lessons from partners like IBM SkillsBuild and Skill India, with skill badges that unlock as you finish each module.',
    cta: 'Browse courses',
    accent: 'var(--orange)',
    icon: BookOpen,
  },
  {
    key: 'internships',
    label: 'Internships',
    description:
      'Short-term placements with studios and startups — paid, mentored, and scoped so a first-timer can actually land one.',
    cta: 'See internships',
    accent: 'var(--success)',
    icon: Handshake,
  },
  {
    key: 'jobs',
    label: 'Jobs',
    description:
      'Full-time openings scored against your verified credentials, so you see exactly which skills you already cover before you apply.',
    cta: 'View job matches',
    accent: 'var(--blue)',
    icon: Briefcase,
  },
  {
    key: 'live-projects',
    label: 'Live projects',
    description:
      'Real problem statements from partner organizations. Ship working code, get it reviewed, and walk away with portfolio proof.',
    cta: 'Find a live project',
    accent: 'var(--gold)',
    icon: Hammer,
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function OfferingsD() {
  return (
    <section className="offerings" id="offerings">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp(0)}
        >
          WHAT'S HERE FOR YOU
        </motion.p>

        <motion.h2
          className="offerings__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0.06)}
        >
          One profile.
          <br />
          Different ways to move forward.
        </motion.h2>

        <motion.p
          className="offerings__subtitle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp(0.12)}
        >
          Pathways get you skilled — these are the places that skill actually
          gets put to use.
        </motion.p>

        <div className="offerings__grid">
          {OFFERINGS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                className="offerings__card"
                key={item.key}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp(0.16 + i * 0.08)}
              >
                <span
                  className="offerings__icon"
                  style={{ color: item.accent }}
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3 className="offerings__card-title">{item.label}</h3>
                <p className="offerings__card-desc">{item.description}</p>
                <div className="offerings__card-footer">
                  <span
                    className="offerings__stat"
                    style={{ '--stat-accent': item.accent }}
                  >
                    {item.stat}
                  </span>
                  <button type="button" className="offerings__link">
                    {item.cta}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OfferingsD
