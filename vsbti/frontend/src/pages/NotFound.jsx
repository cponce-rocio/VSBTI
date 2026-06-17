import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main id="main" className="room page-hero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Puerta no encontrada</p>
        <h1 style={{ margin: '14px 0 24px' }}>Esta habitación no existe (todavía)</h1>
        <Link to="/" className="btn btn-primary">Volver al Recibidor</Link>
      </div>
    </main>
  );
}
