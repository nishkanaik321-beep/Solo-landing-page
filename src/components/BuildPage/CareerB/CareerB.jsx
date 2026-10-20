import './CareerB.css'
import { motion } from 'framer-motion'
import { FolderGit2, Sparkles, BadgeCheck, UserCircle2, FileText, Compass } from 'lucide-react'

const CHAIN = [
  { label: 'Project', sub: '"AI Automation"', icon: FolderGit2 },
  { label: 'Skills', sub: 'Python · Automation · APIs', icon: Sparkles },
  { label: 'Credential', sub: 'Verified', icon: BadgeCheck },
  { label: 'Profile', sub: 'Project added', icon: UserCircle2 },
  { label: 'Resume', sub: 'Experience included', icon: FileText },
  { label: 'Opportunity', sub: 'Relevant roles discovered', icon: Compass },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function CareerB() {
  return (
    <section className="career-b">
      <div className="container">
        <div className="career-b__head">
          <motion.p
            className="eyebrow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp(0)}
          >
            BUILD &rarr; CAREER
          </motion.p>
          <motion.h2
            className="career-b__title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.06)}
          >
            Build something.
            <br />
            <span className="career-b__title-accent">Then make it count.</span>
          </motion.h2>
          <motion.p
            className="career-b__subtitle"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp(0.12)}
          >
            The work doesn&rsquo;t end when the project ends. It contributes
            to your professional profile, your verified credentials, your
            resume, and the opportunities SOLO surfaces for you next.
          </motion.p>
        </div>

        <div className="career-b__chain">
          {CHAIN.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                className="career-b__link"
                key={item.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp(0.08 + i * 0.08)}
              >
                <span className="career-b__link-icon">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div className="career-b__link-text">
                  <span className="career-b__link-label">{item.label}</span>
                  <span className="career-b__link-sub">{item.sub}</span>
                </div>
                {i < CHAIN.length - 1 && <span className="career-b__link-track" aria-hidden="true" />}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CareerB
