import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import StepGallery from "../../shared/StepGallery/StepGallery";
import ResumeBuilder from "./ResumeBuilder/ResumeBuilder";
import "./GenerateResume.css";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } },
});

const RESUME_STEPS = [
  {
    h: "Complete your learner profile",
    p: "Update skills, education, projects, work experience and credentials first -- the more complete, the better the resume.",
    img: "/image/generate-resume-btn.jpg",
    cap: "Click Generate resume to create a resume using your profile information.",
  },
  {
    h: "Open Generate Resume",
    p: "From My Profile, select the Generate Resume option next to Import from Resume.",
    img: "/image/generate-resume-btn.jpg",
    cap: "Click Generate resume to create a resume using your profile information.",
  },
  {
    h: "Choose a template",
    p: "Select or deselect the sections and achievements you want to include, then pick a professionally designed template.",
    img: "/image/resume-template.jpg",
    cap: "Professionally designed, ATS-ready resume templates with clickable credential links.",
  },
  {
    h: "Preview and download",
    p: "Review exactly how your information appears, then download -- ATS-ready, with clickable links back to each verified credential.",
    img: "/image/resume-template.jpg",
    cap: "Professionally designed, ATS-ready resume templates with clickable credential links.",
  },
];

export default function GenerateResume() {
  const [builderOpen, setBuilderOpen] = useState(false);

  return (
    <section className="sec generate-resume">
      <div className="container">
        <div className="live-projects__head-row">
          <div className="live-projects__head">
            <motion.p
              className="eyebrow"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp(0)}
            >
              Generate your resume
            </motion.p>
            <motion.h2
              className="live-projects__title"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp(0.06)}
            >
              Turn your learning and projects into a professional resume.
            </motion.h2>
            <motion.p
              className="live-projects__subtitle"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp(0.12)}
            >
              SOLO brings together the skills you’ve learned, projects you’ve built, credentials you’ve earned, and experience you’ve gained to generate a polished, ATS-friendly resume that showcases your growth and capabilities.
            </motion.p>
            <motion.div
              className="generate-resume__cta"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp(0.18)}
            >
              <button type="button" className="btn btn-primary" onClick={() => setBuilderOpen(true)}>
                <FileText size={16} />
                Generate your resume
                <ArrowRight size={15} />
              </button>
              <span className="generate-resume__cta-note">Free · pick a template · download as PDF</span>
            </motion.div>
          </div>
        </div>
        <StepGallery steps={RESUME_STEPS} />
      </div>
      <ResumeBuilder open={builderOpen} onClose={() => setBuilderOpen(false)} />
    </section>
  );
}
