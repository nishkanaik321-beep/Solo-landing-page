import './EvidenceB.css'
import { motion } from 'framer-motion'
import { FolderGit2, FileCheck2, ShieldCheck, Award, UserCircle2, ArrowRight, BadgeCheck } from 'lucide-react'

const FLOW = [
  { label: 'Project', icon: FolderGit2 },
  { label: 'Evidence', icon: FileCheck2 },
  { label: 'Assessment', icon: ShieldCheck },
  { label: 'Verified credential', icon: Award },
  { label: 'Profile', icon: UserCircle2 },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function EvidenceB() {
  return (
    <section className="evidence-b">
      <div className="container">
        <div className="evidence-b__head">
          <motion.p
            className="eyebrow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp(0)}
          >
            EVIDENCE &rarr; CREDENTIAL
          </motion.p>
          <motion.h2
            className="evidence-b__title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp(0.06)}
          >
            Your work becomes digital proof.
          </motion.h2>
          <motion.p
            className="evidence-b__subtitle"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp(0.12)}
          >
            A learner doesn&rsquo;t just finish a project. You submit evidence
            of what you built, it gets reviewed, and once approved a verified
            credential appears in your Credential Wallet and on your profile.
          </motion.p>
        </div>

        <div className="evidence-b__flow">
          {FLOW.map((stage, i) => {
            const Icon = stage.icon
            const isLast = i === FLOW.length - 1
            return (
              <div className="evidence-b__flow-item" key={stage.label}>
                <motion.div
                  className="evidence-b__flow-node"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp(0.1 + i * 0.1)}
                >
                  <span className="evidence-b__flow-icon">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className="evidence-b__flow-label">{stage.label}</span>
                </motion.div>
                {!isLast && (
                  <ArrowRight className="evidence-b__flow-arrow" size={16} aria-hidden="true" />
                )}
              </div>
            )
          })}
        </div>

        <motion.div
          className="evidence-b__card"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <div className="evidence-b__card-top">
            <span className="evidence-b__card-badge">
              <Award size={26} strokeWidth={1.8} />
            </span>
            <div>
              <div className="evidence-b__card-status">
                <BadgeCheck size={13} strokeWidth={2.2} />
                Verified credential
              </div>
              <h3 className="evidence-b__card-title">ReactJS &mdash; Project Build</h3>
              <p className="evidence-b__card-issuer">Issued by SOLO Network</p>
            </div>
          </div>

          <div className="evidence-b__card-skills">
            <span className="evidence-b__card-skill">React Hooks</span>
            <span className="evidence-b__card-skill">Component Architecture</span>
            <span className="evidence-b__card-skill">API Integration</span>
            <span className="evidence-b__card-skill">Routing</span>
          </div>

          <div className="evidence-b__card-footer">
            <span>Lands in your Credential Wallet</span>
            <ArrowRight size={14} />
            <span>Shows up on your profile</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EvidenceB
