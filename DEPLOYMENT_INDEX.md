# 📚 VSBTI - Índice de Documentación de Despliegue

Este documento te guía a través de toda la documentación de despliegue disponible.

---

## 🚀 INICIO RÁPIDO (⏱️ 5 minutos)

👉 **Comienza aquí si quieres desplegar YA mismo:**

📄 [DEPLOYMENT_QUICK_START.md](DEPLOYMENT_QUICK_START.md)
- Pasos simples (5 minutos)
- Railway + Vercel
- Verificación rápida
- URLs finales

---

## 📋 CHECKLISTS Y REFERENCIAS

### ✅ Checklist de Despliegue
📄 [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- Pre-despliegue
- Backend en Railway
- Frontend en Vercel
- Verificación final
- Troubleshooting

---

## 📖 GUÍAS DETALLADAS

### 🚂 Railway (Backend)
📄 [RAILWAY_DEPLOYMENT.md](RAILWAY_DEPLOYMENT.md)
- Conexión a GitHub
- Obtener URL de la API
- Configurar en Vercel
- Solucionar problemas
- Agregar PostgreSQL

### ✨ Vercel (Frontend)
📄 [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)
- Requisitos previos
- Configuración de variables
- Deploy automático
- Alternativas (Netlify)

### 🏗️ Arquitectura de Despliegue
📄 [DEPLOYMENT_ARCHITECTURE.md](DEPLOYMENT_ARCHITECTURE.md)
- Diagrama de infraestructura
- Flujo de datos
- Ciclo de despliegue
- Componentes clave
- Variables de entorno

---

## 🔧 ARCHIVOS DE CONFIGURACIÓN

Estos archivos YA ESTÁN CONFIGURADOS y listos para despliegue:

### ✅ Frontend
- `vsbti/frontend/.env.production` - Variables de producción
- `vsbti/frontend/vite.config.js` - Config de build
- `vsbti/frontend/package.json` - Dependencias

### ✅ Backend
- `vsbti/backend/VsbtiApi/Program.cs` - CORS configurado ✅
- `vsbti/backend/VsbtiApi/appsettings.json` - Config local
- `vsbti/backend/VsbtiApi/appsettings.Production.json` - Config Railway
- `vsbti/backend/VsbtiApi/VsbtiApi.csproj` - Proyecto .NET

### ✅ Raíz del Proyecto
- `vercel.json` - Config para Vercel
- `railway.json` - Config para Railway (declarativo)
- `railway.toml` - Config para Railway (alternativa)
- `.gitignore` - Archivos ignorados
- `deploy.sh` - Script de deploy (Linux/Mac)
- `deploy.bat` - Script de deploy (Windows)

---

## 📋 CAMBIOS REALIZADOS

Se hizo una actualización completa del proyecto para que funcione en producción:

### Backend (Program.cs)
✅ **CORS actualizado** - Permite `vercel.app`
```csharp
.SetIsOriginAllowed(origin =>
{
    if (origin.Contains("vercel.app")) return true;
    if (origin.Contains("localhost")) return true;
    return false;
})
```

### Frontend (.env.production)
✅ **Variables de producción** - Lista para Vercel

### Gitignore (.gitignore)
✅ **Actualizado** - Excluye `*.db`, node_modules, etc.

---

## 🎯 PLAN DE ACCIÓN (Paso a Paso)

### Paso 1: GitHub (ahora)
```bash
git add .
git commit -m "Configure VSBTI for production deployment"
git push origin main
```

### Paso 2: Railway (5 minutos)
1. Ve a https://railway.app
2. "New Project" → "Deploy from GitHub"
3. Selecciona VSBTI-proyecto
4. Copia la URL que asigna

### Paso 3: Vercel (5 minutos)
1. Ve a https://vercel.com
2. Importa VSBTI-proyecto
3. Settings > Environment Variables > `VITE_API_URL`
4. Redeploy

### Paso 4: Verificar (2 minutos)
- Backend: Abre `/swagger` en Railway
- Frontend: Abre vsbti.vercel.app
- Datos: Deberían cargar desde la API

---

## 🆘 TROUBLESHOOTING

### Error Común 1: CORS Error
**Problema:** DevTools muestra "CORS policy" error
**Solución:** Verifica `VITE_API_URL` en Vercel Settings (sin typos)
**Docs:** Ver [RAILWAY_DEPLOYMENT.md](RAILWAY_DEPLOYMENT.md#error-cors-policy)

### Error Común 2: 503 Bad Gateway
**Problema:** API retorna 503
**Solución:** Railway todavía está desplegando (espera 5 min)
**Docs:** Ver [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md#troubleshooting-rápido)

### Error Común 3: Datos Vacíos
**Problema:** Blog y tienda están vacíos
**Solución:** Es normal. La BD SQLite se crea al iniciar.
**Docs:** Ver [RAILWAY_DEPLOYMENT.md](RAILWAY_DEPLOYMENT.md#la-bd-de-datos-se-pierde)

---

## 📞 OBTENER AYUDA

| Recurso | URL |
|---------|-----|
| Railway Support | https://railway.app/support |
| Vercel Support | https://vercel.com/support |
| GitHub Issues | Tu repositorio VSBTI |
| Documentación React | https://react.dev |
| Documentación .NET | https://docs.microsoft.com/dotnet |

---

## ✅ VERIFICACIÓN FINAL

Cuando todo funciona correctamente deberías tener:

- ✅ Frontend corriendo en: https://vsbti.vercel.app
- ✅ Backend corriendo en: https://vsbti-api-xxx.railway.app
- ✅ Swagger disponible en: https://vsbti-api-xxx.railway.app/swagger
- ✅ Posts cargando desde `/api/posts` (200 OK)
- ✅ Productos cargando desde `/api/products` (200 OK)
- ✅ Formularios funcionando (Newsletter, Contacto, Talentos)
- ✅ Sin errores CORS en consola
- ✅ Sin errores 503/502 en network

---

## 📈 Próximos Pasos (Opcional)

Una vez que todo funciona:

1. **Dominio personalizado** - Compra un dominio y configúralo en Vercel
2. **PostgreSQL** - Agrega BD persistente en Railway
3. **CI/CD** - Configura GitHub Actions para tests automáticos
4. **Monitoreo** - Configura alertas en Vercel/Railway
5. **Analytics** - Agrega Vercel Analytics para ver estadísticas

---

## 📅 Última Actualización

Proyecto configurado y listo para despliegue:
- ✅ Backend: ASP.NET Core 8 + SQLite
- ✅ Frontend: React 19 + Vite
- ✅ CORS: Configurado para ambos entornos
- ✅ Variables de Entorno: Listas
- ✅ Documentación: Completa

**¿Listo para desplegar?** → [DEPLOYMENT_QUICK_START.md](DEPLOYMENT_QUICK_START.md)

