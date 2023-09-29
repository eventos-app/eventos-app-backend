const { sequelize,DataTypes,where } = require('../settings/sequilize-config');

const Participaciones = sequelize.define(
  "participaciones",
  {
    id_participacion: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    id_evento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_organizador: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Participaciones;