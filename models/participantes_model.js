const { Sequelize, DataTypes, where, sequelize } = require("../settings/sequilize-config");

const Participantes=sequelize.define(
    "participantes",
    {
        id_participante:{
            primaryKey:true,
            allowNull:false,
            type:DataTypes.STRING
        },
        nombres:{
            allowNull:true,
            allowNull:false,
            type:DataTypes.STRING
        },
        apellidos:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        timestamps:false
    }
);
module.exports=Participantes;