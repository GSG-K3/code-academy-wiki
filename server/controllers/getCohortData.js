const query = require('../database/queries/getCohortData');
exports.getCohortData = (req, res) => {
  const cohortID = req.params.cohortID;
  query(cohortID)
    .then((data) => res.json(data))
    .catch((err) => err);
};
