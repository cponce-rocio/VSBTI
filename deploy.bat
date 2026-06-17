@echo off
REM Script de despliegue para VSBTI - Frontend + Backend (Windows)

echo.
echo 🚀 VSBTI Deployment Script
echo ==================================
echo.
echo Este script prepara el proyecto para despliegue:
echo   - Frontend: Vercel
echo   - Backend: Railway
echo.

REM Paso 1: Verificar requisitos
echo ✓ Verificando requisitos...

where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Git no está instalado
    exit /b 1
)

where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm no está instalado
    exit /b 1
)

where dotnet >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ .NET no está instalado
    exit /b 1
)

echo ✓ Todos los requisitos están instalados
echo.

REM Paso 2: Preparar Frontend
echo 📦 Preparando Frontend...
cd vsbti\frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error en npm install
    cd ..\..
    exit /b 1
)
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error en la compilación del frontend
    cd ..\..
    exit /b 1
)
cd ..\..
echo ✓ Frontend compilado exitosamente
echo.

REM Paso 3: Verificar Backend
echo 🔧 Verificando Backend...
cd vsbti\backend\VsbtiApi
call dotnet restore
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error en dotnet restore
    cd ..\..\..
    exit /b 1
)
cd ..\..\..
echo ✓ Backend verificado
echo.

REM Paso 4: Git
echo 📝 Preparando commit...
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a:%%b)

call git add .
call git commit -m "chore: deployment preparation - %mydate%_%mytime%"
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️  No hay cambios para commitear o error en git
)

REM Paso 5: Push
echo 🔄 Haciendo push a GitHub...
call git push origin main
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error en git push
    exit /b 1
)
echo ✓ Push exitoso
echo.

echo ==================================
echo ✅ Proyecto listo para despliegue
echo.
echo Próximos pasos:
echo 1. Ve a https://railway.app
echo 2. Conecta tu repositorio (será automático si tienes cuenta)
echo 3. Railway deployará el backend automáticamente
echo 4. Ve a https://vercel.com
echo 5. Vercel deployará el frontend automáticamente
echo.
echo Después de ambos deploys:
echo 6. En Vercel Settings ^> Environment Variables:
echo    VITE_API_URL = https://tu-backend-railway.railway.app/api
echo 7. Haz un redeploy en Vercel
echo.
pause
