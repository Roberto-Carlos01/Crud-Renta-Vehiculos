const Cliente = require("./../models/cliente");

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
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ci: ci,
        licencia: licencia,
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

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};
