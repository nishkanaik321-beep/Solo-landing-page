import './CourseSection.css'
import { motion } from 'framer-motion'
import Carousel from '../Carousel/Carousel.jsx'
import EntryCard from '../EntryCard/EntryCard.jsx'
import { courses } from '../../../data/content.js'

const learningFormats = ['Course Catalog', 'Live Projects', 'Career Pathways', 'Experiential Learning']

export default function CourseSection() {
  return (
    <section id="learn-purpose" className="section section--tight course-section">
      <div className="container">
        <motion.div
          className="course-section__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <span className="eyebrow">Learn with purpose</span>
          <h2>Turn learning into real skills.</h2>
          <p>
            Courses are the beginning. Access a comprehensive ecosystem spanning traditional
            courses, hands-on live projects, experiential learning, and structured career
            pathways — learn at your pace, practice with purpose, and keep your progress visible.
          </p>
          <ul className="course-section__formats">
            {learningFormats.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <Carousel
            items={courses}
            viewAllLabel="Explore more"
            renderItem={(course, i, isCentered) => (
              <EntryCard
                org={course.org}
                title={course.title}
                skills={course.skills}
                kind={course.kind}
                posted={course.posted}
                location={course.location}
                duration={course.duration}
                cost={course.cost}
                featured={isCentered}
                image={course.image}
                imageAlt={course.title}
              />
            )}
          />
        </motion.div>
      </div>
    </section>
  )
}
