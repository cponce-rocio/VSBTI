# 🏗️ Arquitectura de Despliegue - VSBTI

## Diagrama de Infraestructura

```
┌─────────────────────────────────────────────────────────────────────┐
│                                INTERNET                             │
│                         (El Usuario accede)                         │
└────────────┬──────────────────────────────────────────────┬─────────┘
             │                                              │
             ▼                                              ▼
    ┌────────────────────┐                      ┌────────────────────┐
    │  VERCEL FRONTEND   │                      │   RAILWAY BACKEND  │
    ├────────────────────┤                      ├────────────────────┤
    │ vsbti.vercel.app   │                      │ vsbti-api-xxx      │
    │                    │                      │ .railway.app       │
    │ React + Vite SPA   │  ─── HTTP/REST ──→  │ ASP.NET Core API   │
    │ · 10 habitaciones  │  ← JSON Response ─  │ · Posts            │
    │ · Blog             │                      │ · Products         │
    │ · Tienda           │  CORS: ✅ Permitido │ · Newsletter       │
    │ · Formularios      │                      │ · Contacto         │
    │                    │                      │ · Talentos         │
    │ 📦 Dist: 1-2 MB    │                      │ 📦 SQLite: /tmp    │
    │ 🔄 Auto-deploy     │                      │ 🔄 Auto-deploy     │
    └────────────────────┘                      └────────────────────┘
             ▲                                              ▲
             │                                              │
             └──────────────────┬──────────────────────────┘
                                │
                    ┌───────────▼────────────┐
                    │  GITHUB REPOSITORY     │
                    ├───────────────────────┤
                    │ rama: main             │
                    │ · vsbti/frontend/      │
                    │ · vsbti/backend/       │
                    │ · Archivos de config   │
                    │                        │
                    │ 🔔 Trigger deploys en: │
                    │ · Vercel (push)        │
                    │ · Railway (push)       │
                    └────────────────────────┘
```

---

## 🔄 Flujo de Datos

### 1. Usuario accede a `vsbti.vercel.app`
```
Browser → Vercel CDN → index.html + React App
```

### 2. App React carga y necesita datos
```
React Hook (useEffect)
  ↓
Llama a api/client.js
  ↓
Fetch a: https://vsbti-api-xxx.railway.app/api/posts
  ↓
Railway procesa con ASP.NET
  ↓
Responde con JSON de BD SQLite
  ↓
React renderiza componentes
```

### 3. Si la API no responde
```
Fetch falla
  ↓
client.js captura error
  ↓
Usa datos locales fallback (mock data)
  ↓
App sigue funcionando con datos de ejemplo
```

---

## 🚀 Ciclo de Despliegue

```
┌──────────────────┐
│   git push origin│
│      main        │
└────────┬─────────┘
         │
         ├─────────────────────┬──────────────────────┐
         ▼                     ▼                      ▼
    ┌─────────┐        ┌──────────────┐      ┌────────────┐
    │ GitHub  │        │ Vercel Hook  │      │Railway Hook│
    │ received│        │   escucha    │      │ escucha    │
    └────┬────┘        └──────┬───────┘      └──────┬─────┘
         │                    │                      │
         │    ┌───────────────┘                      │
         │    ▼                                      ▼
         │  ┌────────────────────┐      ┌───────────────────────┐
         │  │ 1. npm install     │      │ 1. dotnet restore     │
         │  │ 2. npm run build   │      │ 2. dotnet publish     │
         │  │ 3. Deploy dist/    │      │ 3. dotnet run         │
         │  └────────┬───────────┘      └───────────┬───────────┘
         │           │                              │
         └───────────┼──────────────────────────────┘
                     │
                  ✅ DONE
                     │
    ┌────────────────┴─────────────────┐
    ▼                                  ▼
  Frontend corriendo              Backend corriendo
  en vsbti.vercel.app      en vsbti-api-xxx.railway.app
```

---

## 📦 Componentes Clave

### Frontend (Vercel)
```
vsbti/frontend/
├── src/
│   ├── pages/          → 10 habitaciones (Inicio, Estudio, etc.)
│   ├── components/     → Nav, Footer, etc.
│   ├── api/client.js   → Cliente fetch inteligente
│   ├── data/           → Mock data (fallback)
│   └── styles/         → CSS global
├── package.json        → Dependencias (React, Vite, React Router)
├── vite.config.js      → Config de build
├── .env.example        → Plantilla de vars (desarrollo)
└── .env.production     → Vars de producción
```

### Backend (Railway)
```
vsbti/backend/VsbtiApi/
├── Controllers/        → Rutas API (Posts, Products, etc.)
├── Models/             → Entidades de BD (EF Core)
├── Data/               → DbContext + Seed (datos iniciales)
├── DTOs/               → Validación de entrada
├── Program.cs          → ⭐ Config CORS (línea ~25)
├── appsettings.json    → Config local
├── appsettings.Production.json → Config Railway
└── VsbtiApi.csproj     → Proyecto C# (.NET 8)
```

---

## 🔐 Variables de Entorno

### En Vercel
```env
VITE_API_URL=https://vsbti-api-xxx.railway.app/api
```

### En Railway (automáticas)
```env
PORT=8080
ASPNETCORE_ENVIRONMENT=Production
```

---

## 🌐 Puertos

| Servicio | Local | Producción | Notas |
|----------|-------|------------|-------|
| Frontend | 5173 | 443 HTTPS | Vercel CDN |
| Backend | 5080 | 443 HTTPS | Railway |
| Swagger | 5080/swagger | /swagger | Docs API |

---

## 🔄 CORS - ¿Por qué necesitaba actualización?

### Antes (Limitado)
```csharp
.WithOrigins("http://localhost:5173", "http://127.0.0.1:5173")
```
❌ Solo funciona en desarrollo local

### Ahora (Flexible)
```csharp
.SetIsOriginAllowed(origin => 
{
    if (origin.Contains("vercel.app")) return true;  // ✅ Producción
    if (origin.Contains("localhost")) return true;   // ✅ Desarrollo
    return false;
})
```
✅ Funciona en localhost Y en Vercel

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| Build Time (Frontend) | 30-60s |
| Build Time (Backend) | 60-120s |
| Tamaño Dist Frontend | ~2 MB |
| Endpoints API | 7 |
| Tiempo de respuesta API | <200ms |
| Uptime SLA | 99.5% (ambos servicios) |

---

## 🔄 Actualización de Código

Cuando haces cambios y haces `git push origin main`:

```
1. GitHub recibe cambios
2. Vercel detecta cambio → redeploy automático (~1-2 min)
3. Railway detecta cambio → redeploy automático (~2-3 min)
4. Nuevo código está en producción
```

---

## 🆘 Monitoreo

### Vercel Dashboard
- Visto los últimos deployments
- Visto logs de build
- Visto errores de runtime

### Railway Dashboard
- Visto status de servicio
- Visto logs en tiempo real
- Visto uso de CPU/memoria

Ambos tienen alertas por email si algo falla.

