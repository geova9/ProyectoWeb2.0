// FILTRO DE HOBBIES
const buscador = document.getElementById("buscador-hobbies");
const listaHobbies = document.getElementById("lista-hobbies");

buscador.addEventListener("input", () => {
  const texto = buscadorHobbies.value.toLowerCase();
  const hobbies = listaHobbies.getElementsByClassName("hobby");

  for (let hobby of hobbies) {
    const contenido = hobby.textContent.toLowerCase();
    hobby.style.display = contenido.includes(texto) ? "block" : "none";
  }
});

// FILTRO DE PROYECTOS
const buscadorProyectos = document.getElementById("buscador-proyectos");
const listaProyectos = document.getElementById("lista-proyectos");

buscador.addEventListener("input", () => {
  const texto = buscadorHobbies.value.toLowerCase();
  const proyectos = listaHobbies.getElementsByClassName("proyecto");

  for (let proyecto of proyectos) {
    const contenido = proyecto.textContent.toLowerCase();
    proyecto.style.display = contenido.includes(texto) ? "block" : "none";
  }
});



// VALIDACIÓN DEL FORMULARIO
const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se envíe directamente

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor, introduce un correo válido.");
    return;
  }

  alert("¡Mensaje enviado con éxito!");
  formulario.reset(); // Limpia los campos
});
