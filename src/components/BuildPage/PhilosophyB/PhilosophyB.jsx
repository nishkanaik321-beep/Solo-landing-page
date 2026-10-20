import './PhilosophyB.css'
import { motion } from 'framer-motion'
import { BookOpen, Hammer, UserCheck, ShieldCheck, Share2 } from 'lucide-react'

const STAGES = [
  { label: 'Learn', icon: BookOpen },
  { label: 'Build', icon: Hammer },
  { label: 'Get reviewed', icon: UserCheck },
  { label: 'Prove', icon: ShieldCheck },
  { label: 'Showcase', icon: Share2 },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

const stageVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { delay, duration: 0.5, ease: [0.16, 0.8, 0.3, 1] } },
})

function PhilosophyB() {
  return (
    <section className="philosophy-b">
      <div className="container">
        <div className="philosophy-b__head">
          <motion.p
            className="eyebrow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp(0)}
          >
            WHY BUILD
          </motion.p>
          <motion.h2
            className="philosophy-b__title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.06)}
          >
            Learning gives you knowledge.
            <br />
            <span className="philosophy-b__title-accent">Building gives you evidence.</span>
          </motion.h2>
          <motion.p
            className="philosophy-b__subtitle"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp(0.12)}
          >
            SOLO connects what you study to what you can actually do. Every
            build starts where a course leaves off, moves through real
            mentor feedback, and ends as verified proof on your profile.
          </motion.p>
        </div>

        <div className="philosophy-b__flow">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon
            const isLast = i === STAGES.length - 1
            return (
              <div className="philosophy-b__stage-wrap" key={stage.label}>
                <motion.div
                  className="philosophy-b__stage"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={stageVariant(0.1 + i * 0.12)}
                >
                  <span className="philosophy-b__stage-icon">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className="philosophy-b__stage-label">{stage.label}</span>
                </motion.div>

                {!isLast && (
                  <motion.span
                    className="philosophy-b__connector"
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.22 + i * 0.12, duration: 0.4, ease: [0.16, 0.8, 0.3, 1] }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PhilosophyB
