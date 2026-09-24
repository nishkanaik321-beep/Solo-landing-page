import './ProjectSpotlight.css'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function ProjectSpotlight() {
  return (
    <section id="skills-to-experience" className="section section--tight project-spotlight">
      <div className="container project-spotlight__grid">
        <motion.div
          className="project-spotlight__copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <span className="eyebrow">From skills to building</span>
          <h2>Put what you know into action.</h2>
          <p>
            Go beyond learning by applying your skills to real projects and challenges. Create
            meaningful work that gives your skills context, credibility, and real-world value.
          </p>
          <ul className="project-spotlight__points">
            <li><CheckCircle2 size={15} /> Real briefs from partner organizations</li>
            <li><CheckCircle2 size={15} /> Reviewed and approved by industry mentors</li>
            <li><CheckCircle2 size={15} /> Counts toward your verified Credential Wallet</li>
          </ul>
          <a href="/build#live-projects" className="btn btn-primary">Explore more</a>
        </motion.div>

        <motion.div
          className="project-spotlight__stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 0.8, 0.3, 1] }}
          whileHover="hover"
        >
          <motion.div
            className="project-spotlight__ghost project-spotlight__ghost--1"
            variants={{ hover: { x: -14, y: -10, rotate: -6 } }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          />
          <motion.div
            className="project-spotlight__ghost project-spotlight__ghost--2"
            variants={{ hover: { x: 14, y: -6, rotate: 6 } }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          />
          <motion.div
            className="project-spotlight__shot"
            variants={{ hover: { y: -8 } }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <img
              src="/images/project-spotlight/solo-landing-project.png"
              alt="SOLO Learner Landing Page live project by SPARK+ — 6 skills, virtual, 500 hours, free, approved"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
