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
    const cliente = clienteService.obtenerClientePorId(id);
    res.json(cliente);
  } catch (error) {
    console.error("Error al obtener cliente por id:", error);
    res.status(500).json({ menssage: "Error al obtener los clientes" });
  }
}

async function createCliente(req, res) {
  try {
    const { nombre, apellido, telefono, ci, licencia } = req.body;
  } catch (error) {}
}

module.exports = {
  getClients,
  getClientForId,
};
