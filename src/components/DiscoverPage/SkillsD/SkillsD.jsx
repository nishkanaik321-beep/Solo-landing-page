import { useState } from 'react'
import './SkillsD.css'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle.jsx'

const SKILL_OPTIONS = [
  {
    label: 'AI and Machine Learning',
    description: 'Learn how intelligent systems are built, trained, evaluated, and applied to real problems.',
    courses: '18',
    jobs: '24',
    internships: '12',
  },
  {
    label: 'Business and Management',
    description: 'Build the strategic, operational, and leadership skills needed to move organizations forward.',
    courses: '16',
    jobs: '22',
    internships: '14',
  },
  {
    label: 'Career Development and Soft Skills',
    description: 'Strengthen communication, collaboration, problem-solving, and the habits that support career growth.',
    courses: '12',
    jobs: '20',
    internships: '10',
  },
  {
    label: 'Data Science and Analytics',
    description: 'Turn data into useful decisions through analysis, visualization, statistics, and experimentation.',
    courses: '20',
    jobs: '28',
    internships: '16',
  },
  {
    label: 'Design and Creative Art',
    description: 'Develop visual thinking and creative practice across design, illustration, media, and user experience.',
    courses: '17',
    jobs: '23',
    internships: '15',
  },
  {
    label: 'Finance and Accounting',
    description: 'Understand financial systems, accounting principles, planning, and the numbers behind sound decisions.',
    courses: '14',
    jobs: '21',
    internships: '11',
  },
  {
    label: 'Health and Wellness',
    description: 'Explore knowledge and practical tools for supporting physical, mental, and community wellbeing.',
    courses: '10',
    jobs: '15',
    internships: '8',
  },
  {
    label: 'Language and Communication Skills',
    description: 'Improve how you express ideas, understand others, and communicate clearly across contexts.',
    courses: '13',
    jobs: '18',
    internships: '9',
  },
  {
    label: 'Marketing and Communication',
    description: 'Learn how to understand audiences, shape messages, and connect ideas with the people who need them.',
    courses: '15',
    jobs: '25',
    internships: '13',
  },
  {
    label: 'Science and Engineering',
    description: 'Use scientific reasoning and engineering methods to investigate questions and build practical solutions.',
    courses: '19',
    jobs: '26',
    internships: '17',
  },
  {
    label: 'Social Science and Humanities',
    description: 'Study people, culture, history, society, and the ideas that shape how the world works.',
    courses: '9',
    jobs: '14',
    internships: '7',
  },
  {
    label: 'Technology and Software Development',
    description: 'Build digital products and technical foundations through programming, systems, and software practice.',
    courses: '25',
    jobs: '30',
    internships: '22',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
})

function SkillsD() {
  const [activeTag, setActiveTag] = useState(SKILL_OPTIONS[0].label)
   const [isLight, setIsLight] = useState(true)
  const activeOption = SKILL_OPTIONS.find((option) => option.label === activeTag)

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
              {SKILL_OPTIONS.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  className={`skills__tag ${
                    option.label === activeTag ? 'skills__tag--active' : ''
                  }`}
                  onClick={() => {
                    setActiveTag(option.label)
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills__card skills__description"
            key={activeOption.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <span className="eyebrow skills__description-eyebrow">SELECTED PATH</span>
            <h4 className="skills__card-title">{activeOption.label}</h4>
            <p className="skills__card-text">{activeOption.description}</p>
            <div className="skills__stats" aria-label={`${activeOption.label} availability`}>
              <div className="skills__stat">
                <strong>{activeOption.courses}</strong>
                <span>Courses</span>
              </div>
              <div className="skills__stat">
                <strong>{activeOption.jobs}</strong>
                <span>Jobs</span>
              </div>
              <div className="skills__stat">
                <strong>{activeOption.internships}</strong>
                <span>Internships</span>
              </div>
            </div>
            <Link to="/signin" className="skills__apply">
              Apply
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SkillsD
