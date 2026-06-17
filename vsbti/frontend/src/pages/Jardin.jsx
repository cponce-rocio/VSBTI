import { useState } from 'react';
import { Reveal } from '../components/useReveal';
import JourneyContinues from '../components/JourneyContinues';
import { sendTalentProposal } from '../api/client';
import './InnerPage.css';
import './Jardin.css';

const areas = [
  { icon: '🤝', title: 'Intercambio de Talentos', text: 'Compartí conocimientos, habilidades, tiempo o apoyo mutuo. El talento se convierte en un puente, no en una barrera.' },
  { icon: '🌱', title: 'Colaboraciones y Proyectos', text: 'Presentá iniciativas y buscá colaboradores para construir proyectos con impacto humano, educativo o social.' },
  { icon: '💚', title: 'Contribución y Voluntariado', text: 'Aportá parte de tu tiempo o experiencia a proyectos que generen bienestar y transformación.' },
  { icon: '🌍', title: 'Asociaciones e Instituciones', text: 'Un punto de encuentro para fundaciones, centros educativos y organizaciones con valores compartidos.' },
  { icon: '🌳', title: 'Alianzas Estratégicas', text: 'Para profesionales, emprendedores y empresas que deseen desarrollar iniciativas conjuntas.' },
];

export default function Jardin() {
  const [form, setForm] = useState({ name: '', email: '', type: 'Intercambio de talentos', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendTalentProposal(form);
      setStatus('sent');
      setForm({ name: '', email: '', type: 'Intercambio de talentos', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Trueque, colaboración y comunidad</p>
            <h1>🌿 Jardín de Talentos</h1>
            <p className="page-sub">
              Un espacio para sembrar colaboración, intercambio y crecimiento compartido.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="room jardin-intro-room">
        <div className="container jardin-intro-grid">
          <Reveal>
            <p>
              Vivimos en un mundo donde muchas veces el valor de una persona parece medirse
              por lo que posee. En VSBTI® creemos algo diferente: que cada ser humano posee
              talentos, capacidades y riquezas que no siempre aparecen en un currículum.
            </p>
            <p>
              Aquí no importa de dónde venís, tu edad ni tu profesión. Lo que importa es tu
              voluntad de aprender, compartir, contribuir y crecer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="room room-sand areas-room">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Las áreas del jardín</p>
            <h2>Elegí cómo querés participar</h2>
          </Reveal>
          <div className="areas-grid">
            {areas.map((a, i) => (
              <Reveal key={a.title} className="area-card" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="area-icon">{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="room form-room">
        <div className="container form-grid">
          <Reveal>
            <p className="eyebrow">Tu participación comienza aquí</p>
            <h2>Proponé tu colaboración</h2>
            <p className="section-lede">
              Nadie crece completamente solo. Contanos qué te gustaría aportar o qué tipo de
              alianza estás buscando, y nos pondremos en contacto.
            </p>
          </Reveal>

          <Reveal as="form" className="talent-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label>
              Tipo de propuesta
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option>Intercambio de talentos</option>
                <option>Colaboración o proyecto</option>
                <option>Contribución o voluntariado</option>
                <option>Asociación o institución</option>
                <option>Alianza estratégica</option>
              </select>
            </label>
            <label>
              Contanos tu propuesta
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="submit" className="btn btn-moss" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar propuesta'}
            </button>
            {status === 'sent' && <p className="form-feedback is-ok">Gracias, recibimos tu propuesta. Te contactaremos pronto.</p>}
            {status === 'error' && <p className="form-feedback is-error">Algo salió mal. Probá nuevamente en unos minutos.</p>}
          </Reveal>
        </div>
      </section>

      <JourneyContinues
        intro="A veces una oportunidad, una colaboración o una persona pueden cambiar el rumbo de una historia."
        links={[
          { to: '/porche', icon: '🚪', label: 'Contactar' },
          { to: '/escuela', icon: '🎓', label: 'Ver Escuela VSBTI®' },
        ]}
      />
    </main>
  );
}
