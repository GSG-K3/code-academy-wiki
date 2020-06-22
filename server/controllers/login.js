const getUserInfo = require('../database/queries/getUserInfo');
const bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
const { idleCount } = require('../database/config/dbConnection');

module.exports = (req, res) => {
  const { email, password } = req.body;
  console.log('request bodey', req.body);
  getUserInfo(email)
    .then((result) => {
      if (result.rowCount == 0) {
        return res.status(400).json({ msg: 'password or email inccorect' });
      } else {
        const hasPassword = result.rows[0].password;
        bcrypt.compare(password, hasPassword).then((comprslt) => {
          console.log('compare result', comprslt);
          if (comprslt) {
            return res
              .status(200)
              .json({ msg: 'hello you are loged in successfully' });
          } else {
            return res.status(400).json({ msg: 'password incorrect' });
          }
        });
      }
    })
    .catch((err) => err);
};
