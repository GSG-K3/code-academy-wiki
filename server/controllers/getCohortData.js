const query = require("../database/queries/getCohortData");
const getCohortData = (req, res) => {
  const cohortID = req.params.cohortID;
  query(cohortID)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};
module.exports = getCohortData;