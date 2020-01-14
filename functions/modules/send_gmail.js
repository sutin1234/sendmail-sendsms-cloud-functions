const nodemailer = require('nodemailer');

module.exports = {
  transporter: () => {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'xxx@gmail.com',
        pass: 'xxx'
      }
    });
  },
  mailOptions: destination => {
    return {
      from: 'Angular Tech <xxx@gmail.com>',
      to: destination,
      subject: "I 'am Google Cloud",
      html: '<p style="font-size: 16px;">Test Body Email From GCloud</p>'
    };
  },
  excuteSendEnmail: mailOptions => {
    return this.transporter().sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send('Sended');
    });
  }
};
