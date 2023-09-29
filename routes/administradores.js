const express = require('express');
const ruta = express.Router();
const verifyIdToken = require('../middlewares/auth');

// const Administradores = require('../models/adminitradores');