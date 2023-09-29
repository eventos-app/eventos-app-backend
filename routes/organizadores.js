const express = require('express');
const ruta = express.Router();
const verifyIdToken = require('../middlewares/auth');

const Organizadores = require('../models/participantes_model');

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

ruta.put("/:email",(req,res)=>{
    let email=req.params.email;
    let datos=req.body;
    let resultado=actualizarPerfil(email,datos);
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
async function actualizarPerfil(email,datos){
    let perfil=await Organizadores.findOne({
        where:{
            email:e
        }
    })
    perfil.nombres=datos.nombres;
    perfil.apellidos=datos.apellidos;
    await perfil.save();

}
async function obtenerPerfil(e){
    let perfil=await Organizadores.findOne({
        where:{
            email:e
        }
    })
    return perfil;
}
