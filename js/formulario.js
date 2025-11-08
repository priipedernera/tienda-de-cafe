var form = document.querySelector("form");
var nombreInput = document.getElementById("nombre");
var emailInput = document.getElementById("email");
var mensajeInput = document.getElementById("mensaje");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var nombre = nombreInput.value.trim();
        var email = emailInput.value.trim();
        var mensaje = mensajeInput.value.trim();
        if (!nombre || !email || !mensaje) {
            alert("⚠️ Por favor, completá todos los campos antes de enviar.");
            return;
        }
        var datos = { nombre: nombre, email: email, mensaje: mensaje };
        fetch("http://localhost:3000/enviar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos),
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("Respuesta del servidor:", data);
            alert("✅ Datos enviados correctamente");
            form.reset();
        })
            .catch(function (err) {
            console.error("Error al enviar:", err);
            alert("❌ Ocurrió un error al enviar los datos");
        });
    });
}
