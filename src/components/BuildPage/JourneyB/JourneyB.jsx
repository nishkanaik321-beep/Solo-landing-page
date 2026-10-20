import './JourneyB.css'
import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Choose a challenge',
    description: 'Browse or get recommended a live project, hackathon, or team build that fits your skills.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Work through the brief under real constraints — timelines, teammates, and an actual context.',
  },
  {
    number: '03',
    title: 'Submit your work',
    description: 'Request completion and submit evidence of what you built — the work itself, plus a short summary.',
  },
  {
    number: '04',
    title: 'Get reviewed',
    description: "Your evidence is assessed against the challenge's own criteria — not just whether you showed up.",
  },
  {
    number: '05',
    title: 'Iterate',
    description: 'If something needs work, you revise and resubmit. Not every build clears review on the first pass.',
  },
  {
    number: '06',
    title: 'Earn your credential',
    description: 'Once approved, a verified badge or certificate is issued straight to your Credential Wallet.',
  },
  {
    number: '07',
    title: 'Showcase it',
    description: 'Share the credential on your profile, on LinkedIn, or anywhere you need to prove what you can do.',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.5, ease: [0.16, 0.8, 0.3, 1] } },
})

function JourneyB() {
  return (
    <section className="journey-b" id="journey">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp(0)}
        >
          THE BUILD JOURNEY
        </motion.p>
        <motion.h2
          className="journey-b__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0.06)}
        >
          From brief to verified proof.
        </motion.h2>

        <div className="journey-b__list">
          <span className="journey-b__spine" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <motion.div
              className="journey-b__row"
              key={step.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp(0.04 * i)}
            >
              <span className="journey-b__node">{step.number}</span>
              <div className="journey-b__row-body">
                <h3 className="journey-b__row-title">{step.title}</h3>
                <p className="journey-b__row-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneyB
