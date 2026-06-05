const express = require("express");

const router = express.Router();
const reservaController = require("../controllers/reserva.controller");

router.get("/", reservaController.getReservasVC);
router.get("/:id", reservaController.getReservaVCForID);
router.post("/", reservaController.createReservaVCForID);
router.put("/:id", reservaController.updateReservaVCForID);
router.delete("/:id", reservaController.deleteReservaVCForID);

module.exports = router;
