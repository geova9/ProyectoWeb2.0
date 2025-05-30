document.addEventListener('DOMContentLoaded', () => {
  // 1) Maneja el toggle de cada dropdown
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', event => {
      event.stopPropagation();         // Evita que el click burbujee al document
      dropdown.classList.toggle('is-open');
    });
  });

  // 2) Cierra todos los dropdowns si se hace clic fuera
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.is-open').forEach(openDropdown => {
      openDropdown.classList.remove('is-open');
    });
  });

  // 3) (Opcional) Cierra el menú si se pulsa Escape
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.dropdown.is-open').forEach(openDropdown => {
        openDropdown.classList.remove('is-open');
      });
    }
  });
});
