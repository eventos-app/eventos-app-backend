const express = require('express');
const ruta = express.Router();
const verifyIdToken = require('../middlewares/auth');

const Participaciones = require('../models/participaciones_model');
const Organizadores=require("../models/organizadores_model");
const Eventos=require("../models/eventos_model");

ruta.get("eventos-organizador/:email",(req,res)=>{
    let email=req.params.email;
    let id=obtenerIdOrganizador(email);
    let participaciones=obtenerParticipaciones(id);
    let resultado=obtenerEventos(participaciones);
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
async function obtenerEventos(participaciones){
    let aux=[];
    for(let participacion of participaciones){
        let evento=await Eventos.findOne({
            where:{
                id_evento:participacion.id_evento
            }
        })
        aux.push(evento);
    }
   
    return id;
}
async function obtenerIdOrganizador(e){
    let id=await Organizadores.findOne({
        where:{
            email:e
        }
    })
    return id;
}
async function obtenerParticipaciones(id){
    let participaciones=await Participaciones.findAll({
        where:{
            id_organizador:id
        }
    })
    return participaciones;
}