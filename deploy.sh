#!/bin/bash
# Script de despliegue para VSBTI - Frontend + Backend

echo "🚀 VSBTI Deployment Script"
echo "=================================="
echo ""
echo "Este script prepara el proyecto para despliegue:"
echo "  - Frontend: Vercel"
echo "  - Backend: Railway"
echo ""

# Paso 1: Verificar requisitos
echo "✓ Verificando requisitos..."
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado"
    exit 1
fi

if ! command -v dotnet &> /dev/null; then
    echo "❌ .NET no está instalado"
    exit 1
fi

echo "✓ Todos los requisitos están instalados"
echo ""

# Paso 2: Preparar Frontend
echo "📦 Preparando Frontend..."
cd vsbti/frontend
npm install
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error en la compilación del frontend"
    exit 1
fi
cd ../..
echo "✓ Frontend compilado exitosamente"
echo ""

# Paso 3: Verificar Backend
echo "🔧 Verificando Backend..."
cd vsbti/backend/VsbtiApi
dotnet restore
if [ $? -ne 0 ]; then
    echo "❌ Error en dotnet restore"
    exit 1
fi
cd ../../..
echo "✓ Backend verificado"
echo ""

# Paso 4: Git
echo "📝 Preparando commit..."
git add .
git commit -m "chore: deployment preparation - $(date -u +%Y-%m-%d_%H:%M:%S)"
if [ $? -ne 0 ]; then
    echo "⚠️  No hay cambios para commitear o error en git"
fi

# Paso 5: Push
echo "🔄 Haciendo push a GitHub..."
git push origin main
if [ $? -ne 0 ]; then
    echo "❌ Error en git push"
    exit 1
fi
echo "✓ Push exitoso"
echo ""

echo "=================================="
echo "✅ Proyecto listo para despliegue"
echo ""
echo "Próximos pasos:"
echo "1. Ve a https://railway.app"
echo "2. Conecta tu repositorio (será automático si tienes cuenta)"
echo "3. Railway deployará el backend automáticamente"
echo "4. Ve a https://vercel.com"
echo "5. Vercel deployará el frontend automáticamente"
echo ""
echo "Después de ambos deploys:"
echo "6. En Vercel Settings > Environment Variables:"
echo "   VITE_API_URL = https://tu-backend-railway.railway.app/api"
echo "7. Haz un redeploy en Vercel"
echo ""
