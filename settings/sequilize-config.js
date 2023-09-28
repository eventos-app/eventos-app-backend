
const { Sequelize, DataTypes, where } = require("sequelize");

const sequelize = new Sequelize("eventos", "root", "eventos", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    password: "eventos",
  });


  module.exports={
    sequelize,
    DataTypes,
    where
  }