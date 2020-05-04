const query = require("../database/queries/getCohortData");
const getCohortData = (req, res) => {
  const cohortName = req.params.cohortName;
  query(cohortName)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};
module.exports = getCohortData;