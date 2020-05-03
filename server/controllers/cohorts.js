const { getCohorts } = require("../database/queries/getCohorts");
console.log("hi,Im controller");

const cohorts = (req, res) => {
  getCohorts(req.params.city)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ err: "error for get catogery" }));
};
module.exports = cohorts;
