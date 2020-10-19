const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.CatchPost = functions.region("europe-west1").https.onRequest(async (request, response) => {
  await admin.firestore().collection('Requests').add({
      ...request.body
  })
  return response.status(200).send({
      data : 'Ok'
  })
});
