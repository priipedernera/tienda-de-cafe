// formulario.ts
const form = document.querySelector("form") as HTMLFormElement;
const nombreInput = document.getElementById("nombre") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita el envío por defecto

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();

  // Validación básica
  if (nombre === "") {
    alert("El nombre no puede estar vacío.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresá un correo válido.");
    return;
  }

  // Si todo está bien, enviamos los datos al servidor
  const datos = { nombre, email };

  fetch("http://localhost:3000/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
      alert("✅ Datos enviados correctamente.");
      form.reset();
    })
    .catch((error) => console.error("Error al enviar:", error));
});
