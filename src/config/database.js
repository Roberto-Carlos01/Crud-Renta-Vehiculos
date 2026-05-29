//importamos sequalize
const { Sequelize } = require("sequelize");

//conexion con la base de datos a traves de sequlize
const PORT = 5005;
const HOST = "localhost";
const DATABASE = "alquiler_vehiculos";
const sequelize = new Sequelize(DATABASE, "root", "", {
  host: HOST,
  dialect: "mysql",
});

async function testConectionSeq() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a MySQL exitosa!");
  } catch (error) {
    console.error("❌ Error al conectar con MySQL:");
    console.error(error.message);
    console.error("\nPosibles causas:");
    console.error("- XAMPP no está encendido");
    console.error("- MySQL no está corriendo");
    console.error('- La base de datos "alquiler_vehiculos" no existe');
    console.error("- Usuario o contraseña incorrectos");
  }
}

testConectionSeq();

module.exports = sequelize;
