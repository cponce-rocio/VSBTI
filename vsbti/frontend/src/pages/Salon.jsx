import { Reveal } from '../components/useReveal';
import JourneyContinues from '../components/JourneyContinues';
import './InnerPage.css';
import './Salon.css';

const values = [
  { title: 'Integridad', text: 'Creo en la coherencia entre lo que pensamos, sentimos, decimos y hacemos.' },
  { title: 'Respeto', text: 'Cada persona posee una historia única. No todos avanzamos igual, y todos merecemos ser escuchados.' },
  { title: 'Aprendizaje Continuo', text: 'Mantengo una actitud permanente de formación, curiosidad y evolución.' },
  { title: 'Bienestar Integral', text: 'Mente, emociones, cuerpo, hábitos, relaciones e imagen forman parte de un mismo sistema.' },
  { title: 'Transformación Consciente', text: 'Los cambios sostenibles nacen de la comprensión, la responsabilidad y la acción.' },
  { title: 'Contribución', text: 'Todo conocimiento adquiere mayor valor cuando se comparte para ayudar a otras personas.' },
];

const formacion = [
  'Formador de Formadores', 'Terapia Sistémica Familiar', 'Máster en Psicología Holística, Coaching y PNL',
  'Gestalt Aplicada', 'Neurociencia Aplicada', 'Ikigai Aplicado', 'Kaizen Aplicado', 'Naturaterapia',
  'Colorimetría Internacional', 'Personal Shopper Profesional', 'Ecommerce Profesional',
  'Máster en Inteligencia Artificial', 'IA Aplicada al Día a Día', 'Estética y Cosmología',
  'Micropigmentación', 'Actividades de Tiempo Libre Infantil y Juvenil',
];

