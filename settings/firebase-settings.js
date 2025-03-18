const admin = require("firebase-admin");

// Put your credentials json name to use firebase
var serviceAccount = require("../credentials-firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  });
const db = admin.firestore();
const auth = admin.auth()

module.exports = {
    db,
    auth
  };
  