const getUserInfo = require('../database/queries/getUserInfo');
const checkUserStatus = require('../database/queries/getUserStatus');

const bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { email, password } = req.body;
  getUserInfo(email)
    .then((result) => {
      if (result.rowCount == 0) {
        return res.status(400).json({ msg: 'password or email inccorect' });
      } else {
        const hasPassword = result.rows[0].password;
        bcrypt.compare(password, hasPassword).then((comprslt) => {
          if (comprslt) {
            checkUserStatus(email)
              .then((statusRes) => {
                const userStatus = statusRes[0].status;
                if (userStatus === 'verified') {
                  return res.status(200).json({
                    status: userStatus,
                  });
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
