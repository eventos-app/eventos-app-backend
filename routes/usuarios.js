const express = require("express");
const ruta = express.Router();
const { db, auth } = require('../settings/firebase-settings');

ruta.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let email = req.body.email;
    let contrasenia = req.body.contrasenia;
    console.log(email);
    console.log(contrasenia);
    const userRecord = await auth.createUser({
      email: email,
      password: contrasenia,
    });
    const token = await auth.createCustomToken(userRecord.uid);

    // const uuid = uuidv4();
    // await Alumnos.create({
    //   id_alumno: uuid,
    //   nombres: req.body.nombres,
    //   apellidos: req.body.apellidos,
    //   email: req.body.email,
    //   habilitado: 1,
    // });

    let uid = userRecord.uid;

    const coleccionRef = db.collection("usuarios");
    let nuevoDocumento = {
      roles: ["ALUMNO"],
      uuid: uid,
    };
    coleccionRef.add(nuevoDocumento);

    res.json({ token });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    if (
      error.message ===
      "The email address is already in use by another account."
    ) {
      res.status(500).json("Error email ya registrado en otra cuenta");
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = ruta;
