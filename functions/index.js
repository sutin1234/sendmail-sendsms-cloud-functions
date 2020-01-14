const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const { mailOptions, excuteSendEnmail } = require('../modules/send_gmail');
const { initializeSMS, sendSMS } = require('./modules/send_sms');

admin.initializeApp();

// SendEmail
exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const dest = req.query.dest;

    const _mailOptions = mailOptions(dest);
    excuteSendEnmail(_mailOptions);
  });
});

// SendSMS
exports.sendSMS = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // const dest = req.query.phone;
    const client = initializeSMS(); // params sid, auth_token
    sendSMS(client, 'Hi! GCloud', '+66840854287', '+66969249051');
  });
});
