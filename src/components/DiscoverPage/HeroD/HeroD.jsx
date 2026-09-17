import React from 'react';
import './HeroD.css';

const STATS = [
  { value: '1,000+', label: 'Pathways' },
  { value: '30+', label: 'Skills tracked' },
  { value: '80+', label: 'Career roles mapped' },
];

function HeroD() {
  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">DISCOVER</p>
        <h1 className="hero__title">
          Find your direction
          <br />
          before you commit to it.
        </h1>
        <p className="hero__subtitle">
          Browse pathways, see which skills are actually in demand, and explore
          roles you didn&apos;t know you could aim for — all before you spend a
          single hour learning.
        </p>

        <div className="hero__stats">
          {STATS.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroD;
