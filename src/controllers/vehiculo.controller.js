const vehiculoService = require("./../services/vehiculos.service");

async function getVehiculos(req, res) {
  try {
    const vehiculos = await vehiculoService.obtenerVehiculos();
    res.json(vehiculos);
  } catch (error) {
    console.error("Error al obtener vehiculos:", error);
    res.status(500).json({ menssage: "Error al obtener los vehiculos" });
  }
}
async function getVehiculoForId(req, res) {
  try {
    const id = req.params.id;
    const vehiculo = await vehiculoService.obtenerVehiculoPorId(id);
    if (vehiculo) {
      res.status(200).json(vehiculo);
    }
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: "Vehiculo no encontrado",
    });
  }
}
async function createVehiculo(req, res) {
  try {
    const {
      marca,
      modelo,
      anio,
      precioDia,
      placa,
      color,
      foto,
      descripcion,
      disponible,
    } = req.body;

    const nuevoVehiculo = await vehiculoService.crearVehiculo(
      marca,
      modelo,
      anio,
      precioDia,
      placa,
      color,
      foto,
      descripcion,
      disponible,
    );
    console.log("Vehiculo ", marca, "Adicionado exitosamente");
    res.status(201).json(nuevoVehiculo);
  } catch (error) {
    console.error("Error al agregar un nuevo vehiculo:", error);
    res.status(500).json({ menssage: "Error al agregar el vehiculo" });
  }
}
async function updateVehiculo(req, res) {
  try {
    const {
      marca,
      modelo,
      anio,
      precioDia,
      placa,
      color,
      foto,
      descripcion,
      disponible,
    } = req.body;
    const id = req.params.id;
    const resultado = await vehiculoService.modificarVehiculo(
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
    );
    res.status(200).json(resultado);
  } catch (error) {
    console.error("Error al modificar un vehiculo:", error);
    res.status(500).json({ menssage: "Error al modificar el vehiculo" });
  }
}
async function deleteVehiculo(req, res) {
  try {
    const id = req.params.id;
    const filasEliminadas = await vehiculoService.eliminarVehiculo(id);
    console.log("Vehiculo ", id, "eliminado exitosamente");
    res.status(204).json(filasEliminadas);
  } catch (error) {
    console.error("Error al agregar un nuevo vehiculo:", error);
    res.status(500).json({ menssage: "Error al agregar el vehiculo" });
  }
}

module.exports = {
  getVehiculos,
  getVehiculoForId,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
};
