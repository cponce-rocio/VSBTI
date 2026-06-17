import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { rooms } from '../data/rooms';
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- cerrar el drawer al cambiar de ruta es sincronización con la navegación
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido</a>

      <header className={`top-bar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="top-bar-inner container">
          <NavLink to="/" className="brand">
            <span className="brand-mark">VSBTI®</span>
            <span className="brand-sub">Mi Casa · Tu Casa</span>
          </NavLink>
          <button
            className="plan-toggle"
            aria-expanded={open}
            aria-controls="house-plan"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="plan-toggle-icon" aria-hidden="true">
              <span /><span /><span />
            </span>
            Plano de la casa
          </button>
        </div>
      </header>

      <nav
        id="house-plan"
        className={`house-plan ${open ? 'is-open' : ''}`}
        aria-label="Plano de navegación de la casa VSBTI"
      >
        <div className="house-plan-inner">
          <p className="house-plan-title">Recorré la casa</p>
          <ul>
            {rooms.map((room) => (
              <li key={room.path}>
                <NavLink
                  to={room.path}
                  end={room.path === '/'}
                  className={({ isActive }) => `room-link ${isActive ? 'is-active' : ''}`}
                >
                  <span className="room-icon" aria-hidden="true">{room.icon}</span>
                  <span className="room-text">
                    <span className="room-label">{room.label}</span>
                    <span className="room-short">{room.short}</span>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <p className="house-plan-note">
            Amazon, Hotmart e Instagram son puertas externas conectadas a este ecosistema.
          </p>
        </div>
      </nav>

      {open && <button className="plan-overlay" aria-label="Cerrar plano" onClick={() => setOpen(false)} />}
    </>
  );
}
