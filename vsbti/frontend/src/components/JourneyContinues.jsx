import { Link } from 'react-router-dom';
import { Reveal } from './useReveal';
import './Journey.css';

export default function JourneyContinues({ intro, links }) {
  return (
    <section className="room room-sand journey">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Tu recorrido continúa</p>
          <p className="journey-intro">{intro}</p>
        </Reveal>
        <Reveal className="journey-links">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="journey-link">
              <span className="journey-icon" aria-hidden="true">{l.icon}</span>
              <span>{l.label}</span>
              <span className="journey-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
