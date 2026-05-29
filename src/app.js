//importamos todo lo necesario
const express = require("express");
const sequelize = require("./config/database");
const { json } = require("body-parser");

//cremamos la app
const app = express();

//middlewares
app.use(express.json);

//puerto
const PORT = 5005;
//ruta para probar
app.get("/", (req, res) => {
  res.send("🚀 API funcionando");
});

//levantamos el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
