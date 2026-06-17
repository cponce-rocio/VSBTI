# 🚂 Despliegue en Railway - Guía Completa

Este proyecto está configurado para desplegarse fácilmente en Railway.

---

## 📋 Requisitos

- ✅ Cuenta en [Railway](https://railway.app) (gratuito)
- ✅ Repositorio en GitHub con el código subido
- ✅ El proyecto debe estar en la rama `main`

---

## 🚀 Paso 1: Conectar GitHub a Railway

1. Ve a https://railway.app
2. Haz clic en **"Start New Project"**
3. Selecciona **"Deploy from GitHub"**
4. Conecta tu cuenta de GitHub (Railway te pedirá permisos)
5. Busca el repositorio `VSBTI-proyecto` y selecciónalo
6. Haz clic en **"Deploy Now"**

Railway automáticamente:
- Detectará que es un proyecto .NET 8
- Instalará dependencias
- Compilará el backend
- Ejecutará `dotnet run`

---

## ⚙️ Paso 2: Obtener la URL de la API

Una vez que Railway despliega (toma 2-3 minutos):

1. En el dashboard de Railway, ve a tu proyecto
2. Haz clic en **"Deployments"**
3. Busca un campo como **"RAILWAY_ROUTE_URL"** o **"Public URL"**
4. Copia esa URL (ej: `https://vsbti-api-production-xxxx.railway.app`)

**Importante:** Anota esta URL, la necesitarás en el siguiente paso.

---

## 🖥️ Paso 3: Configurar el Frontend en Vercel

Ahora que el backend está corriendo:

1. Ve a https://vercel.com
2. Importa el repositorio (si no lo has hecho)
3. Ve a **Settings > Environment Variables**
4. Añade una nueva variable:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://tu-url-railway.railway.app/api`
   (Reemplaza con tu URL real de Railway)
5. Haz clic en **"Save"**

---

## 🔄 Paso 4: Hacer un Redeploy en Vercel

1. Ve a **Deployments** en Vercel
2. Busca el deployment más reciente
3. Haz clic en los **3 puntos** (•••) 
4. Selecciona **"Redeploy"**

Vercel usará las nuevas variables de entorno.

---

## ✅ Verificación

### Probar la API en Railway

Abre una terminal y ejecuta:

```bash
curl https://tu-url-railway.railway.app/swagger
```

Deberías ver la interfaz de Swagger (la documentación interactiva de la API).

Alternativa: Abre en el navegador:
```
https://tu-url-railway.railway.app/swagger
```

### Probar el Frontend en Vercel

1. Ve a https://vsbti.vercel.app
2. Abre **DevTools** (F12 en tu navegador)
3. Ve a la pestaña **Network**
4. Recarga la página (Ctrl+R)
5. Filtra por `/api/` en la búsqueda
6. Deberías ver peticiones a `/api/posts` y `/api/products` con estado **200**

Si ves **CORS errors** o **503**, verifica:
- La URL en Vercel Environment Variables
- Que Railway esté en **"Running"** (verde)
- Que no haya typos en la URL

---

## 🔧 Solucionar Problemas

### Error: "Cannot read property 'fetch' from undefined"
- El frontend no puede conectar a la API
- Verifica `VITE_API_URL` en Vercel Settings

### Error: "CORS policy: No 'Access-Control-Allow-Origin' header"
- CORS no está configurado correctamente
- Verifica que `Program.cs` tenga la configuración (ya está hecha)

### Error: "502 Bad Gateway"
- Railway no está corriendo o está tardando
- Espera 5 minutos
- Revisa los logs en Railway: Dashboard → Logs

### La BD de datos se pierde después de redeploy
- Es normal en Railway (efímero)
- Para persistencia, necesitas agregar PostgreSQL (ver abajo)

---

## 💾 (Opcional) Agregar Base de Datos Persistente

Si quieres que los datos se guarden después de redeploys:

### Opción A: PostgreSQL en Railway (Recomendado)

1. En tu proyecto Railway
2. Haz clic en **"Add Service"**
3. Selecciona **"PostgreSQL"**
4. Railway configurará todo automáticamente

La conexión ya estará en las variables de entorno de Railway.

### Opción B: Cambiar en el código del backend

Edita `vsbti/backend/VsbtiApi/Program.cs` y cambia:

```csharp
// Actual:
options.UseSqlite(...)

// Cambiar a:
options.UseNpgsql(Environment.GetEnvironmentVariable("DATABASE_URL"))
```

Luego:
```bash
git add .
git commit -m "Use PostgreSQL for production"
git push origin main
```

Railway automáticamente volverá a desplegar con PostgreSQL.

---

## 📌 Resumen de URLs Finales

| Servicio | URL | Ambiente |
|----------|-----|----------|
| **Frontend** | https://vsbti.vercel.app | Vercel |
| **API** | https://vsbti-api-xxx.railway.app | Railway |
| **Swagger** | https://vsbti-api-xxx.railway.app/swagger | Docs |

---

## 🆘 ¿Sigue sin funcionar?

1. Verifica que hayas subido todo a GitHub (`git push origin main`)
2. Comprueba que ambos servicios estén "Running" (Railway y Vercel)
3. Espera 5 minutos (a veces tarda)
4. Limpia caché del navegador (Ctrl+Shift+Del)
5. Revisa los logs en Railway y Vercel para errores específicos

---

## 📞 Contacto y Soporte

- Railway: https://railway.app/support
- Vercel: https://vercel.com/support
- GitHub: Revisa el repositorio para issues

