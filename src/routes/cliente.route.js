const express = require("express");

const router = express.Router();

const clienteController = require("./../controllers/cliente.controller");

router.get("/", clienteController.getClients);
router.get("/:id", clienteController.getClientForId);

module.exports = router;
