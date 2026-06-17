// Cliente API hacia el backend ASP.NET Core.
// Si el backend no está disponible (no corriendo, CORS, etc.) cae automáticamente
// a los datos locales en /src/data, para que el frontend funcione de forma standalone.

import { posts as fallbackPosts } from '../data/blog.js';
import { products as fallbackProducts } from '../data/products.js';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5080/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${res.status}: ${text || res.statusText}`);
  }
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return null;
}

async function withFallback(fn, fallback) {
  try {
    return await fn();
  } catch (err) {
    console.warn('[api] usando datos locales de respaldo:', err.message);
    return fallback;
  }
}

export async function getPosts() {
  return withFallback(() => request('/posts'), fallbackPosts);
}

export async function getProducts() {
  return withFallback(() => request('/products'), fallbackProducts);
}

export async function subscribeNewsletter(email) {
  return withFallback(
    () => request('/newsletter', { method: 'POST', body: JSON.stringify({ email }) }),
    { ok: true, simulated: true }
  );
}

export async function sendContactMessage(payload) {
  return withFallback(
    () => request('/contact', { method: 'POST', body: JSON.stringify(payload) }),
    { ok: true, simulated: true }
  );
}

export async function sendTalentProposal(payload) {
  return withFallback(
    () => request('/talents', { method: 'POST', body: JSON.stringify(payload) }),
    { ok: true, simulated: true }
  );
}
