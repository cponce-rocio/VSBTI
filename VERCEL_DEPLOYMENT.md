# 🚀 Despliegue en Vercel

Este proyecto está configurado para desplegarse en Vercel. Sigue estos pasos:

## 📋 Requisitos previos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub con el código
- Backend desplegado en otro servicio (ver opciones abajo)

## 🎯 Opción 1: Desplegar solo el Frontend (RECOMENDADO)

### Paso 1: Preparar el repositorio

```bash
# Asegúrate de que el código está en GitHub
git add .
git commit -m "Setup Vercel deployment"
git push origin main
```

### Paso 2: Conectar a Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite

### Paso 3: Configurar Environment Variables

En el dashboard de Vercel, ve a **Settings > Environment Variables** y añade:

```
VITE_API_URL = https://tu-backend-url.com/api
```

### Paso 4: Deploy

Haz clic en "Deploy". Vercel automáticamente:
- Instalará dependencias
- Construirá el frontend
- Desplegará en HTTPS

---

## 🛠️ Opciones para el Backend

Tu backend C# (ASP.NET Core) tiene varias opciones de despliegue:

### Opción A: Azure (Recomendado para .NET)
```
1. Ve a https://portal.azure.com
2. Crea un "App Service"
3. Configura el deploy desde GitHub Actions
4. Usa la URL de Azure como VITE_API_URL en Vercel
```

### Opción B: Railway
```
1. Ve a https://railway.app
2. Crea un nuevo proyecto
3. Conecta tu repositorio
4. Railway detectará el .NET Framework
5. Usa la URL asignada como VITE_API_URL
```

### Opción C: Render
```
1. Ve a https://render.com
2. Crea un "Web Service"
3. Conecta tu repositorio
4. Selecciona ".NET" como runtime
```

### Opción D: Migrando a Node.js (Todo en Vercel)
Si quieres tener TODO en Vercel sin cambiar de proveedor, puedes:
1. Migrar el backend de C# a Node.js/Express
2. Usar Vercel Serverless Functions (api/ folder)

**Contactar** si necesitas ayuda con esta migración.

---

## 🔧 Estructura de Vercel

```
.
├── vercel.json              ← Config de Vercel (ya creado)
├── vsbti/
│   ├── frontend/
│   │   ├── .env.production  ← Variables de producción (ya creado)
│   │   ├── src/
│   │   ├── package.json
│   │   └── vite.config.js
│   └── backend/
│       └── VsbtiApi/        ← Desplegar en otro servicio
```

---

## ✅ Checklist de Despliegue

- [ ] Frontend funcionando localmente: `npm run dev`
- [ ] Build sin errores: `npm run build`
- [ ] Código pusheado a GitHub
- [ ] Proyecto creado en Vercel
- [ ] Environment variable `VITE_API_URL` configurada
- [ ] Backend desplegado en su propio servicio
- [ ] CORS habilitado en el backend para dominio de Vercel

---

## 📱 Testing Post-Deploy

1. Visita tu dominio en Vercel
2. Abre DevTools (F12)
3. Verifica que el frontend carga correctamente
4. Prueba funcionalidades que usan el API
5. Revisa Console para errores de CORS o conexión

---

## 🐛 Troubleshooting

**Error: "Cannot reach API"**
- Verifica que `VITE_API_URL` está correctamente configurado
- Asegúrate que el backend está online
- Revisa CORS en el backend

**Error: "Module not found"**
- Ejecuta `npm install` localmente
- Verifica package.json está en vsbti/frontend/

**Deploy fallido**
- Revisa los logs de Vercel en el dashboard
- Asegúrate que `vite.config.js` está correctamente configurado
- Verifica que no hay errores en el build local

---

## 🚀 Deploy Automático

Cada vez que hagas push a `main`, Vercel automáticamente:
1. Detectará los cambios en GitHub
2. Construirá el frontend
3. Desplegará la nueva versión

¡Listo! Tu sitio está en vivo 🎉

Para preguntas, contacta al equipo o revisa [docs.vercel.com](https://docs.vercel.com)
