import './LiveProjectsB.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Layers, BarChart3, Smartphone, ShieldCheck, TrendingUp, Clock, UserCheck } from 'lucide-react'
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle.jsx'

const PROJECTS = [
  {
    title: 'E-commerce Storefront Redesign',
    org: 'Hilite Technologies',
    domain: 'Design & Frontend',
    icon: Layers,
    accent: 'var(--blue)',
    duration: '3\u20134 weeks',
    checkins: '2 mentor check-ins',
    status: 'Open',
    tagClass: 'tag--success',
  },
  {
    title: 'NGO Impact Dashboard',
    org: 'SPARK+',
    domain: 'Data & Analytics',
    icon: BarChart3,
    accent: 'var(--orange)',
    duration: '3 weeks',
    checkins: '2 mentor check-ins',
    status: 'Open',
    tagClass: 'tag--success',
  },
  {
    title: 'Campus Event Booking App',
    org: 'OPSPL',
    domain: 'Mobile Development',
    icon: Smartphone,
    accent: 'var(--success)',
    duration: '4 weeks',
    checkins: '3 mentor check-ins',
    status: 'Open',
    tagClass: 'tag--success',
  },
  {
    title: 'Brand Refresh for a D2C Startup',
    org: 'SPARK+',
    domain: 'Design & Marketing',
    icon: TrendingUp,
    accent: 'var(--gold)',
    duration: '2 weeks',
    checkins: '2 mentor check-ins',
    status: 'Closing soon',
    tagClass: 'tag--pending',
  },
  {
    title: 'Automated QA Test Suite',
    org: 'OPSPL',
    domain: 'Quality Assurance',
    icon: ShieldCheck,
    accent: 'var(--blue)',
    duration: '3 weeks',
    checkins: '2 mentor check-ins',
    status: 'Open',
    tagClass: 'tag--success',
  },
  {
    title: 'Social Media Growth Sprint',
    org: 'ScholarHat',
    domain: 'Marketing',
    icon: TrendingUp,
    accent: 'var(--orange)',
    duration: '2 weeks',
    checkins: '1 mentor check-in',
    status: 'In review',
    tagClass: 'tag--muted',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function LiveProjectsB() {
  const [isLight, setIsLight] = useState(true)

  return (
    <section
      className={`live-projects ${isLight ? 'live-projects--light' : 'live-projects--dark'}`}
      id="live-projects"
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
            const Icon = project.icon
            return (
              <motion.div
                className="project-card"
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp(0.1 + (i % 3) * 0.06)}
              >
                <div className="project-card__body">
                  <span className="project-card__icon" style={{ color: project.accent }}>
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className={`tag ${project.tagClass} project-card__status`}>
                    {project.status}
                  </span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <span className="project-card__org">{project.org} &middot; {project.domain}</span>

                  <div className="project-card__meta">
                    <span>
                      <Clock size={13} />
                      {project.duration}
                    </span>
                    <span>
                      <UserCheck size={13} />
                      {project.checkins}
                    </span>
                  </div>
                </div>
                <div className="project-card__footer">
                  <button
                    type="button"
                    className={`btn btn-sm btn-block ${isLight ? 'btn-outline' : 'btn-outline-night'}`}
                  >
                    View brief
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LiveProjectsB
