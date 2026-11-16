# Agustín Barroso — sitio oficial

Sitio web estático de presentación de Agustín Barroso, deportista de MMA de Rosario, Argentina. Incluye español (predeterminado) e inglés, trayectoria, asesorías, galería de seis videos y datos de contacto.

## Archivos

- `index.html`: entrada principal.
- `config.js`: textos, datos, traducciones y configuración.
- `app.js`, `motion.js`, `updates.js`: funcionamiento, navegación y animaciones.
- `styles.css`, `motion.css`, `updates.css`: estilos y diseño adaptable.
- `assets/`: fotografías, imágenes y videos MP4 con sus portadas.
- `.nojekyll`: evita procesamiento innecesario de GitHub Pages.

**No requiere Node.js, npm, bases de datos ni compilación.** No tiene backend ni recibe información de formularios en un servidor propio; los botones derivan a canales de contacto.

## Probar localmente

1. Abrí una terminal en la carpeta que contiene `index.html`.
2. Ejecutá `python -m http.server 8080` (en Windows también puede servir `py -m http.server 8080`).
3. Abrí `http://localhost:8080` en un navegador. Detené el servidor con `Ctrl+C`.

## Subir a un repositorio de GitHub existente

1. Extraé el ZIP de entrega.
2. En GitHub, abrí el **repositorio del sitio de Barroso** (no el de VYB).
3. Entrá a **Add file → Upload files**.
4. Arrastrá **todos los archivos y la carpeta `assets` desde el interior de la carpeta extraída**, no el ZIP comprimido ni una carpeta contenedora. `index.html` debe quedar en la **raíz** del repositorio.
5. Confirmá los cambios con **Commit changes**. Subir los archivos no elimina automáticamente los documentos históricos que ya existieran en el repositorio: si querés limpiarlo completamente, borrá también allí los documentos viejos de actualizaciones, sin borrar los archivos actuales del sitio.
6. Para GitHub Pages, entrá en **Settings → Pages** y seleccioná **Deploy from a branch**, la rama principal y la carpeta `/ (root)`.

URL de prueba habitual: `https://USUARIO.github.io/NOMBRE-REPOSITORIO/`. La URL real depende del usuario y repositorio de GitHub.

## Dominio `.com`

La compra y propiedad del dominio quedan a cargo del titular. Si se usa Cloudflare Registrar, el dominio puede apuntar a GitHub Pages mediante los DNS configurados en Cloudflare. En GitHub Pages, configurar **Settings → Pages → Custom domain** y después **Enforce HTTPS** cuando el certificado esté disponible. No hace falta contratar otro hosting para esta web estática.

Cuando el dominio definitivo esté activo, actualizar el valor `seo.canonical` dentro de `config.js` a la URL pública de la web. No se incluyó un dominio ficticio en el código.

## Comprobación de entrega

El ZIP incluye los seis videos de la galería en `assets/videos/` y sus seis imágenes de portada. Mantener siempre las rutas relativas y los nombres de los archivos. Revisar la página publicada y la reproducción de videos en celular y escritorio después del despliegue.
