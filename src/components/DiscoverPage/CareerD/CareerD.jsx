import React, { useState } from 'react';
import './CareerD.css';

const FILTERS = ['All', 'Design', 'Tech', 'Business', 'Marketing'];

// Pulled from the SPARK+ pathway screenshots. Three generic
// "career readiness" pathways (Crack Your First Job, Career Success
// Toolkit, Essential Soft Skills) were left out -- they don't belong to
// any of the Design/Tech/Business/Marketing filters above, so they had
// nowhere to live in this grid.
const PATHWAYS = [
  {
    title: 'Advanced Financial Analysis & Modeling',
    org: 'SPARK+',
    updated: 'Sep 16, 2026',
    description:
      'This career pathway is designed to help learners develop advanced knowledge and practical understanding of financial management, analysis, and modeling techniques used in real business decision-making.',
    tags: ['Free'],
    category: 'Business',
  },
  {
    title: 'Freelancing & Entrepreneurship',
    org: 'SPARK+',
    updated: 'Sep 16, 2026',
    description:
      'This career pathway is designed to help learners develop the knowledge and practical skills required to explore freelancing and entrepreneurial opportunities, from building a client base to running a small business.',
    tags: ['Free'],
    category: 'Business',
  },
  {
    title: 'Backend Java Developer',
    org: 'SPARK+',
    updated: 'Sep 16, 2026',
    description:
      'The Backend Java course is designed to equip learners with the foundational and practical skills required to develop robust, scalable server-side applications using Java.',
    tags: ['Free'],
    category: 'Tech',
  },
  {
    title: 'Quality Assurance Tester',
    org: 'OPSPL',
    updated: 'Sep 15, 2026',
    description:
      'This pathway is designed to build a strong foundation in Quality Assurance (QA) and software testing, progressing from testing fundamentals to real-world test case design and automation.',
    tags: ['Free'],
    category: 'Tech',
  },
  {
    title: 'Junior React Native Developer',
    org: 'SPARK+',
    updated: 'Jun 29, 2026',
    description:
      'The Junior React Native Developer pathway equips learners with the technical skills required to build, deploy, and maintain cross-platform mobile applications.',
    tags: ['Free'],
    category: 'Tech',
  },
  {
    title: 'Digital Marketing Strategist',
    org: 'SPARK+',
    updated: 'Jun 15, 2026',
    description:
      'This pathway is designed to help learners build a complete modern digital marketing skill set by combining marketing analytics, content strategy, and campaign execution.',
    tags: ['Free'],
    category: 'Marketing',
  },
  {
    title: 'SEO & AI Search Specialist',
    org: 'SPARK+',
    updated: 'May 23, 2026',
    description:
      'Master modern search optimization by learning the complete SEO ecosystem -- from keyword research and on-page optimization to AI-driven search visibility.',
    tags: ['Free'],
    category: 'Marketing',
  },
  {
    title: 'Product Operations & Client Success',
    org: 'SPARK+',
    updated: 'Jun 29, 2026',
    description:
      'This pathway is designed to prepare learners for operational, client-facing, and product support responsibilities within a modern tech organization.',
    tags: ['Free'],
    category: 'Business',
  },
  {
    title: 'Business Finance Associate',
    org: 'SPARK+',
    updated: 'Sep 15, 2026',
    description:
      'This pathway provides a structured and practical understanding of business finance, guiding learners from foundational financial concepts to real-world financial decision-making.',
    tags: ['Free'],
    category: 'Business',
  },
  {
    title: 'From Idea to App Store \u2013 Mobile App Development',
    org: 'SPARK+ Academia',
    updated: 'Jan 16, 2026',
    description:
      'This learning pathway is designed to guide students from basic app concepts to publishing real mobile applications. It includes hands-on projects from idea to app store launch.',
    tags: ['INR 8000'],
    category: 'Tech',
  },
  {
    title: 'UX Designer Associate',
    org: 'SPARK+',
    updated: 'Jun 29, 2026',
    description:
      'The UX Designer Associate pathway equips learners with the foundational knowledge and practical skills required to design intuitive, user-centered digital experiences.',
    tags: ['Free'],
    category: 'Design',
  },
  {
    title: 'AI Solutions Associate',
    org: 'SPARK+',
    updated: 'Aug 17, 2026',
    description:
      'This pathway introduces learners to the foundations of Artificial Intelligence, combining essential theory with practical, hands-on application.',
    tags: ['Free'],
    category: 'Tech',
  },
  {
    title: 'SEO Associate',
    org: 'SPARK+',
    updated: 'Aug 17, 2026',
    description:
      'The SEO Learning Pathway is a structured, beginner-to-advanced journey designed to equip learners with the skills to boost search visibility and organic growth.',
    tags: ['INR 300'],
    category: 'Marketing',
  },
  {
    title: 'Google Analytics Associate',
    org: 'SPARK+',
    updated: 'Aug 17, 2026',
    description:
      'Covers the complete Google Analytics career pathway from foundational concepts to advanced data applications, including tracking, reporting, and analysis.',
    tags: ['Free'],
    category: 'Marketing',
  },
  {
    title: 'Junior WordPress Developer',
    org: 'SPARK+',
    updated: 'Aug 17, 2026',
    description:
      'This pathway provides a structured progression through core WordPress skills, from initial setup to advanced customization and site management.',
    tags: ['Free'],
    category: 'Tech',
  },
];

