# 🚀 VSBTI - Guía Rápida de Despliegue

**El proyecto ya está listo para despliegue. Solo sigue estos pasos:**

---

## 📌 En 5 minutos

### 1️⃣ Backend en Railway (2 min)
```
1. Ve a https://railway.app (crea cuenta si no tienes)
2. Click "New Project" → "Deploy from GitHub"
3. Selecciona tu repositorio VSBTI-proyecto
4. Railway detectará que es .NET → "Deploy Now"
5. Copia la URL que te asigna (ej: https://vsbti-api-xxx.railway.app)
```

### 2️⃣ Frontend en Vercel (3 min)
```
1. Ve a https://vercel.com (crea cuenta si no tienes)
2. Importa el repositorio VSBTI-proyecto
3. En Settings > Environment Variables, agrega:
   VITE_API_URL = [tu-url-de-railway]/api
4. Ve a Deployments, haz clic en el último, "Redeploy"
5. ¡Listo! Verifica en https://vsbti.vercel.app
```

---

## 🧪 Verificar que funciona

### Backend ✅
Abre en el navegador:
```
https://tu-url-railway.railway.app/swagger
```
Deberías ver la interfaz de Swagger (documentación interactiva).

### Frontend ✅
Abre: `https://vsbti.vercel.app`
- La página debe cargar
- Abre DevTools (F12) → Network
- Recarga (Ctrl+R)
- Busca `/api/posts` - debe tener status 200

---

## 📁 Archivos de Despliegue

Ya están configurados en el repositorio:

| Archivo | Función |
|---------|---------|
| `vercel.json` | Configuración para Vercel |
| `railway.json` | Configuración para Railway |
| `vsbti/frontend/.env.production` | Variables de producción |
| `vsbti/backend/VsbtiApi/Program.cs` | CORS configurado ✅ |
| `vsbti/backend/VsbtiApi/appsettings.Production.json` | Config producción ✅ |

---

## 🔗 Documentación Detallada

Usa estos archivos si necesitas más ayuda:

- **[RAILWAY_DEPLOYMENT.md](RAILWAY_DEPLOYMENT.md)** - Guía completa de Railway
- **[VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)** - Guía original de Vercel
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Checklist para verificar todo

---

## ⚠️ Problemas Comunes

### "Sitio no conecta a la API"
→ Verifica que `VITE_API_URL` esté bien en Vercel Settings (sin typos)

### "CORS Error"
→ Mismo problema. La URL está mal configurada.

### "503 Bad Gateway"
→ Railway todavía está desplegando. Espera 5 minutos.

### "Datos vacíos"
→ Es normal. Railway usa BD efímera. Los datos se crean al iniciar.

---

## ✅ Cuando todo funciona

**URLs finales:**
- 🌐 Frontend: https://vsbti.vercel.app
- 🔌 API: https://vsbti-api-xxx.railway.app
- 📖 Docs: https://vsbti-api-xxx.railway.app/swagger

**Pasos completados:**
- ✅ Backend corriendo en Railway
- ✅ Frontend corriendo en Vercel
- ✅ Variables de entorno configuradas
- ✅ CORS habilitado
- ✅ Base de datos funcionando

---

## 💡 Próximos Pasos (Opcionales)

1. **Agregar dominio personalizado** en Vercel
2. **PostgreSQL persistente** en Railway (para guardar datos)
3. **CI/CD automático** con GitHub Actions
4. **Monitoreo** en tiempo real

Necesitas más ayuda? Lee la documentación detallada en los archivos `.md` de este repositorio.

