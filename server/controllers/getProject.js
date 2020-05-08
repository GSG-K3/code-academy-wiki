const getProjectById = require('../database/queries/getProject');

exports.getProject = (req, res) => {
  getProjectById(req.params.id)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ err: 'Error for get projects' }));
};
