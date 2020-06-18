const { getCohorts } = require("../database/queries/getCohorts");

exports.cohorts = (req, res) => {
  getCohorts(req.params.city)
    .then((data) => {
      if (data.length != 0) {
        res.json(data);
      } else {
        res.status(404).json({ message: " Cohort Project Not Found 404" });
      }
    })
    .catch((err) => err);
};
