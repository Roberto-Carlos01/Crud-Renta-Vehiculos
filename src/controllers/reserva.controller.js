const reservaService = require("../services/reserva.service");
const clienteService = require("../services/cliente.service");
const vehiculoService = require("../services/vehiculos.service");

// En este caso al crear o actualizar una reserva , en el formulario quiero que entre el ci del cliente no su id , en la vida real no se usa el id
// Tambien para el coche , lo mejor seria tener un apartado para elegir vehiculo, pero por ahora lo mas simple seria que se ingrese la placa del vehiculo
// apartir de esos datos , se obtiene el id del cliente y del vehiculo para crear o actualizar la reserva

//devoler la reserva con los datos del vehiculo y del cliente
async function getReservasVC(req, res) {
  try {
    // Obtenemos las reservas con idcliente e idvehiculo
    const reservas = await reservaService.obtenerReservasVC();
    return res.status(200).json(reservas);
  } catch {
    console.error("Error al obtener reservas: ", error);
    res.status(500).json({ message: "Error al obtener las reservas" });
  }
}
async function getReservaVCForID(req, res) {
  try {
    const reserva = await reservaService.obtenerReservaVCForID(req.params.id);
    res.json(reserva);
  } catch {
    console.error("Error al obtener reserva por id:", error);
    res.status(500).json({ message: "Error al obtener la reserva" });
  }
}
async function createReservaVCForID(req, res) {
  try {
    const { fechaIni, fechaFin, total, estado, ciCliente, placaVehiculo } =
      req.body;
    const cliente = await clienteService.obtenerClientePorCI(ciCliente);
    const vehiculo =
      await vehiculoService.obtenerVehiculoPorPlaca(placaVehiculo);
    if (cliente && vehiculo) {
      const reservaCreada = await reservaService.crearReservacion(
        fechaIni,
        fechaFin,
        total,
        estado,
        cliente.idcliente,
        vehiculo.idvehiculo,
      );
      res.status(201).json(reservaCreada);
    } else {
      res.status(400).json({
        message:
          "Cliente o vehiculo no encontrado. Verifique el CI del cliente y la placa del vehiculo",
      });
    }
  } catch {
    console.error("Error al agregar una nueva reserva:", error);
    res.status(500).json({ menssage: "Error al agregarla reserva" });
  }
}
async function updateReservaVCForID(req, res) {
  try {
    const id = req.params.id;
    const { fechaIni, fechaFin, total, estado, ciCliente, placaVehiculo } =
      req.body;
    const cliente = await clienteService.obtenerClientePorCI(ciCliente);
    const vehiculo =
      await vehiculoService.obtenerVehiculoPorPlaca(placaVehiculo);
    if (cliente && vehiculo) {
      const reservaModificada = await reservaService.modificarReservacion(
        fechaIni,
        fechaFin,
        total,
        estado,
        cliente.idcliente,
        vehiculo.idvehiculo,
        id,
      );
      res.json(reservaModificada);
    } else {
      res.status(400).json({
        message:
          "Cliente o vehiculo no encontrado. Verifique el CI del cliente y la placa del vehiculo",
      });
    }
  } catch {
    console.error("Error al modifiar una reserva:", error);
    res.status(500).json({ message: "Error al modificar una resrva" });
  }
}
async function deleteReservaVCForID(req, res) {
  try {
    const id = req.params.id;
    const filasEliminadas = await reservaService.eliminarReservacion(id);
    console.log("Filas eliminadas: ", filasEliminadas);
    if (filasEliminadas > 0) {
      res.json({ message: "Reserva eliminada exitosamente" });
    }
  } catch {
    console.error("Error al eliminar una reserva:", error);
    res.status(500).json({ message: "Error al eliminar una reserva" });
  }
}


module.exports = {
  getReservasVC,
  getReservaVCForID,
  createReservaVCForID,
  updateReservaVCForID,
  deleteReservaVCForID,
};
