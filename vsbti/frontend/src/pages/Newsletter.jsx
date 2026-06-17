import { useState } from 'react';
import { Reveal } from '../components/useReveal';
import JourneyContinues from '../components/JourneyContinues';
import { subscribeNewsletter } from '../api/client';
import './InnerPage.css';
import './Newsletter.css';

const beneficios = [
  { icon: '📖', text: 'Reflexiones inéditas que no se publican en otros espacios' },
  { icon: '🌱', text: 'Recursos y descargables exclusivos' },
  { icon: '🎓', text: 'Avisos anticipados sobre talleres y formaciones' },
  { icon: '✨', text: 'Historias del Árbol y novedades de la tienda' },
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await subscribeNewsletter(email);
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Una carta que llega a tu correo</p>
            <h1>📬 Newsletter VSBTI®</h1>
            <p className="page-sub">
              Reflexiones, recursos y noticias del ecosistema VSBTI®, directo a tu casa digital.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="room newsletter-room">
        <div className="container newsletter-grid">
          <Reveal className="newsletter-copy">
            <p>
              No envío correos para llenar tu bandeja de entrada. Envío cartas: reflexiones,
              historias y recursos que nacen del mismo lugar desde el que nació esta casa.
            </p>
            <ul className="benefits-list">
              {beneficios.map((b) => (
                <li key={b.text}><span>{b.icon}</span>{b.text}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="newsletter-form-card">
            <form onSubmit={handleSubmit} className="newsletter-form">
              <label htmlFor="newsletter-email">Tu email</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="nombre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Quiero suscribirme'}
              </button>
              {status === 'sent' && <p className="form-feedback is-ok">¡Listo! Revisá tu correo para confirmar la suscripción.</p>}
              {status === 'error' && <p className="form-feedback is-error">No pudimos procesar tu suscripción. Probá de nuevo.</p>}
              <p className="newsletter-disclaimer">Podés darte de baja cuando quieras. Sin spam, sin presión.</p>
            </form>
          </Reveal>
        </div>
      </section>

      <JourneyContinues
        intro="Mientras tu primera carta está en camino, te invito a seguir recorriendo la casa."
        links={[
          { to: '/arbol-de-las-historias', icon: '🌳', label: 'Leer historias' },
          { to: '/vitamina-para-el-alma', icon: '✨', label: 'Ver la tienda' },
        ]}
      />
    </main>
  );
}
