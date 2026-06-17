# VSBTI® — Mi Casa, Tu Casa

Ecosistema digital de Viviana Sáenz (VSBTI®): sitio institucional + tienda + blog dinámico.

Proyecto compuesto por dos partes independientes:

- `frontend/` — React + Vite (SPA con 10 secciones, tienda con carrito básico, blog dinámico)
- `backend/VsbtiApi/` — ASP.NET Core 8 Web API (EF Core + SQLite) con endpoints REST

El frontend funciona **standalone**, sin necesidad del backend: si la API no está corriendo,
usa automáticamente datos locales de ejemplo (ver `src/api/client.js`). Para tener todo
conectado de extremo a extremo (formularios guardando datos reales, blog/tienda servidos
desde la base de datos), corré ambos.

---

## 1. Requisitos previos

- **Node.js 18+** y npm → https://nodejs.org
- **.NET 8 SDK** → https://dotnet.microsoft.com/download/dotnet/8.0
  (verificá con `dotnet --version`, debe mostrar `8.x.x`)

---

## 2. Backend (ASP.NET Core API)

```bash
cd backend/VsbtiApi
dotnet restore
dotnet run
```

La primera vez que corre, EF Core crea automáticamente el archivo `vsbti.db` (SQLite) con
los datos de ejemplo (posts del blog y productos de la tienda) ya cargados.

La API queda escuchando en **http://localhost:5080**.
Documentación interactiva (Swagger) en **http://localhost:5080/swagger**.

### Endpoints disponibles

| Método | Ruta                  | Descripción                              |
|--------|-----------------------|-------------------------------------------|
| GET    | `/api/posts`           | Lista de posts del blog (`?category=` opcional) |
| GET    | `/api/posts/{id}`      | Detalle de un post                        |
| GET    | `/api/products`        | Lista de productos (`?category=` opcional) |
| GET    | `/api/products/{id}`   | Detalle de un producto                    |
| POST   | `/api/newsletter`      | Alta de suscriptor `{ "email": "..." }`   |
| POST   | `/api/contact`         | Mensaje de contacto                       |
| POST   | `/api/talents`         | Propuesta del Jardín de Talentos          |

Si querés cambiar el puerto, editá `Properties/launchSettings.json` (`applicationUrl`).

---

## 3. Frontend (React + Vite)

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Se abre en **http://localhost:5173**.

Por defecto el frontend apunta a `http://localhost:5080/api`. Si cambiaste el puerto del
backend, copiá `.env.example` a `.env` y ajustá `VITE_API_URL`.

```bash
cp .env.example .env
```

### Build de producción

```bash
npm run build      # genera frontend/dist
npm run preview    # sirve el build localmente para probarlo
```

---

## 4. Estructura del proyecto

```
vsbti/
├── backend/
│   └── VsbtiApi/
│       ├── Controllers/      → Posts, Products, Newsletter, Contact, Talents
│       ├── Models/           → Entidades EF Core
│       ├── Data/             → DbContext + datos de ejemplo (seed)
│       ├── DTOs/              → DTOs de entrada de los formularios
│       └── Program.cs        → arranque, CORS, Swagger, SQLite
└── frontend/
    └── src/
        ├── pages/            → las 10 "habitaciones" de la casa (Inicio, Salón, Estudio...)
        ├── components/       → Nav, Footer, JourneyContinues, etc.
        ├── api/client.js     → cliente fetch con fallback automático a datos locales
        ├── data/             → datos de ejemplo (mock) usados como fallback
        └── styles/global.css → sistema de diseño (paleta, tipografía, botones)
```

## 5. Notas

- CORS en el backend está configurado para aceptar `http://localhost:5173`. Si servís el
  frontend desde otro origen/puerto, agregalo en `Program.cs` (`AddCors`).
- La tienda es un catálogo + carrito en memoria, **sin pasarela de pago real** (según el
  alcance definido para esta entrega).
- Los formularios (Newsletter, Contacto, Jardín de Talentos) graban en la base SQLite vía
  la API. Si la API no está corriendo, el frontend simula el envío para no romper la UX.
