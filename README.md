# Agustín Barroso · Web liviana v2

Español predeterminado, inglés seleccionable. El dosier se usó como referencia y no se incluye. Fotografías, trayectoria, galería y propuestas integradas en la web.

Extraer este ZIP. Abrir PowerShell en la carpeta extraída:

```powershell
py -m http.server 8102 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8102/ . Detener con Ctrl+C.

Para GitHub Pages subir index.html, styles.css, app.js, config.js, assets/ y .nojekyll a la raíz de la rama publicada. No requiere Node ni instalación npm. No se publicó ningún repositorio automáticamente.

## Actualización de animaciones

Ver `CAMBIOS_ANIMACIONES.md` para las rutas exactas de reemplazo y `PRUEBAS_ANIMACIONES.md` para resultados y pendientes. No requiere dependencias ni compilación. El ZIP original no se modificó.

### Probar en Windows PowerShell

```powershell
Expand-Archive -LiteralPath "$HOME\Downloads\BARROSO_WEB_ANIMACIONES_LISTO_PARA_GITHUB.zip" -DestinationPath "$HOME\Downloads\Barroso-Animaciones"
Set-Location "$HOME\Downloads\Barroso-Animaciones"
py -m http.server 8096 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8096/`. Mantener la consola abierta. Detener con Ctrl+C.

Verificación opcional, si tenés Node.js:

```powershell
Set-Location "$HOME\Downloads\Barroso-Animaciones"
node .\tests\verify-motion.mjs
```

Para publicar, subir los archivos extraídos a la raíz del repositorio de Barroso, conservando la carpeta `assets`. No hay ningún comando de build.
