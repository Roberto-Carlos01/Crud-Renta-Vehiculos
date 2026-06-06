const Cliente = require("./../models/cliente");
const sequelize = require("../config/database");

async function obtenerClientes() {
  try {
    const clientes = await Cliente.findAll();
    return clientes;
  } catch (error) {
    console.error("❌ Error al solicitar clientes: ", error);
    throw error;
  }
}
async function obtenerClientePorId(id) {
  try {
    const cliente = await Cliente.findOne({ where: { idcliente: id } });
    return cliente;
  } catch (error) {
    console.error("❌ Error al solicitar cliente con id: ", id);
    throw error;
  }
}
async function obtenerClientePorCI(ci) {
  try {
    const cliente = await Cliente.findOne({ where: { ci: ci } });
    return cliente;
  } catch (error) {
    console.error("❌ Error al solicitar cliente con CI: ", ci);
    throw error;
  }
}

async function crearCliente(nombre, apellido, telefono, ci, licencia) {
  try {
    const nuevoCliente = await Cliente.create({
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      ci: ci,
      licencia: licencia,
    });
    return nuevoCliente;
  } catch (error) {
    console.error("❌ Error al registrar nuevo cliente: ", error);
    throw error;
  }
}
async function actualizarCliente(nombre, apellido, telefono, ci, licencia, id) {
  try {
    const resultado = await Cliente.update(
      {
        nombre,
        apellido,
        telefono,
        ci,
        licencia,
      },
      { where: { idcliente: id } },
    );
    return resultado;
  } catch (error) {
    console.error("❌ Error al editar cliente: ", id);
    throw error;
  }
}
async function eliminarCliente(id) {
  try {
    const filasBorradas = await Cliente.destroy({
      where: { idcliente: id },
    });
    return filasBorradas;
  } catch (error) {
    console.error("❌ Error al eliminar clientes: ", error);
    throw error;
  }
}

async function verHistorialReservas(id) {
  try {
    const [historialCliente] = await sequelize.query(
      "SELECT r.fechaIni AS inicio, r.fechaFin AS fin , r.total , r.estado AS estado_reserva , c.nombre , c.apellido , v.marca , v.modelo, v.color FROM reserva r JOIN cliente c ON c.idcliente= r.idcliente JOIN vehiculo v ON v.idvehiculo = r.idvehiculo WHERE c.idcliente = ? ORDER BY r.fechaIni DESC",
      { replacements: [id] },
    );
    return historialCliente;
  } catch (error) {
    console.error(
      "❌ Error al obtener historial de reservas del cliente: ",
      error,
    );
    throw error;
  }
}

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  obtenerClientePorCI,
  verHistorialReservas,
};
