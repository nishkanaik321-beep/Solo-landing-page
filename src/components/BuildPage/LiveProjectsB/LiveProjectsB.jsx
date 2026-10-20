import './LiveProjectsB.css'
import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Wallet2, ArrowRight } from 'lucide-react'
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle.jsx'

// Same project set as the live marketplace — metadata pulled from the
// existing project listings, not invented.
const PROJECTS = [
  {
    title: 'AI Automation',
    org: 'Agnel Institute of Engineering and Management',
    image: '/images/local-screenshots/AI%20Automation.png',
    category: 'AI',
    skills: 8,
    mode: 'Hybrid',
    hours: '24 Hours',
    cost: 'Free',
    posted: 'Posted 4 Months Ago',
  },
  {
    title: 'AITD Buildathon Challenge',
    org: 'SOLO',
    image: '/images/local-screenshots/AITD%20Builadathon%20challenge.png',
    category: 'Open to All',
    skills: 8,
    mode: 'Onsite',
    hours: '200 Hours',
    cost: 'Free',
    posted: 'Posted 6 Months Ago',
  },
  {
    title: 'Career Navigator',
    org: 'SPARK+',
    image: '/images/local-screenshots/Career%20Navigator.png',
    category: 'Product',
    skills: 8,
    mode: 'Virtual',
    hours: '500 Hours',
    cost: 'Free',
    posted: 'Posted A Month Ago',
  },
  {
    title: 'Public Transit Webapp',
    org: 'Political Computer Science at ASU',
    image: '/images/local-screenshots/Public%20transit%20webapp.png',
    category: 'Web',
    skills: 4,
    mode: 'Hybrid',
    hours: '20 Hours',
    cost: 'Free',
    posted: 'Posted 5 Months Ago',
  },
  {
    title: 'Test A Web Application',
    org: 'IBM SkillsBuild',
    image: '/images/local-screenshots/Test%20Web%20App.png',
    category: 'Web',
    skills: 9,
    mode: 'Virtual',
    hours: '3 Hours',
    cost: 'Free',
    posted: 'Posted A Month Ago',
  },
  {
    title: 'Website Redesign & Hugo Deployment',
    org: 'SPARK+',
    image: '/images/local-screenshots/Website%20Redesign.png',
    category: 'Web',
    skills: 6,
    mode: 'Virtual',
    hours: '40 Hours',
    cost: 'Free',
    posted: 'Posted 3 Months Ago',
  },
]

const FILTERS = ['All', 'AI', 'Web', 'Data', 'Product', 'Open to All']

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function LiveProjectsB() {
  const [isLight, setIsLight] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return (
    <section
      id="live-projects"
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
              Real problems. Real constraints.
            </motion.h2>
            <motion.p
              className="live-projects__subtitle"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp(0.12)}
            >
              Pick something worth building. Each brief comes from an actual
              partner organization, with a mentor checking in at set
              milestones — not just at the end.
            </motion.p>
          </div>

          <ThemeToggle
            isLight={isLight}
            onToggle={() => setIsLight((v) => !v)}
            sectionLabel="live projects section"
          />
        </div>

        <motion.div
          className="live-projects__filters"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUp(0.14)}
          role="tablist"
          aria-label="Filter live projects by category"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`live-projects__chip ${activeFilter === filter ? 'live-projects__chip--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div className="live-projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <motion.a
                href="#"
                className="project-card"
                key={project.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: 0.05 + (i % 3) * 0.06, duration: 0.4, ease: [0.16, 0.8, 0.3, 1] }}
              >
                <div className="project-card__media">
                  <img className="project-card__image" src={project.image} alt={project.title} />
                  <span className="project-card__cost">{project.cost}</span>
                </div>

                <div className="project-card__body">
                  <div className="project-card__heading">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__org">{project.org}</p>
                  </div>

                  <div className="project-card__tags">
                    <span className="project-card__tag">{project.skills} Skills</span>
                    <span className="project-card__tag project-card__tag--accent">Live Project</span>
                    <span className="project-card__tag project-card__tag--faint">{project.posted}</span>
                  </div>

                  <div className="project-card__meta">
                    <span className="project-card__meta-item">
                      <MapPin size={13} strokeWidth={2} /> {project.mode}
                    </span>
                    <span className="project-card__meta-item">
                      <Clock size={13} strokeWidth={2} /> {project.hours}
                    </span>
                    <span className="project-card__meta-item">
                      <Wallet2 size={13} strokeWidth={2} /> {project.cost}
                    </span>
                  </div>

                  <span className="project-card__cta">
                    View more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <p className="live-projects__empty">No live projects in this category right now.</p>
        )}
      </div>
    </section>
  )
}

export default LiveProjectsB
