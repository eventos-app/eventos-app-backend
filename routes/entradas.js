const express = require('express');
const ruta = express.Router();
const verifyIdToken = require('../middlewares/auth');
ruta.get('/mis-eventos/:email',(req,res)=> {
    let email=req.params.email;
    let resultado = listaMisEventos(email);
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
async function listaMisEventos(email){
    let eventos=await Eventos.findAll();    
}