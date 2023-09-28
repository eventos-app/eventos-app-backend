const express = require('express');
const ruta = express.Router();
const verifyIdToken = require('../middlewares/auth');

const Eventos = require('../models/eventos_model');

module.exports = ruta;

ruta.get('/', verifyIdToken, (req, res) => {
    let resultado = listaEventos();
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

async function listaEventos(){
    let eventos = await Eventos.findAll();
    return eventos;
}
