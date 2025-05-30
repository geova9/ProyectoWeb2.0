// scroll2.js
document.addEventListener('DOMContentLoaded', () => {
  const setScrollVar = () => {
    // Altura desplazada desde arriba
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Altura total del documento menos la ventana
    const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Fracción entre 0 y 1
    const fraction = maxScroll > 0 ? scrollTop / maxScroll : 0;
    // Actualiza la variable CSS --scroll en <body>
    document.body.style.setProperty('--scroll', fraction);
  };

  // Inicializa el valor al cargar
  setScrollVar();

  // Actualiza en cada scroll con comportamiento pasivo
  window.addEventListener('scroll', setScrollVar, { passive: true });
});