function PathwayTag({ label }) {
  const isApproved = label === 'Approved';
  return (
    <span className={`tag ${isApproved ? 'tag--success' : 'tag--muted'}`}>
      {label}
    </span>
  );
}

function PathwayCard({ pathway, expanded, onToggle }) {
  return (
    <div className="pathway-card">
      <div className="pathway-card__body">
        <h3 className="pathway-card__title">{pathway.title}</h3>
        <span className="pathway-card__org">{pathway.org}</span>
        <span className="pathway-card__updated">Updated - {pathway.updated}</span>
        <p className={`pathway-card__desc ${expanded ? 'pathway-card__desc--expanded' : ''}`}>
          {pathway.description}{' '}
          <button type="button" className="pathway-card__more" onClick={onToggle}>
            {expanded ? 'show less' : 'read more'}
          </button>
        </p>
      </div>
      <div className="pathway-card__footer">
        <div className="pathway-card__tags">
          {pathway.tags.map((tag) => (
            <PathwayTag key={tag} label={tag} />
          ))}
        </div>
        <button type="button" className="btn btn-outline btn-sm">
          View more
        </button>
      </div>
    </div>
  );
}

function CareerD() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded, setExpanded] = useState(() => new Set());

  const visible =
    activeFilter === 'All'
      ? PATHWAYS
      : PATHWAYS.filter((p) => p.category === activeFilter);

  const toggleExpanded = (title) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  return (
    <section className="pathway">
      <div className="container">
        <p className="eyebrow">LEARNING PATHWAYS</p>
        <h2 className="pathway__title">
          Pick a pathway,
          <br />
          not a pile of courses.
        </h2>
        <p className="pathway__subtitle">
          Each pathway strings the right skills together in the right order,
          built around a real role.
        </p>

        <div className="pathway__filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`pathway__filter ${
                filter === activeFilter ? 'pathway__filter--active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="pathway__grid" key={activeFilter}>
          {visible.map((pathway, i) => (
            <div
              className="pathway__grid-item"
              key={pathway.title}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <PathwayCard
                pathway={pathway}
                expanded={expanded.has(pathway.title)}
                onToggle={() => toggleExpanded(pathway.title)}
              />
            </div>
          ))}
        </div>

        <div className="pathway__cta-wrap">
          <button type="button" className="btn btn-primary">
            Sign in to explore more
          </button>
        </div>
      </div>
    </section>
  );
}

export default CareerD;
