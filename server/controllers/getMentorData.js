const query = require('../database/queries/getMentorData');
exports.getMentorData = (req, res) => {
  const cohortID = req.params.cohortID;
  query(cohortID)
    .then((data) => res.json(data))
    .catch((err) => err);
};
