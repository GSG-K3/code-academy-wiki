const getUserInfo = require('../database/queries/getUserInfo');
const checkUserStatus = require('../database/queries/getUserStatus');

const bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
require('env2')('./config.env');

exports.login = (req, res) => {
  const { email, password } = req.body;
  const createToken = (email, password) => {
    return jwt.sign({ email, password }, process.env.SECRET);
  };
  const token = createToken(email, password);

  getUserInfo(email)
    .then((result) => {
      if (result.rowCount == 0) {
        return res.status(400).json({ msg: 'Password or Email Inccorect' });
      } else {
        const hasPassword = result.rows[0].password;
        bcrypt.compare(password, hasPassword).then((comprslt) => {
          if (comprslt) {
            checkUserStatus(email)
              .then((statusRes) => {
                const userStatus = statusRes[0].status;
                if (userStatus === 'verified') {
                  return res
                    .cookie('token', token, { maxAge: 900000, httpOnly: true })
                    .status(200)
                    .json({ msg: 'hello you are loged in successfully' });
                } else {
                  return res.status(400).json({
                    msg: 'you should verify your account first!',
                  });
                }
              })
              .catch((e) => e);
          } else {
            return res.status(400).json({ msg: 'password incorrect' });
          }
        });
      }
    })
    .catch((err) => err);
};
