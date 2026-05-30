const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const Reserva = sequelize.define(
  "Reserva",
  {
    idreserva: {
      type: DataTypes.INTEGER,

      autoIncrement: true,

      primaryKey: true,
    },

    fechaIni: {
      type: DataTypes.DATEONLY,

      allowNull: false,
    },

    fechaFin: {
      type: DataTypes.DATEONLY,

      allowNull: false,
    },

    total: {
      type: DataTypes.DECIMAL(10, 2),

      allowNull: false,
    },

    estado: {
      type: DataTypes.ENUM(
        "pendiente",
        "confirmada",
        "cancelada",
        "finalizada",
      ),

      defaultValue: "pendiente",
    },

    idcliente: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },

    idvehiculo: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  },

  {
    tableName: "reserva",

    timestamps: false,
  },
);

module.exports = Reserva;
