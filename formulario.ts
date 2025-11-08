const form = document.querySelector<HTMLFormElement>("form");
const nombreInput = document.getElementById("nombre") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const mensajeInput = document.getElementById("mensaje") as HTMLTextAreaElement;

if (form) {
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    if (!nombre || !email || !mensaje) {
      alert("⚠️ Por favor, completá todos los campos antes de enviar.");
      return;
    }

    const datos = { nombre, email, mensaje };

    fetch("http://localhost:3000/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
        alert("✅ Datos enviados correctamente");
        form.reset();
      })
      .catch((err) => {
        console.error("Error al enviar:", err);
        alert("❌ Ocurrió un error al enviar los datos");
      });
  });
}
