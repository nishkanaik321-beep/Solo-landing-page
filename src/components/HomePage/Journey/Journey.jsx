import './Journey.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { journeyStages } from '../../../data/content.js'

export default function Journey() {
  const [active, setActive] = useState(0)
  const [isLight, setIsLight] = useState(true
  )
  const progressPct = ((active + 1) / journeyStages.length) * 100
  const stage = journeyStages[active]

  return (
    <section className={`section journey ${isLight ? 'journey--light' : 'journey--dark'}`}>
      <div className="container">
        <div className="journey__head-row">
          <motion.div
            className="journey__head"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <span className={`eyebrow journey__eyebrow ${isLight ? '' : 'eyebrow--on-night'}`}>The learner journey</span>
            <h2>Six stages. One continuous path.</h2>
            <p>Every learner moves through the same journey — at their own pace. Tap a stage to see what happens there.</p>
          </motion.div>

          <button
            type="button"
            className="journey__theme-toggle"
            role="switch"
            aria-checked={isLight}
            aria-label={`Switch journey section to ${isLight ? 'dark' : 'light'} theme`}
            onClick={() => setIsLight((v) => !v)}
          >
            <span className="journey__theme-icon journey__theme-icon--moon"><Moon size={13} /></span>
            <span className="journey__theme-icon journey__theme-icon--sun"><Sun size={13} /></span>
            <motion.span
              className="journey__theme-knob"
              animate={{ x: isLight ? 26 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {isLight ? <Sun size={13} /> : <Moon size={13} />}
            </motion.span>
          </button>
        </div>

        <motion.div
          className="journey__stepper"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <div className="journey__track">
            <div className="journey__track-bg" />
            <motion.div
              className="journey__track-fill"
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
            />
          </div>

          <div className="journey__nodes">
            {journeyStages.map((s, i) => (
              <button
                key={s.title}
                className={`journey__node ${i === active ? 'journey__node--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="journey__dot">{String(i + 1).padStart(2, '0')}</span>
                <span className="journey__label">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="journey__detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.16, 0.8, 0.3, 1] }}
              >
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
                <ul>
                  {stage.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
