import { useState } from 'react'
import './SkillsD.css'
import { motion } from 'framer-motion'
import { Target, CircleCheckBig } from 'lucide-react'
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle.jsx'

const SKILL_TAGS = [
  'All',
  'SQL',
  'Figma',
  'Prompt Engineering',
  'Data Storytelling',
  'React',
  'Public Speaking',
  'Project Scoping',
  'Python',
  'Stakeholder Buy-in',
  'A/B Testing',
  'Copywriting',
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function SkillsD() {
  const [activeTag, setActiveTag] = useState('All')
   const [isLight, setIsLight] = useState(true)

  return (
    <section className={`skills ${isLight ? 'skills--light' : 'skills--dark'}`}>
      <div className="container">
        <div className="skills__head-row">
          <motion.div
            className="skills__head"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <span className={`eyebrow skills__eyebrow ${isLight ? '' : 'eyebrow--on-night'}`}>
              YOUR SKILLS, YOUR PATH
            </span>
            <h2 className="skills__title">
              Discover the skills
              <br />
              behind your dream job.
            </h2>
          </motion.div>

          <ThemeToggle
            isLight={isLight}
            onToggle={() => setIsLight((v) => !v)}
            sectionLabel="skills section"
          />
        </div>

        <div className="skills__grid">
          <motion.div
            className="skills__card skills__card--main"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp(0.16)}
          >
            <h3 className="skills__card-heading">
              See what's actually worth learning right now.
            </h3>
            <p className="skills__card-text">
              SOLO tracks demand signals across thousands of postings so
              pathways stay tied to real opportunity — not guesswork.
            </p>

            <div className="skills__tags">
              {SKILL_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`skills__tag ${
                    tag === activeTag ? 'skills__tag--active' : ''
                  }`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="skills__side">
            <motion.div
              className="skills__card skills__card--small"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp(0.24)}
            >
              <span className="skills__icon" style={{ color: 'var(--orange)' }}>
                <Target size={20} strokeWidth={2} />
              </span>
              <h4 className="skills__card-title">Discover skills for a role</h4>
              <p className="skills__card-text">
                Pick any job title and see the exact skill breakdown behind it.
              </p>
            </motion.div>

            <motion.div
              className="skills__card skills__card--small"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp(0.32)}
            >
              <span className="skills__icon" style={{ color: 'var(--blue)' }}>
                <CircleCheckBig size={20} strokeWidth={2} />
              </span>
              <h4 className="skills__card-title">Rate your starting point</h4>
              <p className="skills__card-text">
                A quick self-check maps what you already know onto a pathway.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsD
