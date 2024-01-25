/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.createSignInCustomToken = onRequest(async (req, res) => {
  try {
    const userId = req.body.userId;
    const customToken = await admin.auth().createCustomToken(userId);
    console.log(customToken);
    res.status(200).json({customToken});
  } catch (error) {
    console.log("Error creating custom token", error);
    res.status(500).json({error: "Internal Server Error"});
  }
},
);
