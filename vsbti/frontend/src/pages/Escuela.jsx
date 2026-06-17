import { Reveal } from '../components/useReveal';
import JourneyContinues from '../components/JourneyContinues';
import './InnerPage.css';
import './Escuela.css';

const formatos = [
  { icon: '🌱', title: 'Minitalleres VSBTI®', text: 'Pequeñas experiencias de aprendizaje orientadas a la reflexión, la acción y el descubrimiento personal.', cta: 'Ver minitalleres' },
  { icon: '🎯', title: 'Talleres VSBTI®', text: 'Experiencias prácticas y participativas centradas en temas de desarrollo humano, bienestar e identidad.', cta: 'Ver talleres' },
  { icon: '📚', title: 'Cursos VSBTI®', text: 'Formaciones estructuradas por áreas temáticas, diseñadas para desarrollar conocimientos y competencias.', cta: 'Ver cursos' },
  { icon: '🌿', title: 'Programas VSBTI®', text: 'Procesos formativos más amplios que integran herramientas, recursos y experiencias de aprendizaje.', cta: 'Ver programas' },
  { icon: '🏛️', title: 'Másteres VSBTI®', text: 'Formaciones académicas avanzadas para quienes desean profundizar y especializarse con visión integral.', cta: 'Ver másteres' },
  { icon: '🏅', title: 'Certificaciones VSBTI®', text: 'Formación con estructura académica, evaluación y desarrollo de competencias específicas.', cta: 'Ver certificaciones' },
];

export default function Escuela() {
  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Espacio exclusivo de formación</p>
            <h1>🎓 Escuela VSBTI®</h1>
            <p className="page-sub">
              Formación para transformar conocimiento en vida, identidad y legado.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="room escuela-intro-room">
        <div className="container escuela-intro-grid">
          <Reveal>
            <p>
              Aprender es mucho más que adquirir información: es ampliar nuestra mirada,
              desarrollar capacidades que antes no teníamos, y convertir el conocimiento en
              decisiones, las decisiones en acciones y las acciones en transformación.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="room room-sand formatos-room">
        <div className="container">
          <div className="formatos-grid">
            {formatos.map((f, i) => (
              <Reveal key={f.title} className="formato-card" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="formato-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <button className="btn btn-ghost formato-btn" type="button">{f.cta} →</button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="room hotmart-room">
        <div className="container hotmart-grid">
          <Reveal>
            <span className="tag-pill">🚀 Campus Hotmart</span>
            <h2>Algunas formaciones se alojan en nuestro Campus Hotmart</h2>
            <p>
              Hotmart forma parte del ecosistema educativo VSBTI® como plataforma de acceso,
              gestión académica y formación online. Sin embargo, Hotmart no constituye la
              Escuela VSBTI® en sí misma: es una de las puertas externas donde determinadas
              experiencias de aprendizaje se desarrollan y gestionan.
            </p>
            <a href="https://hotmart.com" target="_blank" rel="noreferrer" className="btn btn-primary">
              Acceder al Campus Hotmart
            </a>
          </Reveal>
        </div>
      </section>

      <JourneyContinues
        intro="Te invito a descubrir el siguiente espacio de esta casa: recursos creados para acompañarte en distintas etapas de bienestar y transformación."
        links={[
          { to: '/vitamina-para-el-alma', icon: '✨', label: 'Entrar en Vitamina para el Alma' },
          { to: '/porche', icon: '🚪', label: 'Contactar para información' },
        ]}
      />
    </main>
  );
}
