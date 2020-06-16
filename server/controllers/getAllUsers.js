const getAllUsersQuery = require('../database/queries/getAllUsers');

exports.getAllUsers = (req, res, next) => {
  getAllUsersQuery()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
