const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors({
  origin: ["http://127.0.0.1:5501", "http://localhost:5501"]
}));


// Permitir leer JSON en las peticiones POST
app.use(express.json());

// Conexión a la base de datos SQLite
const db = new sqlite3.Database("./tienda.db");

// Crear la tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS contactos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    email TEXT,
    mensaje TEXT
  )
`);

// Ruta para guardar datos del formulario
app.post("/enviar", (req, res) => {
  const { nombre, email, mensaje } = req.body;
  db.run(
    "INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)",
    [nombre, email, mensaje],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: "Datos guardados correctamente ✅" });
    }
  );
});

// 🟢 Iniciar el servidor una sola vez
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});

