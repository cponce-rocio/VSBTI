import { useEffect, useMemo, useState } from 'react';
import { Reveal } from '../components/useReveal';
import JourneyContinues from '../components/JourneyContinues';
import { getPosts } from '../api/client';
import { blogCategories } from '../data/blog';
import './InnerPage.css';
import './Arbol.css';

export default function Arbol() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    let mounted = true;
    getPosts().then((data) => {
      if (mounted) {
        setPosts(data || []);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Blog · Universo VSBTI®</p>
            <h1>🌳 Árbol de las Historias</h1>
            <p className="page-sub">
              Historias, reflexiones y aprendizajes para encontrarte en cada experiencia.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="room intro-arbol-room">
        <div className="container">
          <Reveal className="intro-arbol-text">
            <p>
              Quizás llegaste aquí buscando una historia. Y puede que la encuentres. Pero
              quizás encuentres algo más: una emoción que creías olvidada, o una historia que
              te recuerde que no estás solo en aquello que estás viviendo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="room room-sand blog-room">
        <div className="container">
          <Reveal className="blog-filters" role="group" aria-label="Filtrar por categoría">
            <button
              className={`filter-chip ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Todas las ramas
            </button>
            {blogCategories.map((c) => (
              <button
                key={c.slug}
                className={`filter-chip ${activeCategory === c.slug ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(c.slug)}
              >
                {c.icon} {c.name}
              </button>
            ))}
          </Reveal>

          {loading ? (
            <p className="blog-loading">Cargando historias…</p>
          ) : filtered.length === 0 ? (
            <p className="blog-empty">Todavía no hay historias en esta rama. Volvé pronto.</p>
          ) : (
            <div className="posts-grid">
              {filtered.map((post, i) => {
                const cat = blogCategories.find((c) => c.slug === post.category);
                return (
                  <Reveal key={post.id} className="post-card" style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
                    <span className="tag-pill">{cat ? `${cat.icon} ${cat.name}` : 'Historia'}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <time>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                      <span className="post-read">Leer historia →</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <JourneyContinues
        intro="Si alguna historia ha resonado con vos, quizás sea el momento de seguir explorando otros espacios de esta casa."
        links={[
          { to: '/biblioteca', icon: '📚', label: 'Biblioteca VSBTI®' },
          { to: '/escuela', icon: '🎓', label: 'Escuela VSBTI®' },
          { to: '/newsletter', icon: '📬', label: 'Newsletter VSBTI®' },
        ]}
      />
    </main>
  );
}
