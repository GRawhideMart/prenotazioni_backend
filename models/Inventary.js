const { DataTypes } = require("sequelize");
const db = require("../database/db.config");

const Inventary = db.define(
  "Inventario",
  {
    // Model attributes are defined here
    quantita: {
      type: DataTypes.INTEGER,
      defaultValue: "1",
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descrizione: {
      type: DataTypes.STRING(255),
    },
    anno_acquisto: {
      type: DataTypes.STRING(10),
    },
    prezzo: {
      type: DataTypes.DECIMAL(6, 2),
    },
    donazione: {
      type: DataTypes.INTEGER,
      defaultValue: "0",
    },
    disponibile: {
      type: DataTypes.INTEGER,
      defaultValue: "0",
    },
    priorita_sostituzione: {
      type: DataTypes.ENUM("BASSO", "MEDIO", "ALTO"),
      allowNull: false,
    },
  },
  {
    tableName: "inventario",
    timestamps: false,
    engine: "MyISAM",
  }
);

module.exports = Inventary;
