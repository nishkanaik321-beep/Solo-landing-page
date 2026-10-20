import './OpportunitySection.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const matchFeatures = ['Skill Match Analysis', 'Skills-Based Filter', 'Match Scoring']

export default function OpportunitySection() {
  return (
    <section className="section section--tight opportunity-section">
      <div className="container">
        <div className="opportunity-section__head-row">
          <motion.div
            className="opportunity-section__head"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <span className="eyebrow">Skills with purpose</span>
            <h2>Your skills should lead somewhere.</h2>
            <p>
              Connect what you learn to real roles, real opportunities, and your next move. Every
              listing carries an AI match score against your live profile, so you always know how
              ready you are — and exactly what to learn next to close the gap.
            </p>
            <ul className="opportunity-section__formats">
              {matchFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to="/build" className="btn btn-primary opportunity-section__cta">
              Explore Build
              <ArrowUpRight size={16} />
            </Link>
            <div className="opportunity-section__visual">
              <img
                src="/images/local-screenshots/opp-graphic-design.png"
                alt="Opportunity graphic design preview"
              />
            </div>
          </motion.div>

          <motion.div
            className="skill-match-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <span className="skill-match-card__eyebrow">Skill Match Analysis</span>
            <div className="skill-match-card__visual" aria-label="Skill match analysis preview">
              <img
                src="/image/skill-match.jpg"
                alt="Skill match analysis overview"
              />
            </div>
            <div className="skill-match-card__caption">
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
