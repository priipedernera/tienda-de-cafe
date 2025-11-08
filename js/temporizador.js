// Mostrar la hora actual o un temporizador en pantalla
function iniciarTemporizador() {
  const elemento = document.getElementById("temporizador");
  if (!elemento) return; // Si no existe el elemento, no hace nada

  setInterval(() => {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    elemento.textContent = `Hora actual: ${hora}`;
  }, 1000);
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", iniciarTemporizador);
