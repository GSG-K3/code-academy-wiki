const postUserQuery = require('../database/queries/addUsers');
const checkValidation = require('../helpers/validation');
const verifyEmail = require('./emailVerification');
exports.postUser = (req, res) => {
  console.log('request host::', req.get('host'));
  verifyEmail(req.body.email, req.get('host'));
  //validate user information
  const { error } = checkValidation(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  // store user information to datbase
  postUserQuery(req.body)
    .then((result) => {
      if (result.rowCount === 1) {
        return res.status(200).json({ message: 'user  created successfully' });
      }
      return res
        .status(200)
        .json({ message: 'There is an error in adding new user!' });
    })
    .catch((err) =>
      res.status(400).json({ message: 'There is no valid information' })
    );
};
