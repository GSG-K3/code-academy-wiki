const nodeMailer = require('nodemailer');
require('env2')("./config.env");


async function sendEmail(email) {

  //creates a random number for verification
  const verificationCode = Math.floor(Math.random() * 100000)

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
    let info = await transporter.sendMail({
      from: 'code.academy.wiki@gmail.com',
      //we will change this to receive email from the form but it's fixed now for the purpose of testing
      to: "bayan.jubah@gmail.com",
      subject: 'Code acadimy wiki verification ✔',
      html: `<b> welcome to our website 'code acadimy wiki' you are trying to sign up as an admin for the website to continue please confirm your email by entering the code below 
      <h1>${verificationCode}</h1>
        </b>`,
    });
  } catch (err) {
    console.log({ ...err }, 'nodemailerError');
  }
}

module.exports = sendEmail;
