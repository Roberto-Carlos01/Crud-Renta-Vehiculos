const clienteService = require("./../services/cliente.service");

async function getClients(req, res) {
  try {
    const clientes = await clienteService.obtenerClientes();
    res.json(clientes);
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    res.status(500).json({ menssage: "Error al obtener los clientes" });
  }
}

async function getClientForId(req, res) {
  try {
    const id = req.params.id;
    const cliente = await clienteService.obtenerClientePorId(id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      return res.status(404).json({
        message: "Cliente no encontrado",
      });
    }
  } catch (error) {
    console.error("Error al obtener cliente por id:", error);
    res.status(500).json({ message: "Error al obtener los clientes" });
  }
}

async function createCliente(req, res) {
  try {
    const { nombre, apellido, telefono, ci, licencia } = req.body;
    const cliente = await clienteService.crearCliente(
      nombre,
      apellido,
      telefono,
      ci,
      licencia,
    );
    console.log("Cliente ", nombre, "Adicionado exitosamente");
    res.status(201).json(cliente);
  } catch (error) {
    console.error("Error al agregar un nuevo cliente:", error);
    res.status(500).json({ menssage: "Error al agregar el cliente" });
  }
}

async function updateCliente(req, res) {
  try {
    const id = req.params.id;
    const { nombre, apellido, telefono, ci, licencia } = req.body;
    const resultado = await clienteService.actualizarCliente(
      nombre,
      apellido,
      telefono,
      ci,
      licencia,
      id,
    );
    res.json(resultado);
  } catch (error) {
    console.error("Error al actualizar cliente:", error);

    res.status(500).json({
      message: "Error al actualizar cliente",
    });
  }
}
async function deleteCliente(req, res) {
  try {
    const id = req.params.id;
    const filasborradas = await clienteService.eliminarCliente(id);
    res.json(filasborradas);
  } catch (error) {
    console.error("Error al eliminar un cliente: ", error);
    res.status(500).json({
      mesage: "Error al eliminar cliente",
    });
  }
}

module.exports = {
  getClients,
  getClientForId,
  createCliente,
  updateCliente,
  deleteCliente,
};
