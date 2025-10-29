@echo off
echo ========================================
echo   Jhonatan da Silva - Portfolio
echo   Iniciando servidor de desenvolvimento...
echo ========================================
echo.

if not exist "node_modules\" (
    echo Instalando dependencias...
    call npm install
    echo.
)

echo Iniciando servidor...
echo O site abrira em: http://localhost:5173
echo.
echo Pressione Ctrl+C para parar o servidor
echo ========================================
echo.

call npm run dev


