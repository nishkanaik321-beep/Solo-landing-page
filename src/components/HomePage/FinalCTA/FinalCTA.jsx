import './FinalCTA.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, ArrowRight, ArrowUpRight, ShieldCheck, Smartphone, FileText, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="signup" className="final-cta">
      {/* Soft peach gradient + blurred color blobs — static, no motion */}
      <div className="final-cta__bg" aria-hidden="true">
        <span className="final-cta__blob final-cta__blob--1" />
        <span className="final-cta__blob final-cta__blob--2" />
        <span className="final-cta__blob final-cta__blob--3" />
      </div>

      {/* Decorative corner details */}
      <Sparkles className="final-cta__deco final-cta__deco--sparkle" aria-hidden="true" />
      <span className="final-cta__deco final-cta__deco--sun" aria-hidden="true" />
      <span className="final-cta__deco final-cta__deco--ring" aria-hidden="true" />
      <span className="final-cta__deco final-cta__deco--dot" aria-hidden="true" />
      <ArrowUpRight className="final-cta__deco final-cta__deco--arrow" aria-hidden="true" />

      <div className="container final-cta__inner">
        <motion.div
          className="final-cta__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.0, 0, 1.0] }}
        >
          <motion.span
            className="final-cta__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.0, 0, 1.0] }}
          >
            Found something worth pursuing?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.0, 0, 1.0] }}
          >
            Turn <span className="final-cta__accent">what you learn</span> into <span className="final-cta__accent">trusted digital proof</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.2, 0.0, 0, 1.0] }}
          >
            Every completed module can become a verified badge on your profile.
          </motion.p>

          <motion.div
            className="final-cta__ctas"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.2, 0.0, 0, 1.0] }}
          >
            <a
              href="https://www.youtube.com/watch?v=yH68Kbx_C5I&t=49s"
              href="https://www.youtube.com/watch?v=yH68Kbx_C5I"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <Play size={14} fill="currentColor" />
              Watch a Demo
            </a>
            <Link to="/signin" className="btn btn-ghost">
              Create Free Account
              <ArrowRight size={15} />
            </Link>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}
