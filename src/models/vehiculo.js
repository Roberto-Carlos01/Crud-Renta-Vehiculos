const { DataTypes } = require("sequelize");

//importamos la coneccion
const sequelize = require("./../config/database");

const Vehiculo = sequelize.define(
  "Vehiculo",
  {
    idvehiculo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    marca: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precioDia: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    placa: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    color: {
      type: DataTypes.STRING(50),
    },

    foto: {
      type: DataTypes.STRING(255),
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    disponible: {
      type: DataTypes.BOOLEAN(true),
    },
  },
  //CONFIGURACION DEL MODELO
  {
    tableName: "vehiculo",
    timestamps: false,
  },
);

module.exports = Vehiculo;
