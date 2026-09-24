import './ProcessS.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Compass,
  ListChecks,
  Send,
  ShieldCheck,
  FileBadge2,
} from 'lucide-react'
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle.jsx'
import StepGallery from '../../shared/StepGallery/StepGallery.jsx'

const COMPLETE_STEPS = [
  { h: "Complete the course", p: "Finish all modules, assignments, quizzes, assessments and exercises -- on SOLO or the external platform.", img: "/imagesall/dashboard-recs.jpg", cap: "Complete every required activity before requesting a review." },
  { h: "Click More -> Request Completion", p: "Go to Manage -> Enrollments, select the course, then choose Request Completion from the More menu.", img: "/imagesall/request-completion-menu.jpg", cap: "Request Completion option for a completed course." },
  { h: "Submit evidence", p: "Upload a certificate or badge, or a short summary of the work completed, with a brief description, then click Submit.", img: "/imagesall/request-completion.jpg", cap: "Upload evidence and submit the completion request for verification." },
  { h: 'Status turns "Completed"', p: "Once your evidence is accepted, the course is automatically marked Completed and reflected in your profile and credentials.", img: "/imagesall/course-completed-status.jpg", cap: 'Course status updated to "Completed" after successful submission and verification.' },
];



function ProcessS() {
  const [isLight, setIsLight] = useState(true
  )

  return (
    <section id="process" className={`process ${isLight ? 'process--light' : 'process--dark'}`}>
      <div className="container">
        <div className="process__head-row">
          <motion.div
            className="process__head"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <span className={`eyebrow process__eyebrow ${isLight ? '' : 'eyebrow--on-night'}`}>
              HOW YOU RECEIVE CREDENTIALS
            </span>
            <h2>Nothing is issued by hand.</h2>
            <p>
              Every credential on SOLO a badge or a certificate comes out of the same
              verifiable pipeline: enroll, complete, get assessed, get issued.
            </p>
          </motion.div>

          <ThemeToggle
            isLight={isLight}
            onToggle={() => setIsLight((v) => !v)}
            sectionLabel="process section"
          />
        </div>
        <StepGallery steps={COMPLETE_STEPS} />
      </div>
    </section>
  )
}

export default ProcessS
