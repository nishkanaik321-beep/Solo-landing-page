import './OpportunitySection.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2, CircleDashed, XCircle } from 'lucide-react'
import Carousel from '../../HomePage/Carousel/Carousel.jsx'
import EntryCard from '../../HomePage/EntryCard/EntryCard.jsx'
import { opportunities } from '../../../data/content.js'

const matchFeatures = ['AI Job Matching', 'Multi-Source Search', 'Skills-Based Filter', 'Match Scoring']

// Mirrors the Skill Match Analysis gauge from the SOLO Learner Guide —
// matched / partially matched / missing skills against a live role.
const skillMatchRows = [
  { icon: CheckCircle2, tone: 'match', label: 'Matched skills', detail: 'React, Git, REST APIs', pct: 62 },
  { icon: CircleDashed, tone: 'partial', label: 'Partially matched', detail: 'Node.js, Testing', pct: 24 },
  { icon: XCircle, tone: 'missing', label: 'Missing skills', detail: 'GraphQL, CI/CD', pct: 14 },
]

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
                src="/imagesall/skill-match.jpg"
                alt="Skill match analysis overview"
              />
            </div>
            <div className="skill-match-card__caption">
              <strong>62% match</strong>
              <span>Best-fit role</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
