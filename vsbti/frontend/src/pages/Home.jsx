import { Link } from 'react-router-dom';
import { Reveal } from '../components/useReveal';
import HousePlanArt from '../components/HousePlanArt';
import JourneyContinues from '../components/JourneyContinues';
import './Home.css';

export default function Home() {
  return (
    <main id="main">
      <section className="room hero-room">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Ecosistema digital VSBTI®</p>
            <h1>Bienvenida a<br /><em>Mi Casa · Tu Casa</em></h1>
            <p className="hero-sub">
              Un hogar digital para regresar a tu raíz, descubrir tu esencia,
              fortalecer tu identidad y construir tu legado.
            </p>
            <p className="hero-body">
              Quizás llegaste buscando respuestas. Quizás sientes que algo dentro de ti
              quiere cambiar. Todos atravesamos momentos en los que nos sentimos perdidos,
              cansados o atrapados en historias que ya no nos representan — y existe algo
              que nos une: la necesidad de volver a creer y comenzar de nuevo. Por eso nació
              este espacio. Desde tu interior hacia el exterior.
            </p>
            <div className="hero-actions">
              <Link to="/salon" className="btn btn-primary">Entrar al Salón</Link>
              <Link to="/estudio" className="btn btn-secondary">Descubrir el Método VSBTI®</Link>
            </div>
          </Reveal>

          <Reveal className="hero-art">
            <HousePlanArt />
            <p className="hero-art-caption">Tocá una puerta para entrar a ese espacio de la casa.</p>
          </Reveal>
        </div>
      </section>

      <section className="room room-sand philosophy-room">
        <div className="container">
          <Reveal>
            <p className="eyebrow">La filosofía del recorrido</p>
            <h2>Raíz → Esencia → Identidad → Legado</h2>
          </Reveal>
          <div className="philosophy-grid">
            {[
              { icon: '🌱', title: 'Raíz', text: 'Volver al origen, reconocer la historia, las heridas, los aprendizajes y los cimientos.' },
              { icon: '✨', title: 'Esencia', text: 'Descubrir quién eres realmente: tus talentos, tu valor y tu propósito.' },
              { icon: '🧭', title: 'Identidad', text: 'Construir una vida, una imagen o un proyecto coherente con tu verdad.' },
              { icon: '🌳', title: 'Legado', text: 'Transformar lo aprendido en contribución, impacto y huella para el mundo.' },
            ].map((p, i) => (
              <Reveal key={p.title} className="philosophy-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="philosophy-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="room intro-room">
        <div className="container intro-grid">
          <Reveal>
            <p className="eyebrow">Soy Viviana Sáenz</p>
            <h2>Arquitecta integral de marcas humanas y transformación estratégica</h2>
            <p className="intro-text">
              Durante años he acompañado procesos de bienestar, autoconocimiento, imagen y
              transformación humana. He visto talentos ocultos detrás del miedo, sueños
              escondidos detrás de las dudas y personas extraordinarias que olvidaron el
              valor que siempre tuvieron. De esa experiencia nació VSBTI®: no como una fórmula
              mágica, sino como una forma de comprender el crecimiento humano desde una mirada
              integral.
            </p>
            <Link to="/salon" className="link-arrow">Conocer mi historia completa →</Link>
          </Reveal>
        </div>
      </section>

      <section className="room room-sand highlights-room">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Qué encontrarás aquí</p>
            <h2>Cada espacio de esta casa tiene una función</h2>
          </Reveal>
          <div className="highlights-grid">
            {[
              { to: '/biblioteca', icon: '📚', title: 'Biblioteca', text: 'La Biblioteca regala recursos gratuitos.' },
              { to: '/arbol-de-las-historias', icon: '🌳', title: 'Árbol de las Historias', text: 'El blog inspira con historias y reflexiones.' },
              { to: '/escuela', icon: '🎓', title: 'Escuela VSBTI®', text: 'La Escuela forma con talleres, cursos y másteres.' },
              { to: '/vitamina-para-el-alma', icon: '✨', title: 'Vitamina para el Alma', text: 'La tienda vende recursos digitales y libros.' },
            ].map((h) => (
              <Reveal as={Link} to={h.to} key={h.to} className="highlight-card">
                <span className="highlight-icon">{h.icon}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
                <span className="highlight-arrow">→</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JourneyContinues
        intro="Si algo de estas palabras ha resonado en tu interior, esta también puede convertirse en tu casa."
        links={[
          { to: '/salon', icon: '🛋️', label: 'Entrar al Salón' },
          { to: '/biblioteca', icon: '📚', label: 'Visitar la Biblioteca' },
          { to: '/newsletter', icon: '📬', label: 'Suscribirme a la Newsletter' },
        ]}
      />
    </main>
  );
}
