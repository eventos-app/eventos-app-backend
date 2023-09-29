const express = require('express');
const ruta = express.Router();
const verifyIdToken = require('../middlewares/auth');
const Eventos=require("../models/eventos_model");
const Entradas=require("../models/entradas_model");
const Participante=require("../models/participantes_model");
ruta.get('/mis-eventos/:email',(req,res)=> {
    let email=req.params.email;
    let id_participante = obtenerId(email);
    let entradas = obtenerMisEntradas(id_participante);
    let resultado = obtenerDescripcionEventos(entradas);
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
async function obtenerDescripcionEventos(entradas){
    let aux=[];
    for(let entrada of entradas){
        let evento=await Eventos.findAll({
            where:{
                id_evento:entrada.id_evento
            }
        })
        aux.push(evento);
    }
    return aux;
}
async function obtenerId(e){
    let id=await Participante.findOne(
        {
            where:{
                email:e
            }
        }
    )
    return id;
}
async function obtenerMisEntradas(id){
    let entradas=await Entradas.findAll({
        where:{
            id_evento:id
        }
    });   
    return entradas; 
}