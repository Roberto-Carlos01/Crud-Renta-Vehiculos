const express = require("express");

const router = express.Router();

const clienteController = require("./../controllers/cliente.controller");

router.get("/", clienteController.getClients);
router.get("/:id", clienteController.getClientForId);
router.post("/", clienteController.createCliente);
router.put("/:id", clienteController.updateCliente);
router.delete("/:id", clienteController.deleteCliente);

module.exports = router;
