const { getCohortsByCity } = require("../database/queries/getCohortByCity");

exports.cohortsByCity = (req, res) => {
  getCohortsByCity(req.params.city)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ err: "error for get catogery" }));
};

