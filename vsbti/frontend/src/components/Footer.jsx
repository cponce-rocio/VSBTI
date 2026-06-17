import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-mark">VSBTI®</p>
          <p className="footer-tagline">Desde tu interior hacia el exterior.</p>
          <p className="footer-by">Viviana Sáenz · Bienestar y Transformación Integral</p>
        </div>

        <div className="footer-rooms">
          <p className="footer-heading">El plano de la casa</p>
          <ul>
            {rooms.map((r) => (
              <li key={r.path}><Link to={r.path}>{r.icon} {r.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-doors">
          <p className="footer-heading">Puertas externas</p>
          <ul>
            <li><a href="https://www.amazon.es" target="_blank" rel="noreferrer">Amazon</a></li>
            <li><a href="https://hotmart.com" target="_blank" rel="noreferrer">Campus Hotmart</a></li>
            <li><a href="https://instagram.com/nexocode.digital" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Viviana Sáenz · VSBTI®. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
