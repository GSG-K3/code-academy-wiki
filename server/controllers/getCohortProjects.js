const query = require('../database/queries/getCohortProjects');
exports.getCohortProjects = (req, res) => {
  const cohortID = req.params.cohortID;
  query(cohortID)
    .then((data) => res.json(data))
    .catch((err) => err);
};
