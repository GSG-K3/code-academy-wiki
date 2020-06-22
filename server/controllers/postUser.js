const postUserQuery = require('../database/queries/addUsers');
const checkValidation = require('../helpers/validation');

exports.postUser = (req, res) => {
  //validate user information
  const { error } = checkValidation(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  // store user information to datbase
  try {
    postUserQuery(req.body, (postError) => {
      if (postError) {
        return res.status(400).json({ message: postError.message });
      }
      return res.status(200).json({ message: 'user  created successfully' });
    });
  } catch (err) {
    res.status(400).json({ message: 'There is no valid information' });
  }
};
