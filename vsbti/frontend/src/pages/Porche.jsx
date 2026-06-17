import { useState } from 'react';
import { Reveal } from '../components/useReveal';
import { sendContactMessage } from '../api/client';
import './InnerPage.css';
import './Porche.css';

export default function Porche() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(form);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main id="main">
      <header className="room page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Antes de irte, o antes de quedarte</p>
            <h1>🚪 Porche</h1>
            <p className="page-sub">
              Un espacio para despedirnos, para escribir, o simplemente para quedarte un poco más.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="room porche-room">
        <div className="container porche-grid">
          <Reveal className="porche-copy">
            <p>
              Toda casa tiene un porche: un lugar de paso, pero también de encuentro. Si
              tenés una pregunta, una propuesta, o simplemente querés contarnos algo, este es
              el lugar.
            </p>
            <div className="porche-contacts">
              <div>
                <p className="porche-contact-label">Correo</p>
                <p className="porche-contact-value">hola@vsbti.com</p>
              </div>
              <div>
                <p className="porche-contact-label">Instagram</p>
                <p className="porche-contact-value">@nexocode.digital</p>
              </div>
            </div>
          </Reveal>

          <Reveal as="form" className="porche-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label>
              Email
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
            <label>
              Asunto
              <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            </label>
            <label>
              Mensaje
              <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
            {status === 'sent' && <p className="form-feedback is-ok">Gracias por escribir. Te responderemos pronto.</p>}
            {status === 'error' && <p className="form-feedback is-error">Algo salió mal. Probá nuevamente.</p>}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
