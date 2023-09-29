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

ruta.put('/', (req, res) => {
    let datos_act=req.body;
    actualizarEvento(datos_act);
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

ruta.put('/habilitar/:id', (req, res) => {
    let id=req.params.id;
    cambiarEstadoEvento(id,1)
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
ruta.put('/deshabilitar/:id', (req, res) => {
    let id=req.params.id;
    cambiarEstadoEvento(id,0)
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

ruta.get('/ultimos-eventos', (req, res) => {
    let resultado = listaUltimosEventos();
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
ruta.get("/buscar-nombre/:nombre",(req,res)=> {
    let nombre=req.params.nombre;
    let resultado=buscarEventosPorNombre(nombre);
});
async function cambiarEstadoEvento(id,estado){
    let evento=await Eventos.findOne({
        where:{
            id_evento:id
        }
    }) 
    evento.habilitado=estado;
    await evento.save();
    return "ok"
}
async function actualizarEvento(datos_act){
    let evento=await Eventos.findOne({
        where:{
            id_evento:datos_act.id_evento
        }
    }) 
    evento.nombre_evento=datos_act.nombre_evento;
    evento.id_espacio=datos_act.id_espacio;
    evento.fecha=datos_act.fecha;
    await evento.save();
    return "ok"
}
async function buscarEventosPorNombre(nombre){
    let eventos=await Eventos.findAll({
        where:{
            nombre_evento:{
                [Op.like]: '%'+nombre+'%'
            }
        }
    })
    return eventos;
}
async function listaUltimosEventos(){
    let eventos = await Eventos.findAll(
        {
            order: [['fecha', 'DESC']],
            limit: 10,
        }
    );
    return eventos;
}

async function listaEventos(){
    let eventos = await Eventos.findAll();
    return eventos;
}
