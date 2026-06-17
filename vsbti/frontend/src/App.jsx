import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Salon from './pages/Salon';
import Estudio from './pages/Estudio';
import Biblioteca from './pages/Biblioteca';
import Arbol from './pages/Arbol';
import Jardin from './pages/Jardin';
import Escuela from './pages/Escuela';
import Tienda from './pages/Tienda';
import Newsletter from './pages/Newsletter';
import Porche from './pages/Porche';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/arbol-de-las-historias" element={<Arbol />} />
        <Route path="/jardin-de-talentos" element={<Jardin />} />
        <Route path="/escuela" element={<Escuela />} />
        <Route path="/vitamina-para-el-alma" element={<Tienda />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/porche" element={<Porche />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
