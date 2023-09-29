const express = require('express');
const ruta = express.Router();
const verifyIdToken = require('../middlewares/auth');

const Participantes = require('../models/participantes_model');

ruta.get("perfil/:email",(req,res)=>{
    let email=req.params.email;
    let resultado=obtenerPerfil(email);
    resultado.then(eventos => {
        res.json(eventos)
    }).catch(err => {
        res.status(400).json(
            {
                err
            }
        )
    })
})
function obtenerPerfil(e){
    let perfil=Participantes.findOne({
        where:{
            email:e
        }
    })
    return perfil;
}
