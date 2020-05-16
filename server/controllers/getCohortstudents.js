const query = require('../database/queries/getCohortstudent');
exports.getCohortstudent = (req, res) => {
  const cohortID = req.params.cohortID;
  query(cohortID)
    .then((data) => {
      if (data.length != 0) {
        res.json(data);
      } else {
        res.status(404).json({ message: ' Cohort Student Not Found 404' });
      }
    })
    .catch((err) => err);
};
