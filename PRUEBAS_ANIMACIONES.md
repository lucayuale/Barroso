# Pruebas y límites

## Ejecutadas

- `node --check app.js`, `node --check config.js` y `node --check motion.js`: PASS.
- `node tests/verify-motion.mjs`: PASS. Recursos locales, anclas, IDs, claves ES/EN, idioma inicial, helpers de filtros y URLs y comparación SHA-256 de configuración, CSS original y ocho fotografías.
- Chrome: seis contenedores reales de 320, 375, 390, 768, 1024 y 1440 px mediante iframe. Sin overflow horizontal en los seis. El área útil puede ser 15 px menor por la barra vertical del navegador.
- Vista de escritorio y móvil: portada, jerarquía y fotos conservadas. Comparación de alto/ancho de las nueve secciones entre original y entrega en 390 px, mismo idioma: coincidencia exacta.
- ES → EN instantáneo y persistencia al volver a cargar; retorno a ES: PASS.
- Menú móvil: abrir mediante interacción real, cerrar con Escape: PASS.
- Galería: filtro Competition muestra tres imágenes; All restaura seis. Lightbox 1/3 → 2/3 con flecha derecha; Escape cierra y devuelve foco a la foto: PASS.
- Apariciones reales: la portada queda visible, los elementos fuera de pantalla esperan y las fotos se revelan al llegar a su sección. Las tarjetas regeneradas por idioma y filtros se registran nuevamente.
- Contacto: enlaces de correo, WhatsApp e Instagram conservados y visibles. No se enviaron mensajes externos.
- Las nueve imágenes con src de la página, incluyendo usos repetidos, cargaron durante el recorrido.
- Alternativas sin JS, sin IntersectionObserver y con movimiento reducido: comprobadas en fixtures locales separados, no incluidos en el ZIP. La fixture reducida fuerza la rama JS y las reglas CSS equivalentes; no se cambió la preferencia del sistema operativo del navegador. Contenido visible y sin parallax.
- Consola: no se observaron errores de la aplicación en la versión normal. El entorno emite errores propios de su extensión de navegador; no corresponden al sitio. La fixture con IntersectionObserver definido como undefined activa intencionadamente el fallback seguro.
- ZIP: integridad CRC y rutas publicables verificadas; sin cachés, node_modules, fixtures ni credenciales agregadas.

## Pendientes manuales

- Revisar en Safari/iOS y en un Android físico: se probó Chrome con anchos responsive, no teléfonos físicos.
- Confirmar visualmente en el equipo del usuario la preferencia nativa del sistema `prefers-reduced-motion` (se probaron las ramas mediante fixture equivalente).
- Publicación y comprobación en la URL real de GitHub Pages. No se publicaron cambios remotos ni se realizaron envíos a contactos.
- No se hizo una auditoría Lighthouse ni se afirma una puntuación de rendimiento. La capa añadida es JS/CSS nativo y no solicita recursos remotos.

El proyecto recibido no incluía una suite previa de pruebas; se agregó el verificador indicado arriba. Los datos deportivos y la agenda siguen siendo los originales del dosier; esta edición no constituye una actualización o verificación de esa información.
