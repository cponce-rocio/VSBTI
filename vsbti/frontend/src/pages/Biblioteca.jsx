import { Reveal } from '../components/useReveal';
import JourneyContinues from '../components/JourneyContinues';
import './InnerPage.css';
import './Biblioteca.css';

const estanterias = [
  { icon: '🌸', title: 'Amor Propio y Autoestima', text: 'Preguntas, ejercicios y herramientas para fortalecer tu autoestima y desarrollar una mirada más amable hacia quien eres.' },
  { icon: '🎯', title: 'Ikigai y Propósito', text: 'Recursos para descubrir talentos, intereses y motivaciones que acerquen tu vida a lo que te da sentido.' },
  { icon: '🌿', title: 'Bienestar Integral', text: 'Reflexiones y ejercicios orientados a favorecer el bienestar personal desde una mirada consciente.' },
  { icon: '✨', title: 'Imagen Consciente', text: 'Recursos para reflexionar sobre identidad, autenticidad y la forma en que te presentas al mundo.' },
  { icon: '🔄', title: 'Reconstrucción y Reinvención', text: 'Recursos para reorganizar ideas, recuperar claridad y comenzar nuevas etapas con confianza.' },
];

export default function Biblioteca() {
  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Tu regalo de bienvenida</p>
            <h1>Biblioteca VSBTI®</h1>
            <p className="page-sub">
              Un espacio para detenerte, escucharte y cultivar las primeras semillas de tu transformación.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="room seeds-room">
        <div className="container seeds-grid">
          <Reveal className="seeds-text">
            <p>
              Hay momentos en la vida en los que sentimos que algo necesita cambiar. No
              siempre sabemos qué, ni cómo. Por eso existe la Biblioteca VSBTI®: un lugar
              donde no necesitás aparentar, demostrar ni tenerlo todo resuelto.
            </p>
            <p>
              Aquí encontrarás pequeñas semillas capaces de iniciar grandes transformaciones:
              de reflexión, de autoconocimiento, de bienestar, de crecimiento. No necesitás
              tener todas las respuestas. Solo necesitás darte permiso para comenzar.
            </p>
          </Reveal>
          <Reveal className="seeds-quotes">
            <p>🌱 Pequeñas semillas, grandes frutos.</p>
            <p>🌱 Pequeñas acciones, grandes comienzos.</p>
            <p>🌱 Pequeñas decisiones, grandes transformaciones.</p>
          </Reveal>
        </div>
      </section>

      <section className="room room-sand featured-room">
        <div className="container featured-grid">
          <Reveal className="featured-card">
            <span className="tag-pill">Recurso destacado</span>
            <h2>🌱 Vuelve a Ti</h2>
            <p className="featured-sub">Una guía para detenerte, escucharte y volver a conectar con quien realmente eres.</p>
            <ul className="featured-list">
              <li>Reflexiones guiadas</li>
              <li>Preguntas de autoconocimiento</li>
              <li>Espacios para escribir</li>
              <li>Ejercicios prácticos</li>
              <li>Primeros pasos para tu transformación</li>
            </ul>
            <button className="btn btn-primary" type="button">📖 Descargar recurso</button>
          </Reveal>
        </div>
      </section>

      <section className="room shelves-room">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Estanterías de la biblioteca</p>
            <h2>Elegí por dónde quieras empezar</h2>
          </Reveal>
          <div className="shelves-grid">
            {estanterias.map((e, i) => (
              <Reveal key={e.title} className="shelf-card" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="shelf-icon">{e.icon}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <button className="btn btn-ghost shelf-btn" type="button">Ver recursos</button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JourneyContinues
        intro="Si alguna de estas semillas ha resonado con vos, seguí explorando otros espacios de esta casa."
        links={[
          { to: '/escuela', icon: '🎓', label: 'Ir a la Escuela VSBTI®' },
          { to: '/vitamina-para-el-alma', icon: '✨', label: 'Visitar Vitamina para el Alma' },
          { to: '/arbol-de-las-historias', icon: '🌳', label: 'Explorar el Árbol de las Historias' },
        ]}
      />
    </main>
  );
}
