const getProjectById = require('../database/queries/getProject');

exports.getProject = (req, res) => {
  getProjectById(req.params.id)
    .then((data) => {
      if (data.length != 0) {
        res.json(data);
      } else {
        res.status(404).json({ message: ' Project not found 404' });
      }
    })
    .catch(() => res.status(500).json({ err: 'Error for get projects' }));
};
