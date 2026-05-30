//importamos los modelos
const Cliente = require("./cliente");
const Vehiculo = require("./vehiculo");
const Reserva = require("./reserva");

// un cliente tiene muchas reservas

Cliente.hasMany(Reserva, {
  foreignKey: "idcliente",
});

//una reserva tiene un solo cliente

Reserva.belongsTo(Cliente, {
  foreignKey: "idcliente",
});

// un vehiculo tiene muchas reservas
Vehiculo.hasMany(Reserva, {
  foreignKey: "idvehiculo",
});

// una reserva solo tiene un vehiculo
Reserva.belongsTo(Vehiculo, {
  foreignKey: "idvehiculo",
});

module.exports = {
  Cliente,
  Vehiculo,
  Reserva,
};
