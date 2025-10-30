// server.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/enviar", (req, res) => {
  const datos = req.body;

  // Leer archivo existente o crear uno nuevo
  let contenido = [];
  if (fs.existsSync("datos.json")) {
    contenido = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
  }

  // Agregar nuevo registro
  contenido.push(datos);

  // Guardar en archivo local
  fs.writeFileSync("datos.json", JSON.stringify(contenido, null, 2));

  res.json({ mensaje: "Datos recibidos correctamente", datos });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
