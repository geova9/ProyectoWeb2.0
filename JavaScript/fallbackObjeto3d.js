// fallbackObjeto3d.js

const PRIMARY   = 'https://prod.spline.design/gWqUq7KZ5ZptNcJ2/scene.splinecode';
const FALLBACK  = 'https://prod.spline.design/zkIbI928cOtPH13J/scene.splinecode';

function createViewer(url) {
  const v = document.createElement('spline-viewer');
  v.setAttribute('url', url);
  v.setAttribute('embedded', '');
  v.style.width  = '100%';
  v.style.height = '100%';
  return v;
}

const container = document.getElementById('spline-container');
if (!container) {
  console.error('No existe #spline-container en el DOM');
} else {
  // 1) Crea e inyecta sólo el viewer primario
  const primaryViewer = createViewer(PRIMARY);
  container.appendChild(primaryViewer);

  // 2) Si falla la carga de la primaria, la quitamos y ponemos la fallback
  primaryViewer.addEventListener('error', () => {
    console.warn('Carga primaria fallida, usando fallback');
    container.removeChild(primaryViewer);

    const fallbackViewer = createViewer(FALLBACK);
    container.appendChild(fallbackViewer);
  });
}
