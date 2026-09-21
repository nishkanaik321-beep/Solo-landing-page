import './WalletS.css'
import { motion } from 'framer-motion'
import { Search, Download, Share2, Lock, FileBadge2, BadgeCheck } from 'lucide-react'

const TOOLBAR_ACTIONS = [
  {
    icon: Search,
    title: 'Search & filter',
    desc: 'Find any credential by type, issuer, or name across everything you\u2019ve earned.',
  },
  {
    icon: Download,
    title: 'Download it',
    desc: 'Save a credential as a file whenever you need it offline \u2014 for an application, a print-out, anywhere.',
  },
  {
    icon: Share2,
    title: 'Share it',
    desc: 'Generate a verifiable link, or export straight to LinkedIn in one tap.',
  },
  {
    icon: Lock,
    title: 'Control privacy',
    desc: 'Decide what\u2019s public, what\u2019s link-only, and what stays private to you.',
  },
]

const CARD_DETAILS = [
  { icon: BadgeCheck, text: 'Verified or Self-Issued status, so anyone viewing it knows how it was checked' },
  { icon: FileBadge2, text: 'The skills it covers, and whether it follows the Open Badges standard' },
  { icon: Search, text: 'Issue and expiry dates, so a credential\u2019s validity is never a guessing game' },
]

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.16, 0.8, 0.3, 1] } },
})

function WalletS() {
  return (
    <section className="wallet-s" id="wallet">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeIn(0)}
        >
          THE CREDENTIAL WALLET
        </motion.p>
        <motion.h2
          className="wallet-s__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn(0.06)}
        >
          One place for everything you've earned.
        </motion.h2>
        <motion.p
          className="wallet-s__subtitle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn(0.12)}
        >
          Every credential you earn lands here automatically. No separate
          logins, no chasing down a certificate you lost.
        </motion.p>

        <div className="wallet-s__row">
          <motion.div
            className="wallet-s__shot"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <img
              src="/images/showcase/wallet-toolbar.png"
              alt="Credential Wallet toolbar with Search, Issue CLR, Download, Share and Change Privacy actions"
              loading="lazy"
            />
          </motion.div>

          <div className="wallet-s__copy">
            <h3>Manage it your way</h3>
            <ul className="wallet-s__list">
              {TOOLBAR_ACTIONS.map((action, i) => {
                const Icon = action.icon
                return (
                  <motion.li
                    key={action.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeIn(0.1 + i * 0.07)}
                  >
                    <span className="wallet-s__list-icon">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <div>
                      <h4>{action.title}</h4>
                      <p>{action.desc}</p>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="wallet-s__row wallet-s__row--reverse">
          <div className="wallet-s__copy">
            <h3>What's on each credential</h3>
            <ul className="wallet-s__list">
              {CARD_DETAILS.map((detail, i) => {
                const Icon = detail.icon
                return (
                  <motion.li
                    key={detail.text}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeIn(0.1 + i * 0.08)}
                  >
                    <span className="wallet-s__list-icon">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <p>{detail.text}</p>
                  </motion.li>
                )
              })}
            </ul>
            <p className="wallet-s__note">
              Tap <strong>View Credential</strong> on any card and it opens
              the full record, evidence links included.
            </p>
          </div>

          <motion.div
            className="wallet-s__shot wallet-s__shot--card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <img
              src="/images/showcase/wallet-card.png"
              alt="A single credential card showing Verified status, skills, issue and expiry dates"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WalletS
