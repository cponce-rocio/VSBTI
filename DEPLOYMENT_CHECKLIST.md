# ✅ Checklist de Despliegue - VSBTI

Usa esta checklist para asegurar que todo está configurado correctamente.

---

## Pre-Despliegue (Local)

- [ ] Git está configurado y tienes acceso al repositorio
- [ ] Ejecutaste: `git add .` y `git commit -m "Deployment prep"`
- [ ] Ejecutaste: `git push origin main`
- [ ] El código está en GitHub en la rama `main`
- [ ] Verificaste que no hay secrets en los commits
- [ ] `.gitignore` incluye `*.db` (bases de datos locales)

---

## Backend en Railway

### Paso 1: Conectar a Railway
- [ ] Creaste cuenta en https://railway.app
- [ ] Conectaste tu repositorio de GitHub
- [ ] Railway detectó el proyecto .NET
- [ ] Hiciste clic en "Deploy Now"

### Paso 2: Esperar Despliegue
- [ ] Esperaste a que Railway terminara de desplegar (2-3 min)
- [ ] Viste el status "Running" (verde) en Railway
- [ ] Abriste Swagger: `https://tu-url.railway.app/swagger`

### Paso 3: Obtener URL
- [ ] Copiaste la URL pública de Railway (ej: `https://vsbti-api-xxx.railway.app`)
- [ ] Verificaste que `/swagger` funciona en esa URL

---

## Frontend en Vercel

### Paso 1: Conectar a Vercel
- [ ] Importaste el repositorio en https://vercel.com
- [ ] Vercel detectó el proyecto Vite
- [ ] Seleccionaste carpeta raíz o `vsbti/frontend`
- [ ] Hiciste clic en "Deploy"

### Paso 2: Configurar Variables de Entorno
- [ ] Fuiste a **Settings > Environment Variables**
- [ ] Agregaste: `VITE_API_URL = https://tu-api-railway.railway.app/api`
- [ ] Guardaste los cambios

### Paso 3: Redeploy
- [ ] Fuiste a **Deployments**
- [ ] Hiciste clic en el deployment más reciente
- [ ] Seleccionaste "Redeploy"
- [ ] Esperaste a que terminara

---

## Verificación Final

### En Railway
- [ ] Abriste: `https://tu-url-railway.railway.app/swagger`
- [ ] Viste la interfaz de Swagger
- [ ] Probaste un endpoint (ej: GET `/api/posts`)
- [ ] Recibiste respuesta 200 con datos

### En Vercel
- [ ] Abriste: `https://vsbti.vercel.app`
- [ ] La página se cargó sin errores
- [ ] Abriste DevTools (F12) → Network
- [ ] Recargaste (Ctrl+R)
- [ ] Viste peticiones a `/api/posts` y `/api/products` con status 200
- [ ] No hay errores CORS en la consola

### En el navegador
- [ ] El blog carga posts desde la API
- [ ] La tienda carga productos desde la API
- [ ] Los formularios (Newsletter, Contacto) funcionan
- [ ] No hay errores en la consola (F12 → Console)

---

## Troubleshooting Rápido

| Problema | Solución |
|----------|----------|
| CORS Error | Verifica `VITE_API_URL` en Vercel Settings (sin typos) |
| 503 Bad Gateway | Railway tardó. Espera 5 min y recarga. |
| 404 Not Found | La URL está mal. Copia exactamente de Railway. |
| Datos vacíos | Si Railway se reinicia, la BD se borra. Es normal. |
| Cambios no aparecen | Haz git push, Vercel/Railway redeploan automático. |

---

## ¿Todo funciona? ✅

¡Felicidades! El proyecto está desplegado exitosamente.

Próximas opciones:
1. Agregar dominio personalizado en Vercel
2. Configurar PostgreSQL en Railway para persistencia
3. Configurar CI/CD automático (GitHub Actions)
4. Monitoreo y logs en tiempo real

---

## URLs Finales

```
Frontend:  https://vsbti.vercel.app
Backend:   https://vsbti-api-production-xxxx.railway.app
Swagger:   https://vsbti-api-production-xxxx.railway.app/swagger
```

