const { getCohorts } = require('../database/queries/getCohorts');

exports.cohorts = (req, res) => {
  getCohorts(req.params.city)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ err: 'error for get cohort' }));
};
