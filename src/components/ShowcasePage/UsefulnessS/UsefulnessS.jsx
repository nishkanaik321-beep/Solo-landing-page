import './UsefulnessS.css'
import { motion } from 'framer-motion'
import { ShieldCheck, Linkedin, Users, Target } from 'lucide-react'

const REASONS = [
  {
    icon: ShieldCheck,
    accent: 'var(--success)',
    title: 'It\u2019s actually verified',
    desc: 'Every credential is tamper-proof, anyone can check it real, not just take your word for it.',
  },
  {
    icon: Linkedin,
    accent: 'var(--blue)',
    title: 'Share it anywhere',
    desc: 'Export straight to LinkedIn, drop a verifiable link in a resume, or attach it to an application in one tap.',
  },
  {
    icon: Users,
    accent: 'var(--orange)',
    title: 'Get endorsed',
    desc: 'Ask a peer, faculty member, or mentor to endorse a credential.',
  },
  {
    icon: Target,
    accent: 'var(--gold)',
    title: 'Match it to jobs',
    desc: 'Compare your wallet against a real opening and see exactly which requirements you already meet.',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function UsefulnessS() {
  return (
    <section className="usefulness">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp(0)}
        >
          WHY IT'S WORTH HAVING
        </motion.p>
        <motion.h2
          className="usefulness__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0.06)}
        >
          A credential only matters if someone trusts it.
        </motion.h2>

        <div className="usefulness__grid">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                className="reason-card"
                key={reason.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp(0.12 + i * 0.08)}
              >
                <span className="reason-card__icon" style={{ color: reason.accent }}>
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="reason-card__title">{reason.title}</h3>
                <p className="reason-card__desc">{reason.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UsefulnessS
