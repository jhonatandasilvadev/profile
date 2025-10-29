@echo off
echo ========================================
echo   Git Setup - Portfolio Jhonatan
echo ========================================
echo.

REM Verificar se a foto existe
if not exist "public\profile-photo.png" (
    if not exist "public\profile-photo.jpg" (
        echo [ERRO] Foto de perfil nao encontrada!
        echo.
        echo Por favor, salve sua foto em:
        echo   public\profile-photo.png ou public\profile-photo.jpg
        echo.
        pause
        exit /b 1
    )
)

echo [1/6] Instalando gh-pages...
call npm install -D gh-pages

echo.
echo [2/6] Inicializando Git...
git init

echo.
echo [3/6] Adicionando arquivos...
git add .

echo.
echo [4/6] Criando commit inicial...
git commit -m "Initial commit: Portfolio completo"

echo.
echo [5/6] Conectando ao repositorio...
git remote add origin https://github.com/jhonatandasilvadev/profile.git
git branch -M main

echo.
echo [6/6] Fazendo push para GitHub...
git push -u origin main

echo.
echo ========================================
echo   SUCESSO!
echo ========================================
echo.
echo Proximo passo:
echo 1. Acesse: https://github.com/jhonatandasilvadev/profile
echo 2. Va em Settings - Pages
echo 3. Selecione: GitHub Actions
echo 4. Aguarde 2-3 minutos
echo.
echo Seu site estara em:
echo https://jhonatandasilvadev.github.io/profile/
echo.
pause

