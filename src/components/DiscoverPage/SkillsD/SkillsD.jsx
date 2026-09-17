import React, { useState } from 'react';
import './SkillsD.css';

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
];

function SkillsD() {
  const [activeTag, setActiveTag] = useState('All');

  return (
    <section className="skills">
      <div className="container">
        <p className="eyebrow">YOUR SKILLS, YOUR PATH</p>
        <h2 className="skills__title">
          Discover the Skills
          <br />
          Behind Your Dream Job
        </h2>

        <div className="skills__grid">
          <div className="skills__card skills__card--main">
            <h3 className="skills__card-heading">
              See what&apos;s actually worth learning right now.
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
          </div>

          <div className="skills__side">
            <div className="skills__card skills__card--small">
              <svg
                className="skills__icon"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 17l6-6 4 4 8-8"
                  stroke="var(--orange)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="skills__card-title">Discover skills for a role</h4>
              <p className="skills__card-text">
                Pick any job title and see the exact skill breakdown behind it.
              </p>
            </div>

            <div className="skills__card skills__card--small">
              <svg
                className="skills__icon"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="var(--blue)"
                  strokeWidth="2"
                />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  stroke="var(--blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="skills__card-title">Rate your starting point</h4>
              <p className="skills__card-text">
                A quick self-check maps what you already know onto a pathway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsD;
