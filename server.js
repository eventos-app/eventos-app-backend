const usuarios = require('./routes/usuarios');
const eventos = require('./routes/eventos');
const auth = require('./routes/auth');
const mysql = require("mysql");

const express = require('express');


const cors = require("cors");




const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "eventos",
    database: "eventos",
  });
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});



const app = express();
app.use(
  cors({
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use('/api/usuarios', usuarios);
app.use('/api/eventos', eventos);
app.use('/api/espacios', eventos);
app.use('/api/auth', auth);
app.use('/api/entradas', auth);
app.use('/api/participantes', auth);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Api RESTFul Ok, y ejecutándose...');
})

