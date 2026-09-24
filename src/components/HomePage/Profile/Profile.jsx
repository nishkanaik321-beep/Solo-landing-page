import './Profile.css'
import { motion } from 'framer-motion'
import StepGallery from '../../shared/StepGallery/StepGallery.jsx'

const IMPORT_STEPS = [
    { h: 'Select "Update Profile Using Resume"', p: "Right after signup, this option appears in place of the manual form -- pick it to skip retyping everything.", img: "/imagesall/import-resume-popup.jpg", cap: '"Update Profile using Import Resume" option available after signup.' },
    { h: 'Select "Import from Resume"', p: "On your profile page, click Import from Resume under the Resume & profile panel.", img: "/imagesall/select-import-resume.jpg", cap: "Select Import from Resume." },
    { h: "Upload your file", p: "Choose a resume file in PDF or DOCX format, then click Upload -- SOLO's AI scans it automatically.", img: "/imagesall/resume-upload-dialog.jpg", cap: "Click Choose File, select your resume, and click Upload." },
    { h: "Review extracted skills", p: "Skills, education, experience and projects are pulled out and grouped under Acquired Skills for you to check.", img: "/imagesall/skills-extracted.jpg", cap: "Skills, education, and experience extracted automatically and grouped for review." },
    { h: "Save and finish", p: "Once confirmed, the information saves to your profile -- ready for resume generation and applications.", img: "/imagesall/resume-save-finish.jpg", cap: '"Save and Finish" option to save the updated resume and complete the profile setup.' },
];

export default function Profile() {
    return (
        <section id="discover-path" className="section section--tight discover-path">
            <div className="container">
                <motion.div
                    className="discover-path__head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
                >
                    <span className="eyebrow">Setting up your profile</span>
                    <h2>Start with what you already have..</h2>
                    <p>
                        Build your SOLO profile by importing skills, education, experience, and projects directly from your resume.
                    </p>
                </motion.div>

                <StepGallery steps={IMPORT_STEPS} />

            </div>
        </section>
    )
}