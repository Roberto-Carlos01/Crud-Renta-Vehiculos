const express = require("express");

const router = express.Router();
const reservaController = require("../controllers/reserva.controller");

router.get("/", reservaController.getReservasVC);

module.exports = router;
