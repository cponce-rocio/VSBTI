import { Reveal } from '../components/useReveal';
import JourneyContinues from '../components/JourneyContinues';
import './InnerPage.css';
import './Estudio.css';

const acronimo = [
  { letter: 'V', title: 'Vida Viva', text: 'Aprender a vivir con presencia, consciencia y propósito. No sobrevivir, no funcionar en automático.' },
  { letter: 'S', title: 'Salud y Seguridad', text: 'Construir bienestar físico, emocional y mental sobre bases sólidas.' },
  { letter: 'B', title: 'Bienestar y Belleza', text: 'Cuidar tanto el mundo interior como la manera en que nos mostramos al mundo.' },
  { letter: 'T', title: 'Transformación Total', text: 'El crecimiento no ocurre en una sola parte de la vida: implica evolucionar en pensamientos, hábitos y proyectos.' },
  { letter: 'I', title: 'Integridad Integral', text: 'Vivir desde la coherencia, alineando lo que pensamos, sentimos, decimos y hacemos.' },
];

const pilares = [
  { icon: '🌱', title: 'Raíz', text: 'Reconocer de dónde vienes, qué historia cargas, qué patrones se repiten y qué aprendizajes necesitas integrar.' },
  { icon: '✨', title: 'Esencia', text: 'Conectar con quién eres realmente: tus valores, talentos, sensibilidad, propósito y verdad interior.' },
  { icon: '🧭', title: 'Identidad', text: 'Construir una versión coherente de ti: emocional, personal, profesional, visual y comunicativa.' },
  { icon: '🔥', title: 'Transformación', text: 'El espacio donde una reflexión se convierte en decisión, y una decisión sostenida genera cambios reales.' },
  { icon: '🌳', title: 'Legado', text: 'Transformar tu experiencia en contribución, servicio, proyecto, mensaje, obra o impacto.' },
];

export default function Estudio() {
  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Método VSBTI®</p>
            <h1>Un camino de transformación integral<br />desde la raíz hasta el legado</h1>
            <p className="page-sub">
              VSBTI® no es solo una formación ni un conjunto de recursos: es una forma de
              ordenar el crecimiento humano desde dentro hacia fuera.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="room intro-method-room">
        <div className="container">
          <Reveal className="intro-method-text">
            <p>
              Durante gran parte de nuestra vida aprendemos a estudiar, a trabajar, a cumplir
              responsabilidades. Pero pocas veces nos enseñan a comprender nuestra propia
              historia, a reconocer quiénes somos realmente o a construir una vida alineada
              con nuestra verdad.
            </p>
            <p>
              Por eso existe el Método VSBTI®: no para decirte quién debes ser, sino para
              ayudarte a recordar quién eres, comprender tu historia, descubrir tu esencia,
              fortalecer tu identidad y construir un legado coherente con tu vida, tus valores
              y tu propósito.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="room room-sand acronimo-room">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">¿Qué significa VSBTI®?</p>
            <h2>Cada letra, un pilar del crecimiento humano</h2>
          </Reveal>
          <div className="acronimo-grid">
            {acronimo.map((a, i) => (
              <Reveal key={a.letter} className="acronimo-card" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="acronimo-letter">{a.letter}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="room pilares-room">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">La filosofía que guía el ecosistema</p>
            <h2>Raíz → Esencia → Identidad → Transformación → Legado</h2>
            <p className="section-lede">
              Un recorrido que puede comenzar en cualquier momento de la vida, porque nunca
              es tarde para conocerse mejor, reconstruirse y crecer.
            </p>
          </Reveal>

          <div className="pilares-path">
            {pilares.map((p, i) => (
              <Reveal key={p.title} className="pilar-step" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="pilar-node">
                  <span className="pilar-icon">{p.icon}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {i < pilares.length - 1 && <span className="pilar-connector" aria-hidden="true" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="room room-moss aplica-room">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--honey-light)' }}>¿Cómo se aplica?</p>
            <h2>VSBTI® no vive únicamente en la teoría</h2>
            <p className="aplica-text">
              Se encuentra presente en las formaciones, los libros, los cuadernos de trabajo,
              los talleres, los recursos digitales y las historias de este ecosistema. Es una
              filosofía práctica para vivir, crecer, evolucionar y contribuir desde una mirada
              más consciente, humana e integral.
            </p>
          </Reveal>
        </div>
      </section>

      <JourneyContinues
        intro="Ahora que conocés los pilares y la filosofía que sostienen esta casa, elegí el siguiente paso de tu viaje."
        links={[
          { to: '/escuela', icon: '🎓', label: 'Ver Escuela VSBTI®' },
          { to: '/vitamina-para-el-alma', icon: '✨', label: 'Ir a Vitamina para el Alma' },
          { to: '/arbol-de-las-historias', icon: '🌳', label: 'Leer historias VSBTI®' },
        ]}
      />
    </main>
  );
}
