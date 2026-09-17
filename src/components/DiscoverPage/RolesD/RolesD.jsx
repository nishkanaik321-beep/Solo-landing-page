import React from 'react';
import './RolesD.css';

const ROLES = [
  {
    name: 'Product Designer',
    description: 'Shapes how digital products look, feel and work.',
    emoji: '🎨',
  },
  {
    name: 'Data Analyst',
    description: 'Turns raw numbers into decisions people can act on.',
    emoji: '📊',
  },
  {
    name: 'Software Engineer',
    description: 'Builds and maintains the systems behind products.',
    emoji: '💻',
  },
  {
    name: 'Marketing Specialist',
    description: 'Plans and runs campaigns that drive real growth.',
    emoji: '📣',
  },
];

function RolesD() {
  return (
    <section className="roles">
      <div className="container">
        <p className="eyebrow">CAREER POSSIBILITIES</p>
        <h2 className="roles__title">
          See the role before you
          <br />
          plan the pathway.
        </h2>
        <p className="roles__subtitle">
          Tap a role to see what it actually involves and which skills back it
          up.
        </p>

        <div className="roles__list">
          {ROLES.map((role) => (
            <div className="roles__item" key={role.name}>
              <span className="roles__icon" aria-hidden="true">
                {role.emoji}
              </span>
              <div className="roles__info">
                <h3 className="roles__name">{role.name}</h3>
                <p className="roles__desc">{role.description}</p>
              </div>
              <button type="button" className="roles__btn">
                View Pathway
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RolesD;
