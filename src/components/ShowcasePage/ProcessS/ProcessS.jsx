import './ProcessS.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CircleCheckBig, UserCheck, FileBadge2, Wallet } from 'lucide-react'
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle.jsx'

const STEPS = [
  {
    number: '01',
    title: 'Complete the work',
    description: 'Finish the course, pathway, internship, or project brief.',
    icon: CircleCheckBig,
  },
  {
    number: '02',
    title: 'Get verified',
    description: 'A mentor, institution, or partner signs off that it holds up.',
    icon: UserCheck,
  },
  {
    number: '03',
    title: 'Credential issued',
    description: 'A cryptographically signed Open Badge or CLR is generated.',
    icon: FileBadge2,
  },
  {
    number: '04',
    title: 'Lands in your wallet',
    description: 'It appears in your Credential Wallet, ready to share.',
    icon: Wallet,
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function ProcessS() {
  const [isLight, setIsLight] = useState(false)

  return (
    <section className={`process ${isLight ? 'process--light' : 'process--dark'}`}>
      <div className="container">
        <div className="process__head-row">
          <motion.div
            className="process__head"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <span className={`eyebrow process__eyebrow ${isLight ? '' : 'eyebrow--on-night'}`}>
              FROM COMPLETION TO CREDENTIAL
            </span>
            <h2>Nothing is issued by hand.</h2>
            <p>The same four-step pipeline runs behind every credential, no matter where it came from.</p>
          </motion.div>

          <ThemeToggle
            isLight={isLight}
            onToggle={() => setIsLight((v) => !v)}
            sectionLabel="process section"
          />
        </div>

        <div className="process__track">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                className="process__step"
                key={step.number}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp(0.1 + i * 0.1)}
              >
                <div className="process__step-top">
                  <span className="process__step-icon">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className="process__step-number">{step.number}</span>
                </div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
                {i < STEPS.length - 1 && <span className="process__connector" aria-hidden="true" />}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessS
