console.log("Temporizador iniciado...");

let contador = 0;
const intervalo = setInterval(() => {
  console.log(contador);
  contador++;

  if (contador > 9) {
    clearInterval(intervalo);
    console.log("¡Conteo completado! Se ha detenido.");
  }
}, 1000);

