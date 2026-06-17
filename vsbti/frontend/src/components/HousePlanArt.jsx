import { Link } from 'react-router-dom';
import './HousePlanArt.css';

/**
 * Ilustración de firma: un plano de casa dibujado a mano, con cada
 * habitación del ecosistema VSBTI® como una puerta clicable.
 * Es el elemento único de la página de Inicio.
 */
export default function HousePlanArt() {
  const doors = [
    { x: 95, y: 248, label: '🛋️ Salón', to: '/salon' },
    { x: 300, y: 70, label: '🧭 Estudio', to: '/estudio' },
    { x: 470, y: 248, label: '📚 Biblioteca', to: '/biblioteca' },
    { x: 640, y: 70, label: '🌳 Árbol', to: '/arbol-de-las-historias' },
    { x: 95, y: 420, label: '🌿 Jardín', to: '/jardin-de-talentos' },
    { x: 300, y: 420, label: '🎓 Escuela', to: '/escuela' },
    { x: 470, y: 420, label: '✨ Vitamina', to: '/vitamina-para-el-alma' },
    { x: 640, y: 420, label: '🚪 Porche', to: '/porche' },
  ];

  return (
    <div className="house-art-wrap">
      <svg viewBox="0 0 760 500" className="house-art" role="img" aria-label="Plano ilustrado de la casa VSBTI con accesos a cada espacio">
        <rect x="40" y="40" width="680" height="420" rx="18" fill="none" stroke="var(--earth)" strokeWidth="2.5" />
        <line x1="40" y1="170" x2="720" y2="170" stroke="var(--earth)" strokeWidth="1.5" opacity="0.45" />
        <line x1="40" y1="340" x2="720" y2="340" stroke="var(--earth)" strokeWidth="1.5" opacity="0.45" />
        <line x1="270" y1="40" x2="270" y2="170" stroke="var(--earth)" strokeWidth="1.5" opacity="0.45" />
        <line x1="530" y1="40" x2="530" y2="170" stroke="var(--earth)" strokeWidth="1.5" opacity="0.45" />
        <line x1="270" y1="340" x2="270" y2="460" stroke="var(--earth)" strokeWidth="1.5" opacity="0.45" />
        <line x1="530" y1="340" x2="530" y2="460" stroke="var(--earth)" strokeWidth="1.5" opacity="0.45" />

        <circle cx="380" cy="255" r="46" fill="var(--honey-light)" opacity="0.6" />
        <text x="380" y="250" textAnchor="middle" fontSize="13" fontFamily="var(--font-display)" fill="var(--terracotta-deep)" fontStyle="italic">Mi Casa</text>
        <text x="380" y="266" textAnchor="middle" fontSize="13" fontFamily="var(--font-display)" fill="var(--terracotta-deep)" fontStyle="italic">Tu Casa</text>
      </svg>

      {doors.map((d) => (
        <Link
          key={d.to}
          to={d.to}
          className="house-art-door"
          style={{ left: `${(d.x / 760) * 100}%`, top: `${(d.y / 500) * 100}%` }}
        >
          {d.label}
        </Link>
      ))}
    </div>
  );
}
