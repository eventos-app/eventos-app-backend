const express = require('express');
const ruta = express.Router();
const verifyIdToken = require('../middlewares/auth');
const Espacios=require("../models/espacios_model");


ruta.get('/', (req, res) => {
    let resultado = listaEspacios();
    resultado.then(eventos => {
        res.json(eventos)
    }).catch(err => {
        res.status(400).json(
            {
                err
            }
        )
    })
});
async function listaEspacios(){
    let espacios=await Espacios.findAll();
    return espacios;
}