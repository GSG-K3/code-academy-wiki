const nodeMailer = require('nodemailer');
require('env2')('./config.env');

async function sendEmail(email, host) {
  //creates a random number for verification
  const verificationCode = Math.floor(Math.random() * 100000);
  //creates a transporter object using SMTP transporter
  //SMTP is the main transport in Nodemailer for delivering messages. SMTP is also the protocol used between different email hosts
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASS,
    },
  });

  try {
    // send mail with defined transport object
    const link = 'http://' + host + '/verify?id=' + verificationCode;
    let info = await transporter.sendMail({
      from: 'code.academy.wiki@gmail.com',
      //we will change this to receive email from the form but it's fixed now for the purpose of testing
      to: 'rahaf.hawamdeh96@gmail.com',
      subject: 'Code acadimy wiki verification ✔',
      html:
        'Hello,<br> Please Click on the link to verify your email.<br> <a href=' +
        link +
        '>Click here to verify</a>' +
        verificationCode,
    });
    return verificationCode;
  } catch (err) {
    console.log({ ...err }, 'nodemailerError');
  }
}

module.exports = sendEmail;
