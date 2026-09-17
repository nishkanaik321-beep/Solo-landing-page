import './DiscoverPath.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, Target, Layers, Briefcase, UserCircle, TrendingUp, ArrowUpRight } from 'lucide-react'
import { discoverPathCards } from '../../../data/content.js'

const iconMap = {
  compass: Compass,
  target: Target,
  layers: Layers,
  briefcase: Briefcase,
  'user-circle': UserCircle,
  'trending-up': TrendingUp,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 0.8, 0.3, 1] } },
}

export default function DiscoverPath() {
  return (
    <section id="discover-path" className="section section--tight discover-path">
      <div className="container">
        <motion.div
          className="discover-path__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <span className="eyebrow">Discover your path</span>
          <h2>A platform that keeps up with you.</h2>
          <p>
            AI-based recommendations help you find the right courses, live projects, and career
            pathways — matched to your real skills and interests, not a generic catalog. One
            profile powers every part of the journey below.
          </p>
        </motion.div>

        <motion.div
          className="discover-path__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {discoverPathCards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.div
                className={`discover-path__card ${i % 2 === 1 ? 'discover-path__card--tint' : ''}`}
                key={card.title}
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              >
                <div className="discover-path__card-top">
                  <Icon size={22} strokeWidth={1.8} className="discover-path__icon" />
                  <ArrowUpRight size={16} className="discover-path__arrow" />
                </div>
                <span className="discover-path__title">{card.title}</span>
                <p className="discover-path__desc">{card.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="discover-path__foot"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <p>Every recommendation gets sharper the more your profile grows — start building yours today.</p>
          <Link to="/signin" className="btn btn-ghost btn-sm">
            Build your profile
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
