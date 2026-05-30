const { where } = require("sequelize");
const Vehiculo = require("./../models/vehiculo");

async function obtenerVehiculos() {
  try {
    const vehiculos = await Vehiculo.findAll();
    return vehiculos;
  } catch (error) {
    console.error("❌ Error al solicitar vehiculos: ", error);
    throw error;
  }
}
async function obtenerVehiculoPorId(id) {
  try {
    const vehiculo = await Vehiculo.findOne({ where: { idvehiculo: id } });
    return vehiculo;
  } catch (error) {
    console.error("❌ Error al obtener vehiculo por id : ", error);
    throw error;
  }
}
async function crearVehiculo(
  marca,
  modelo,
  anio,
  precioDia,
  placa,
  color,
  foto,
  descripcion,
  disponible,
) {
  try {
    const nuevoVehiculo = await Vehiculo.create({
      marca,
      modelo,
      anio,
      precioDia,
      placa,
      color,
      foto,
      descripcion,
      disponible,
    });
    return nuevoVehiculo;
  } catch (error) {
    console.error("❌ Error al registrar nuevo vehiculo: ", error);
    throw error;
  }
}
async function modificarVehiculo(
  marca,
  modelo,
  anio,
  precioDia,
  placa,
  color,
  foto,
  descripcion,
  disponible,
  id,
) {
  try {
    const resultado = await Vehiculo.update(
      {
        marca,
        modelo,
        anio,
        precioDia,
        placa,
        color,
        foto,
        descripcion,
        disponible,
      },
      { where: { idvehiculo: id } },
    );
    return resultado;
  } catch (error) {
    console.error("❌ Error al editar al vehiculo: ", id);
    throw error;
  }
}
async function eliminarVehiculo(id) {
  try {
    const filasEliminadas = await Vehiculo.destroy({
      where: { idvehiculo: id },
    });
    return filasEliminadas;
  } catch (error) {
    console.error("❌ Error al eliminar cliente: ", id);
    throw error;
  }
}

module.exports = {
  crearVehiculo,
  obtenerVehiculoPorId,
  obtenerVehiculos,
  modificarVehiculo,
  eliminarVehiculo,
};
