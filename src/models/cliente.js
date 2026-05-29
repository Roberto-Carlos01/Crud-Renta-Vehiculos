const { DataTypes } = require("sequelize");

//importamos la coneccion
const sequelize = require("./../config/database");

const Cliente = sequelize.define(
  "Cliente",
  {
    idcliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(20),
    },
    ci: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    licencia: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  //CONFIGURACION DEL MODELO
  {
    tableName: "cliente",
    timestamps: false,
  },
);

module.exports = Cliente;
