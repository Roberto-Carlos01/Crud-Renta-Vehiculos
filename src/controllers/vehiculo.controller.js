const vehiculoService = require("./../services/vehiculos.service");

async function getVehiculos(req, res) {
  try {
    const vehiculos = await vehiculoService.getVehiculos();
    res.json(vehiculos);
  } catch (error) {
    console.error("Error al obtener vehiculos:", error);
    res.status(500).json({ menssage: "Error al obtener los vehiculos" });
  }
}
async function getVehiculoForId(req, res) {
  const id = req.params.id;
  const vehiculo = await vehiculoService.getVehiculoForId(id);
  if (vehiculo) {
    res.status(200).json(vehiculo);
  }
  try {
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: "Vehiculo no encontrado",
    });
  }
}
async function createVehiculo(req, res) {
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

  const resultado = await vehiculoService.createVehiculo(
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
  console.log("Cliente ", nombre, "Adicionado exitosamente");
  res.status(201).json(cliente);
  try {
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
    const resultado = await vehiculoService.updateVehiculo(
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
  } catch (error) {}
}
async function deleteVehiculo(req, res) {
  try {
  } catch (error) {}
}

module.exports = {
  getVehiculos,
  getVehiculoForId,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
};
