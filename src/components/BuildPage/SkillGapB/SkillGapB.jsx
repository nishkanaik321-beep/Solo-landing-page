import './SkillGapB.css'
import { motion } from 'framer-motion'
import { Check, Minus, X, ArrowRight, Target, Flame, BookOpen } from 'lucide-react'

const SKILLS = [
  { name: 'JavaScript', state: 'matched' },
  { name: 'React', state: 'matched' },
  { name: 'Git', state: 'matched' },
  { name: 'Testing', state: 'partial' },
  { name: 'System Design', state: 'missing' },
]

const STATE_META = {
  matched: { icon: Check, className: 'skillgap-b__pill--matched' },
  partial: { icon: Minus, className: 'skillgap-b__pill--partial' },
  missing: { icon: X, className: 'skillgap-b__pill--missing' },
}

const RECOMMENDATIONS = [
  { type: 'Live Project', title: 'React Dashboard', icon: Target, accent: 'var(--blue)' },
  { type: 'Course', title: 'Advanced Testing', icon: BookOpen, accent: 'var(--success)' },
  { type: 'Hackathon', title: 'Developer Challenge', icon: Flame, accent: 'var(--orange)' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function SkillGapB() {
  return (
    <section className="skillgap-b">
      <div className="container">
        <div className="skillgap-b__head">
          <motion.p
            className="eyebrow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp(0)}
          >
            CAREER SIGNAL
          </motion.p>
          <motion.h2
            className="skillgap-b__title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.06)}
          >
            Know what your work unlocks next.
          </motion.h2>
          <motion.p
            className="skillgap-b__subtitle"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp(0.12)}
          >
            SOLO compares your verified skills against real job roles, so you
            can see exactly what a build experience like this one helps you
            close.
          </motion.p>
        </div>

        <motion.div
          className="skillgap-b__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <div className="skillgap-b__card-head">
            <span className="skillgap-b__card-role">Software Developer</span>
            <span className="skillgap-b__card-tag">Required skills</span>
          </div>

          <div className="skillgap-b__pills">
            {SKILLS.map((skill, i) => {
              const meta = STATE_META[skill.state]
              const Icon = meta.icon
              return (
                <motion.span
                  className={`skillgap-b__pill ${meta.className}`}
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
                >
                  <Icon size={12} strokeWidth={2.6} />
                  {skill.name}
                </motion.span>
              )
            })}
          </div>

          <div className="skillgap-b__note">Build to close the gap.</div>
        </motion.div>

        <motion.div
          className="skillgap-b__recs"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0.3)}
        >
          {RECOMMENDATIONS.map((rec) => {
            const Icon = rec.icon
            return (
              <div className="skillgap-b__rec" key={rec.title}>
                <span className="skillgap-b__rec-icon" style={{ color: rec.accent }}>
                  <Icon size={16} strokeWidth={2} />
                </span>
                <div className="skillgap-b__rec-text">
                  <span className="skillgap-b__rec-type">{rec.type}</span>
                  <span className="skillgap-b__rec-title">{rec.title}</span>
                </div>
                <ArrowRight className="skillgap-b__rec-arrow" size={15} aria-hidden="true" />
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillGapB
