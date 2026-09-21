import './ReviewB.css'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

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

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function ReviewB() {
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
          You never submit into a void.
        </motion.h2>
        <motion.p
          className="review-b__subtitle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp(0.12)}
        >
          Every build gets a real response from a mentor — not just a
          completion checkmark.
        </motion.p>

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
