// -----------------------------
// Replicando un Temporizador
// -----------------------------

// 1. Variables de control
let tiempo = 0;         // contador
let intervalo = null;   // referencia al intervalo

// 2. Función de inicio
function iniciarTimer() {
  console.log("Temporizador iniciado...");

  // 3. Temporizador con setInterval
  intervalo = setInterval(() => {
    if (tiempo < 10) {
      console.log(tiempo); // 4. Conteo ascendente
      tiempo++;
    } else {
      // 5. Condición de parada
      console.log("¡Conteo completado! Se ha detenido.");
      clearInterval(intervalo);
      tiempo = 0; // opcional: reiniciar contador
    }
  }, 1000); // ejecuta cada 1 segundo (1000 ms)
}

// Llamar la función para iniciar el temporizador automáticamente
iniciarTimer();
