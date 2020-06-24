const checkUsernameQuery = require('../database/queries/checkUsername');

module.exports = (req, res, next) => {
  // check if username exists in database
  const { username } = req.body;
  checkUsernameQuery(username)
    .then((result) => {
      if (result.rowCount !== 0) {
        return res.status(400).json({ message: 'username already exists!' });
      }
      return next();
    })
    .catch((err) => res.status(501).json({ message: 'internal error' }));
};
