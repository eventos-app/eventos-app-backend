const admin = require("firebase-admin");

var serviceAccount = require("../eventos-project-560da-firebase-adminsdk-2kxav-63b9ed2384.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  });
const db = admin.firestore();
const auth = admin.auth()

module.exports = {
    db,
    auth
  };
  