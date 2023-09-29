const { sequelize,DataTypes,where } = require('../settings/sequilize-config');

const Eventos = sequelize.define(
  "eventos",
  {
    id_evento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nombre_evento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_espacio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    habilitado:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  },
  {
    timestamps: false,
  }
);
module.exports = Eventos;