export default function Salon() {
  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Sobre Viviana Sáenz</p>
            <h1>Una historia de transformación<br />convertida en método, propósito y legado</h1>
          </Reveal>
        </div>
      </header>

      <section className="room story-room">
        <div className="container story-grid">
          <Reveal className="story-text">
            <p>No llegué hasta aquí porque siempre tuve todas las respuestas. Llegué porque, como muchas personas, también tuve preguntas: sobre quién era, sobre cuál era mi lugar, sobre cómo transformar experiencias difíciles en aprendizajes valiosos.</p>
            <p>Durante años comprendí algo que cambiaría mi manera de ver el crecimiento humano: muchas personas no necesitan convertirse en alguien diferente. Necesitan volver a encontrarse consigo mismas.</p>
            <p>Comencé a profundizar en el bienestar integral, el autoconocimiento, la inteligencia emocional, la imagen consciente y el desarrollo humano. Pero cuanto más aprendía, más clara se volvía una idea: no podemos trabajar únicamente la mente y olvidar las emociones, ni hablar de éxito sin hablar de bienestar.</p>
            <p className="story-emphasis">Así nació VSBTI®. No como una marca. No como un proyecto empresarial. Sino como la expresión de una filosofía de vida.</p>
            <p>Hoy, a través de formaciones, recursos, herramientas e historias, continúo desarrollando espacios donde las personas puedan conocerse mejor, fortalecer su confianza y avanzar con mayor claridad hacia la vida que desean construir.</p>
          </Reveal>

          <Reveal className="story-questions">
            <p className="story-questions-title">En este espacio descubrirás</p>
            <ul>
              <li>¿Quién es Viviana?</li>
              <li>¿Por qué hace lo que hace?</li>
              <li>¿Qué cree?</li>
              <li>¿Cómo trabaja?</li>
              <li>¿Qué experiencia tiene?</li>
              <li>¿Por qué creó VSBTI®?</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="room-divider" />

      <section className="room room-sand pmv-room">
        <div className="container pmv-grid">
          <Reveal className="pmv-card">
            <span className="pmv-icon">🎯</span>
            <h3>Mi propósito</h3>
            <p>Acompañar a las personas a regresar a su raíz, descubrir su esencia, fortalecer su identidad y construir un legado coherente con quienes realmente son.</p>
          </Reveal>
          <Reveal className="pmv-card" style={{ transitionDelay: '80ms' }}>
            <span className="pmv-icon">🌱</span>
            <h3>Mi misión</h3>
            <p>Crear espacios, herramientas y experiencias que faciliten procesos de bienestar, autoconocimiento y transformación integral. Mi misión no consiste únicamente en enseñar: consiste en acompañar, inspirar y facilitar.</p>
          </Reveal>
          <Reveal className="pmv-card" style={{ transitionDelay: '160ms' }}>
            <span className="pmv-icon">🧭</span>
            <h3>Mi visión</h3>
            <p>Construir un ecosistema humano y digital que inspire a miles de personas a desarrollar su potencial, fortalecer su identidad y generar un impacto positivo en sus vidas.</p>
          </Reveal>
        </div>
      </section>

      <section className="room values-room">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Mis valores</p>
            <h2>Las raíces que sostienen cada decisión</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} className="value-card" style={{ transitionDelay: `${i * 60}ms` }}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="room room-earth identity-room">
        <div className="container identity-grid">
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--honey-light)' }}>Identidad profesional</p>
            <h2>Viviana Sáenz</h2>
            <p className="identity-role">Arquitecta Integral de Marcas Humanas, Experiencias Digitales y Transformación Estratégica</p>
            <ul className="identity-list">
              <li>Psicóloga Holística · Escritora y Formadora Digital</li>
              <li>Fundadora de Viviana Sáenz Bienestar y Transformación Integral</li>
              <li>Creadora del Método VSBTI®</li>
              <li>Directora Académica de Programas VSBTI® en Ecommerce, Negocios Digitales e IA Aplicada</li>
            </ul>
          </Reveal>
          <Reveal>
            <p className="formacion-title">Formación profesional</p>
            <div className="formacion-tags">
              {formacion.map((f) => <span key={f} className="tag-pill formacion-tag">{f}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="room origin-room">
        <div className="container origin-grid">
          <Reveal>
            <p className="eyebrow">Cómo nació VSBTI®</p>
            <h2>¿Por qué tantas personas terminan alejándose de sí mismas?</h2>
            <p className="origin-text">
              Personas inteligentes, valiosas, llenas de potencial — y sin embargo, personas
              que en algún momento dejan de reconocerse. Se acostumbran a sobrevivir, a
              cumplir expectativas, a funcionar. Pero dejan de escucharse, de verse, de
              sentirse.
            </p>
            <p className="origin-text">
              Y en medio de todas esas historias, también encontré partes de la mía. Quizás
              por eso comprendí algo importante: la mayoría de las personas no necesitan
              convertirse en alguien nuevo. Necesitan volver a encontrarse. Volver a casa.
            </p>
            <p className="origin-text origin-emphasis">
              No una casa física. Sino ese lugar interno donde uno puede sentirse en paz
              consigo mismo, sin necesidad de demostrar nada.
            </p>
            <p className="origin-text">
              Con el tiempo esa visión encontró estructura y dirección, y terminó
              convirtiéndose en la filosofía que hoy guía todo este ecosistema: Raíz, Esencia,
              Identidad y Legado. De esa filosofía nació VSBTI®. Y de VSBTI® nació esta casa.
            </p>
          </Reveal>
        </div>
      </section>

      <JourneyContinues
        intro="Te invito a entrar en el siguiente espacio de esta casa: el Estudio VSBTI®, donde descubrirás la filosofía, los pilares y la metodología que dan vida a todo este ecosistema."
        links={[
          { to: '/estudio', icon: '🧭', label: 'Conocer el Método VSBTI®' },
          { to: '/escuela', icon: '🎓', label: 'Ver formaciones' },
          { to: '/biblioteca', icon: '📚', label: 'Explorar recursos gratuitos' },
        ]}
      />
    </main>
  );
}
