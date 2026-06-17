# 🚀 Guía de Despliegue - VSBTI

## Estado Actual
- ✅ Frontend: Listo para Vercel
- ✅ Backend: Listo para Railway
- ✅ CORS: Configurado para ambos entornos

---

## 📋 Paso 1: Desplegar Backend en Railway

### 1.1 Crear cuenta y proyecto en Railway
1. Ve a https://railway.app
2. Haz clic en "Start New Project"
3. Selecciona "Deploy from GitHub"
4. Conecta tu repositorio

### 1.2 Configurar Railway
Railway detectará automáticamente que es un proyecto .NET. Configura:

**Environment Variables:**
```
ASPNETCORE_ENVIRONMENT=Production
```

### 1.3 Obtener URL de la API
Después del despliegue, Railway te asignará una URL como:
```
https://vsbti-api-production-xxxx.railway.app
```

**Nota esta URL** - la necesitarás en el paso 2.

---

## 📋 Paso 2: Desplegar Frontend en Vercel

### 2.1 Actualizar variables de entorno
En [vercel.com](https://vercel.com):
1. Ve a tu proyecto VSBTI
2. Ve a **Settings > Environment Variables**
3. Agrega:
   ```
   VITE_API_URL = https://tu-api-railway.railway.app/api
   ```
   (Reemplaza `tu-api-railway` con tu URL real de Railway)

### 2.2 Hacer redeploy
1. Ve a **Deployments**
2. Haz clic en el último deployment
3. Selecciona **Redeploy**

Vercel usará las nuevas variables de entorno.

---

## ✅ Verificación

### Probar Backend (Railway)
```bash
curl https://tu-api-railway.railway.app/swagger
```

Deberías ver la interfaz de Swagger.

### Probar Frontend (Vercel)
1. Ve a https://vsbti.vercel.app
2. Abre DevTools (F12)
3. Ve a Network
4. Carga la página
5. Verifica que las llamadas a `/api/posts` y `/api/products` sean exitosas (200 OK)

---

## 🔧 Si algo falla

### Error 503 en Vercel
- Verifica que `VITE_API_URL` esté bien configurada
- Revisa que Railway esté corriendo (`https://tu-api/swagger`)

### Error CORS
- Backend: Verifica `Program.cs` línea ~25 (CORS policy)
- Frontend: Abre DevTools → Console → busca errores CORS

### Base de datos no existe en Railway
- Railway ejecuta automáticamente `EF Core.Database.EnsureCreated()`
- La BD SQLite se crea en `/tmp/vsbti.db` (efímero en Railway)
- Para persistencia, necesitaremos agregar PostgreSQL a Railway (ver paso 3)

---

## 📋 Paso 3 (Opcional): Agregar Base de Datos Persistente

Si quieres que los datos persistan (recomendado):

### 3.1 Agregar PostgreSQL a Railway
1. En tu proyecto Railway
2. Click "Add Service"
3. Selecciona "PostgreSQL"
4. Railway configurará todo automáticamente

### 3.2 Actualizar conexión en Backend
Edita [vsbti/backend/VsbtiApi/appsettings.json](vsbti/backend/VsbtiApi/appsettings.json):

```json
{
  "ConnectionStrings": {
    "Default": "Server=postgres;Port=5432;Database=vsbti;User Id=postgres;Password=$DATABASE_PASSWORD;"
  }
}
```

### 3.3 Redeploy
Railway redeployará automáticamente con PostgreSQL conectada.

---

## 📌 Resumen de URLs

| Servicio | URL | Notas |
|----------|-----|-------|
| Frontend | https://vsbti.vercel.app | Vercel |
| Backend | https://vsbti-api-xxx.railway.app | Railway |
| Swagger | https://vsbti-api-xxx.railway.app/swagger | Documentación API |

---

## 💡 Comandos útiles (Local)

```bash
# Backend
cd vsbti/backend/VsbtiApi
dotnet run

# Frontend (otra terminal)
cd vsbti/frontend
npm install
npm run build
npm run preview

# Con variables de entorno
VITE_API_URL=http://localhost:5080/api npm run dev
```

---

## 📞 Troubleshooting

- **La tienda/blog no carga**: Verifica que la API esté respondiendo
- **Los formularios no guardan datos**: Necesitas PostgreSQL (Paso 3)
- **Cambios no aparecen en Vercel**: Haz un nuevo push a GitHub o redeploy manual

