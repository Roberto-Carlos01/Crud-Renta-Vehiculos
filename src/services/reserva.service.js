const { Cliente, Vehiculo, Reserva } = require("./../models/index");

async function obtenerReservasVC() {
  try {
    const reservas = await Reserva.findAll({
      include: [Cliente, Vehiculo],
    });
    return reservas;
  } catch (error) {
    console.error("❌ Error al obtener reservas:", error);
    throw error;
  }
}

async function obtenerReservaVCForID(id) {
  try {
    const reserva = await Reserva.findOne({
      where: {
        idreserva: id,
      },
    });

    return reserva;
  } catch (error) {
    console.error("❌ Error al obtener reserva:", error);
    throw error;
  }
}

async function modificarReservacion(
  fechaIni,
  fechaFin,
  total,
  estado,
  idcliente,
  idvehiculo,
  id,
) {
  try {
    await Reserva.update(
      {
        fechaIni,
        fechaFin,
        total,
        estado,
        idcliente,
        idvehiculo,
      },
      {
        where: {
          idreserva: id,
        },
      },
    );

    const reservaActualizada = await Reserva.findByPk(id);

    return reservaActualizada;
  } catch (error) {
    console.error("❌ Error al modificar reserva:", error);

    throw error;
  }
}

async function eliminarReservacion(id) {
  try {
    const filasEliminadas = await Reserva.destroy({
      where: {
        idreserva: id,
      },
    });

    return filasEliminadas;
  } catch (error) {
    console.error("❌ Error al eliminar reserva:", error);

    throw error;
  }
}

async function crearReservacion(
  fechaIni,
  fechaFin,
  total,
  estado,
  idcliente,
  idvehiculo,
) {
  try {
    const nuevaReserva = await Reserva.create({
      fechaIni,
      fechaFin,
      total,
      estado,
      idcliente,
      idvehiculo,
    });

    return nuevaReserva;
  } catch (error) {
    console.error("❌ Error al crear reserva:", error);

    throw error;
  }
}

module.exports = {
  obtenerReservasVC,
  obtenerReservaVCForID,
  modificarReservacion,
  eliminarReservacion,
  crearReservacion,
};
