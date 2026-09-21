import './ProcessS.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Compass,
  ListChecks,
  Send,
  ShieldCheck,
  FileBadge2,
} from 'lucide-react'
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle.jsx'

const STEPS = [
  {
    number: '01',
    title: 'Enroll in the opportunity',
    icon: Compass,
    description:
      'Browse or get recommended a course, internship, live project, or hackathon, then click Enroll to join it.',
  },
  {
    number: '02',
    title: 'Complete the requirements',
    icon: ListChecks,
    description: 'What "complete" means depends on where the work happens:',
    bullets: [
      'SOLO-hosted courses \u2014 finish every module, assignment, quiz, and assessment inside the course.',
      'External courses (ScholarHat, IBM, etc.) \u2014 complete the same requirements on the external platform, using the same email registered on SOLO.',
      'Hackathons & live projects \u2014 complete the challenges, deliverables, or milestones the organizer set.',
    ],
  },
  {
    number: '03',
    title: 'Request completion',
    icon: Send,
    description:
      'Back on SOLO, go to Manage \u203a Enrollments, select the opportunity, click More, then Request Completion \u2014 and submit your evidence: a certificate, a badge, or a short summary of what you did.',
  },
  {
    number: '04',
    title: 'Your submission gets assessed',
    icon: ShieldCheck,
    description:
      'SOLO \u2014 or, for institution-run opportunities, your institution \u2014 reviews the evidence. Challenges, hackathons, and live projects are checked against the challenge\u2019s own assessment criteria. If anything\u2019s missing, you\u2019ll be asked to resubmit.',
  },
  {
    number: '05',
    title: 'Credential issued',
    icon: FileBadge2,
    description:
      'Once your completion is approved, SOLO issues your verified badge or certificate, and it appears straight in your Credential Wallet under Dashboard \u203a Manage \u203a Credential Wallet.',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function ProcessS() {
  const [isLight, setIsLight] = useState(true
  )

  return (
    <section id="process" className={`process ${isLight ? 'process--light' : 'process--dark'}`}>
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
              HOW YOU RECEIVE CREDENTIALS
            </span>
            <h2>Nothing is issued by hand.</h2>
            <p>
              Every credential on SOLO \u2014 a badge or a certificate \u2014 comes out of the same
              verifiable pipeline: enroll, complete, get assessed, get issued.
            </p>
          </motion.div>

          <ThemeToggle
            isLight={isLight}
            onToggle={() => setIsLight((v) => !v)}
            sectionLabel="process section"
          />
        </div>

        <div className="process__body">
          <div className="process__steps">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  className="process__step"
                  key={step.number}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp(0.08 + i * 0.08)}
                >
                  <div className="process__step-rail">
                    <span className="process__step-icon">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    {i < STEPS.length - 1 && <span className="process__connector" aria-hidden="true" />}
                  </div>

                  <div className="process__step-body">
                    <div className="process__step-top">
                      <span className="process__step-number">{step.number}</span>
                      <h3 className="process__step-title">{step.title}</h3>
                    </div>
                    <p className="process__step-desc">{step.description}</p>

                    {step.bullets && (
                      <ul className="process__step-bullets">
                        {step.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    {step.reference && (
                      <span className="process__ref-tag">See reference screenshot \u2192</span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.aside
            className="process__reference"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <div className="process__reference-shot">
              <img
                src="/images/showcase/request-completion-menu.png"
                alt="The More menu on an enrolled opportunity in SOLO, showing Review, Take Course, and Request Completion options"
                loading="lazy"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default ProcessS
