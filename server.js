const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

// 🟢 Configurar CORS para permitir Live Server
app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"], // permití tus puertos de Live Server
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// 🟢 Conectar o crear la base de datos
const db = new sqlite3.Database("./tienda.db", (err) => {
  if (err) {
    console.error("❌ Error al conectar con la base de datos:", err.message);
  } else {
    console.log("✅ Conectado a la base de datos tienda.db");
  }
});

// 🟢 Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS contactos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    email TEXT,
    mensaje TEXT
  )
`);

// 🟢 Ruta para recibir el formulario
app.post("/enviar", (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  db.run(
    "INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)",
    [nombre, email, mensaje],
    (err) => {
      if (err) {
        console.error("❌ Error al guardar:", err.message);
        return res.status(500).json({ error: "Error al guardar los datos" });
      }
      console.log("📩 Nuevo mensaje guardado:", { nombre, email, mensaje });
      res.json({ mensaje: "Datos guardados correctamente ✅" });
    }
  );
});

// 🟢 Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});

