const { sequelize,DataTypes,where } = require('../settings/sequilize-config');

const Organizadores = sequelize.define(
  "organizadores",
  {
    id_organizador: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Eventos;