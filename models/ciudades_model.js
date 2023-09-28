const { sequelize,DataTypes,where } = require('../settings/sequilize-config');

const Ciudades = sequelize.define(
  "ciudades",
  {
    id_ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Ciudades;