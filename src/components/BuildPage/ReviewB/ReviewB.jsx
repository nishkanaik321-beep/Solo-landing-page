import './ReviewB.css'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Check, ArrowRight, BadgeCheck } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    title: 'Submit your work',
    description:
      'Upload the project, a short write-up, and whatever process notes you think matter.',
  },
  {
    number: '02',
    title: 'Get reviewed',
    description:
      'A mentor checks it against real standards, not just \u201cdid you finish.\u201d',
  },
  {
    number: '03',
    title: 'Iterate & resubmit',
    description:
      "Fix what needs fixing. Once it holds up, it's ready to become proof.",
  },
]

const CHECKLIST = [
  { label: 'Problem understanding', done: true },
  { label: 'Technical execution', done: true },
  { label: 'Documentation', done: false },
  { label: 'Real-world applicability', done: false },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function ReviewB() {
  const [approved, setApproved] = useState(false)

  // Gentle, self-contained loop between the two review states —
  // illustrative, not tied to any live data.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    const id = setInterval(() => setApproved((v) => !v), 3400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="review-b">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp(0)}
        >
          MENTOR REVIEW
        </motion.p>
        <motion.h2
          className="review-b__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0.06)}
        >
          You don&rsquo;t submit into a void.
        </motion.h2>
        <motion.p
          className="review-b__subtitle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp(0.12)}
        >
          Build. Submit. Get feedback. Improve. Submit again — every build
          gets a real response from a mentor, not just a completion checkmark.
        </motion.p>

        <div className="review-b__body">
          <div className="review-b__steps">
            {STEPS.map((step, i) => (
              <motion.div
                className="step-card"
                key={step.number}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp(0.18 + i * 0.08)}
              >
                <span className="step-card__number">{step.number}</span>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={`review-b__mock ${approved ? 'review-b__mock--approved' : ''}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.3)}
          >
            <div className="review-b__mock-head">
              <span>Project review</span>
              <span className="review-b__mock-tag">Example</span>
            </div>

            <ul className="review-b__mock-list">
              {CHECKLIST.map((item) => (
                <li key={item.label} className="review-b__mock-item">
                  <span className="review-b__mock-item-label">{item.label}</span>
                  <span
                    className={`review-b__mock-item-status ${
                      approved || item.done ? 'review-b__mock-item-status--done' : ''
                    }`}
                  >
                    {approved || item.done ? <Check size={14} strokeWidth={2.4} /> : <ArrowRight size={13} strokeWidth={2.2} />}
                  </span>
                </li>
              ))}
            </ul>

            <AnimatePresence mode="wait">
              {!approved ? (
                <motion.div
                  key="pending"
                  className="review-b__mock-footer review-b__mock-footer--pending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Needs another iteration
                </motion.div>
              ) : (
                <motion.div
                  key="approved"
                  className="review-b__mock-footer review-b__mock-footer--approved"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BadgeCheck size={15} strokeWidth={2.2} />
                  Approved &middot; Credential eligible
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="review-b__credential"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp(0.42)}
        >
          <span className="review-b__credential-icon">
            <Award size={18} strokeWidth={2} />
          </span>
          <p>
            Once a build passes review, a verified credential lands on your
            profile. How that credential gets showcased is covered next.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewB
