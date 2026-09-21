import './OpportunitySection.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Carousel from '../Carousel/Carousel.jsx'
import EntryCard from '../EntryCard/EntryCard.jsx'
import { opportunities } from '../../../data/content.js'

const matchFeatures = ['AI Job Matching', 'Multi-Source Search', 'Skills-Based Filter', 'Match Scoring']

export default function OpportunitySection() {
  return (
    <section className="section section--tight opportunity-section">
      <div className="container">
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

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <Carousel
            items={opportunities}
            // viewAllLabel="Explore more"
            renderItem={(opp, i, isCentered) => (
              <EntryCard
                org={opp.org}
                title={opp.title}
                skills={opp.skills}
                kind={opp.kind}
                posted={opp.posted}
                cost={opp.cost}
                featured={isCentered}
                image={opp.image}
                imageAlt={opp.title}
              />
            )}
          />
        </motion.div>
      </div>
    </section>
  )
}
