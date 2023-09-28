const { sequelize,DataTypes,where } = require('../settings/sequilize-config');

const Entradas = sequelize.define(
  "entradas",
  {
    id_entradas: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    id_participante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_evento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGERs,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);
module.exports = Entradas;