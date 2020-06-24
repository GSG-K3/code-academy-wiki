const jwt = require('jsonwebtoken');
const verifyUserQuery = require('../database/queries/verifyUser');

require('env2')('./config.env');

exports.verifyToken = (req, res) => {
  //compare the token in cookies with the code from the request
  jwt.verify(req.cookies.verification, process.env.SECRET, (err, decoded) => {
    if (err) res.status(400).send('<h1>Not Authorized</h1>');

    if (req.query.id == decoded.verificationCode) {
      verifyUserQuery(decoded.email)
        .then((result) => {
          if (result.rowCount === 1) {
            return res
              .status(200)
              .send(` <h1> Email verified you can go and log in now!</h1>`);
          }
          return res
            .status(200)
            .json({ message: 'there is an error in updating user state' });
        })
        .catch((error) => error);
    } else {
      return res.status(200).send(` <h1> The code is expired !</h1>`);
    }
  });
};
