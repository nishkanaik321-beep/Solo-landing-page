import './LiveProjectsB.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle.jsx'

const PROJECTS = [
  {
    title: 'AI Automation',
    image: '/images/local-screenshots/AI%20Automation.png',
  },
  {
    title: 'AITD Buildathon Challenge',
    image: '/images/local-screenshots/AITD%20Builadathon%20challenge.png',
  },
  {
    title: 'Career Navigator',
    image: '/images/local-screenshots/Career%20Navigator.png',
  },
  {
    title: 'Public Transit Web App',
    image: '/images/local-screenshots/Public%20transit%20webapp.png',
  },
  {
    title: 'Test Web App',
    image: '/images/local-screenshots/Test%20Web%20App.png',
  },
  {
    title: 'Website Redesign',
    image: '/images/local-screenshots/Website%20Redesign.png',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function LiveProjectsB() {
  const [isLight, setIsLight] = useState(true)

  return (
    <section id="live-projects"
      className={`live-projects ${isLight ? 'live-projects--light' : 'live-projects--dark'}`}
    >
      <div className="container">
        <div className="live-projects__head-row">
          <div>
            <motion.p
              className={`eyebrow ${isLight ? '' : 'eyebrow--on-night'}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp(0)}
            >
              LIVE PROJECTS
            </motion.p>
            <motion.h2
              className="live-projects__title"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp(0.06)}
            >
              Real briefs. Real mentors.
              <br />
              Real deadlines.
            </motion.h2>
            <motion.p
              className="live-projects__subtitle"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp(0.12)}
            >
              Each brief comes from an actual partner organization. A mentor
              checks in at set milestones, not just at the end.
            </motion.p>
          </div>

          <ThemeToggle
            isLight={isLight}
            onToggle={() => setIsLight((v) => !v)}
            sectionLabel="live projects section"
          />
        </div>

        <div className="live-projects__grid">
          {PROJECTS.map((project, i) => {
            return (
              <motion.div
                className="project-card"
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp(0.1 + (i % 3) * 0.06)}
              >
                <img className="project-card__image" src={project.image} alt={project.title} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LiveProjectsB
