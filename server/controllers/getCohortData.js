const query = require("../database/queries/getCohortData");
const getCohortData = (req, res) => {
  query()
    .then(data => res.json(data))
    .catch((err) => console.log(err));
};
module.exports = getCohortData;