import './WhatIsSolo.css'
import { motion } from 'framer-motion'
import { Compass, ShieldCheck, TrendingUp, ArrowUpRight } from 'lucide-react'
import { whatIsSoloCards } from '../../../data/content.js'

const icons = [Compass, ShieldCheck, TrendingUp]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
}

export default function WhatIsSolo() {
  return (
    <section className="section what-is">
      <div className="container">
        <motion.div
          className="what-is__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <span className="eyebrow">What is SOLO</span>
          <h2>One place to learn, prove it, and get discovered.</h2>
          <p>
            SOLO turns scattered learning into a single skills profile — a living record of what
            you know, what you&rsquo;ve built, and where it can take you.
          </p>
        </motion.div>

        <motion.div
          className="what-is__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {whatIsSoloCards.map((card, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                className="what-is__card"
                key={card.title}
                style={{ background: card.bg }}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="what-is__card-top">
                  <span className="what-is__icon" style={{ background: card.accent }}>
                    <Icon size={18} color="#fff" strokeWidth={2.2} />
                  </span>
                  <ArrowUpRight size={18} className="what-is__corner" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
