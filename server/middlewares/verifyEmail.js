const verifyEmail = require('../helpers/emailVerification');
const jwt = require('jsonwebtoken');
require('env2')('./config.env');

exports.verifyEmail = (req, res, next) => {
  // check if email exists in database
  const { email } = req.body;
  verifyEmail(email, req.get('host'))
    .then((vcode) => {
      if (vcode) {
        const token = jwt.sign(
          { verificationCode: vcode, email: email },
          process.env.SECRET,
          {
            expiresIn: '1d',
          }
        );
        res.cookie('verification', token);
      }
      return next();
    })

    .catch((err) =>
      res.status(501).json({ message: 'internal error in verify email' })
    );
};
