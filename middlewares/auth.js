
const { auth } = require('../settings/firebase-settings');


let verifyToken=(req, res, next) =>{
    const token = req.headers["authorization"];
    console.log(token);
   
    if (token) {
      const idToken = token.split(" ")[1];
      auth.verifyIdToken(idToken)
        .then(function (decodedToken) {
          return next();
        })
        .catch(function (error) {
          console.log(error);
          return res.sendStatus(403);
        });
    } else {
      res.sendStatus(401);
    }
  }
module.exports = verifyToken;