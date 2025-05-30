(() => {
  const input = document.getElementById('buscador');
  const listaSugerencias = document.getElementById('busca-sugerencias');
  const btn = document.getElementById('btnBuscar');

  // Mapa de términos “flattened” → rutas
  const rutas = {
    sobremi: '/HTML/sobreMi.html',
    hobbies: '/HTML/hobbies.html',
    proyectos: '/HTML/proyectos.html',
    contacto: '/HTML/contacto.html',
    // añade más según necesites
  };

  //Sugerencias a mostrar según se escribe
  const sugerencias = ["Sobre mi", "Hobbies", "Proyectos", "Contacto"];

  function buscarYRedirigir() {
    const termino = input.value.trim().toLowerCase();
    if (!termino) return;

    // Elimina todos los espacios para formar la clave
    const clave = termino.replace(/\s+/g, '');

    if (rutas[clave]) {
      window.location.href = rutas[clave];
    } else {
      alert(`No existe la sección “${termino}”.`);
    }
  }

  // Enter en el input
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      buscarYRedirigir();
      e.preventDefault();
    }
  });

  // Sugerencias según se escribe
  input.addEventListener('input', e => {
    mostrarSugerencias();
  });

  // Sugerencias cuando se hace click en el input
  input.addEventListener('mousedown', e => {
    if(listaSugerencias.style.display === "none"){ // Solo mostrarlas si no están ya visibles
      mostrarSugerencias();
    }
  });

  // Ocultar las sugerencias cuando se hace click fuera del campo de texto o de las sugerencias
  document.addEventListener("mousedown", e => {
    if (!input.contains(e.target) && !listaSugerencias.contains(e.target)) {
      listaSugerencias.style.display = "none";
    }
  });

  // Click en el botón
  if (btn) {
    btn.addEventListener('click', buscarYRedirigir);
  }


  function asignarSugerencia(sugerencia) {
    input.value = sugerencia;
    listaSugerencias.style.display = "none";
    input.focus();
  }

  function mostrarSugerencias() {
    const valor = input.value.toLowerCase().trim();

    if (!valor) {
      listaSugerencias.style.display = "none";
      return;
    }

    listaSugerencias.innerHTML = ""; // Vaciamos las sugerencias
    const sugerenciasFiltradas = sugerencias.filter(s => s.toLowerCase().includes(valor));
    // Añadimos todas las sugerencias a la lista
    sugerenciasFiltradas.forEach(sugerencia => {
      const li = document.createElement("li");
      li.textContent = sugerencia;
      li.addEventListener('click', () => {
        asignarSugerencia(sugerencia);
      });
      listaSugerencias.appendChild(li);
    });

    listaSugerencias.style.display = sugerenciasFiltradas.length > 0 ? "block" : "none";
  }
})();