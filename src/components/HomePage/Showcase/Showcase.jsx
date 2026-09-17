import './Showcase.css'
import { motion } from 'framer-motion'
import { ShieldCheck, Link2, TrendingUp } from 'lucide-react'
import { showcaseFeatures } from '../../../data/content.js'

const featureIcons = {
  'shield-check': ShieldCheck,
  link: Link2,
  'trending-up': TrendingUp,
}

const featureAccents = {
  'shield-check': { bg: '#FDE7E4', color: '#E8442A' },
  link: { bg: '#FBE3D2', color: '#D9720A' },
  'trending-up': { bg: '#E4EBFF', color: '#1255FF' },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 0.8, 0.3, 1] } },
}

export default function Showcase() {
  return (
    <section id="showcase" className="section showcase">
      <div className="container showcase__grid">
        <motion.div
          className="showcase__copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <span className="eyebrow">Showcase</span>
          <h2>How do you prove what you can do?</h2>
          <p className="showcase__lede">
            Every badge, project and credential you earn links back to real evidence — and lives
            in one shareable profile.
          </p>

          <motion.ul
            className="showcase__features"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {showcaseFeatures.map((f) => {
              const Icon = featureIcons[f.icon]
              const accent = featureAccents[f.icon]
              return (
                <motion.li key={f.title} variants={item}>
                  <span
                    className="showcase__feature-icon"
                    style={{ background: accent.bg, color: accent.color }}
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.div>

        <motion.div
          className="showcase__wallet-shot"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <img
            src="/images/showcase/credential-wallet.png"
            alt="SOLO Credential Wallet — search, filter, and manage verified badges and Open Badges credentials"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
