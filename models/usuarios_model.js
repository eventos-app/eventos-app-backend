const { Sequelize, DataTypes, where } = require("sequelize");

const sequelize = new Sequelize("cocawi-lms-db", "root", "I5h$$p7whOc7#opdM&", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    password: "I5h$$p7whOc7#opdM&",
  });