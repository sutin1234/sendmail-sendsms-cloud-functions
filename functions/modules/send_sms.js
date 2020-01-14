const _accountSid = 'sid';
const _authToken = 'auth_token';
// const client = require('twilio')(accountSid, authToken);

module.exports = {
  initializeSMS: (accountSid = _accountSid, authToken = _authToken) => {
    return require('twilio')(accountSid, authToken);
  },
  sendSMS: (
    _client,
    _message_body,
    _from = '+15017122661',
    _to = '+15558675310'
  ) => {
    return _client.messages
      .create({ body: _message_body, from: _from, to: _to })
      .then(message => console.log(message.sid));
  }
};
