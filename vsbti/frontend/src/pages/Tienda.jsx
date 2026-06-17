import { useEffect, useMemo, useState } from 'react';
import { Reveal } from '../components/useReveal';
import JourneyContinues from '../components/JourneyContinues';
import { getProducts } from '../api/client';
import { productCategories } from '../data/products';
import './InnerPage.css';
import './Tienda.css';

export default function Tienda() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    getProducts().then((data) => {
      if (mounted) {
        setProducts(data || []);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Tienda VSBTI® · Catálogo</p>
            <h1>✨ Vitamina para el Alma</h1>
            <p className="page-sub">
              Recursos digitales y físicos que acompañan tu proceso de bienestar y transformación.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="room tienda-intro-room">
        <div className="container tienda-intro-grid">
          <Reveal>
            <p>
              Cada producto de esta tienda nació para acompañarte en algún momento del
              recorrido: ebooks, cuadernos de trabajo, planners y packs completos, diseñados
              con la misma filosofía que sostiene esta casa: Raíz, Esencia, Identidad y Legado.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="room room-sand shop-room">
        <div className="container shop-layout">
          <aside className="shop-sidebar">
            <p className="shop-sidebar-title">Categorías</p>
            <button
              className={`cat-link ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Todo el catálogo
            </button>
            {productCategories.map((c) => (
              <button
                key={c.slug}
                className={`cat-link ${activeCategory === c.slug ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(c.slug)}
              >
                {c.icon} {c.name}
              </button>
            ))}

            <button className="cart-toggle" onClick={() => setCartOpen((v) => !v)}>
              🛒 Carrito ({cartCount})
            </button>
          </aside>

          <div className="shop-main">
            {loading ? (
              <p className="blog-loading">Cargando catálogo…</p>
            ) : (
              <div className="products-grid">
                {filtered.map((p, i) => (
                  <Reveal key={p.id} className="product-card" style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
                    {p.featured && <span className="product-badge">Destacado</span>}
                    <span className="tag-pill">{p.type}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="product-footer">
                      <span className="product-price">€{p.price.toFixed(2)}</span>
                      {p.amazon ? (
                        <a
                          href="https://www.amazon.es"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-secondary product-btn"
                        >
                          Ver en Amazon
                        </a>
                      ) : (
                        <button className="btn btn-primary product-btn" onClick={() => addToCart(p)}>
                          Añadir
                        </button>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {cartOpen && (
        <div className="cart-drawer">
          <div className="cart-drawer-head">
            <h3>Tu carrito</h3>
            <button onClick={() => setCartOpen(false)} aria-label="Cerrar carrito" className="cart-close">✕</button>
          </div>
          {cart.length === 0 ? (
            <p className="cart-empty">Tu carrito está vacío.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id}>
                    <div>
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-qty">x{item.qty} · €{(item.price * item.qty).toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="cart-remove" aria-label={`Quitar ${item.name}`}>✕</button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary cart-checkout" type="button">
                Continuar (demo, sin pagos reales)
              </button>
            </>
          )}
        </div>
      )}

      <JourneyContinues
        intro="Si encontraste un recurso que resuena con tu momento actual, también podés profundizar en otros espacios de esta casa."
        links={[
          { to: '/biblioteca', icon: '📚', label: 'Biblioteca gratuita' },
          { to: '/escuela', icon: '🎓', label: 'Escuela VSBTI®' },
          { to: '/newsletter', icon: '📬', label: 'Suscribirme a novedades' },
        ]}
      />
    </main>
  );
}
