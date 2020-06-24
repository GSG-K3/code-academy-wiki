const checkEmailQuery = require('../database/queries/ckeckEmail');
const checkValidation = require('../helpers/validation');

module.exports = (req, res, next) => {
  // check if email exists in database
  const { email } = req.body;
  checkEmailQuery(email)
    .then((result) => {
      if (result.rowCount !== 0) {
        return res.status(400).json({ message: 'email already exists!' });
      }

      // check if email domain is gazaskygeeks.com
      if (!/@gazaskygeeks.com\s*$/.test(email)) {
        return res
          .status(400)
          .json({ message: 'email domain must be gazaskygeeks.com' });
      }

      //validate user information
      const { error } = checkValidation(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      return next();
    })
    .catch((err) => res.status(501).json({ message: 'internal error' }));
};
