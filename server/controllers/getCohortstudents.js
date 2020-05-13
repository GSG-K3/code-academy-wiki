const query = require('../database/queries/getCohortstudent');
exports.getCohortstudent = (req, res) => {
  const cohortID = req.params.cohortID;
  query(cohortID)
    .then((data) => res.json(data))
    .catch((err) => err);
};
