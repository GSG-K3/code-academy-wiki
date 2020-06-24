const postUserQuery = require('../database/queries/addUsers');

exports.postUser = (req, res) => {
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
