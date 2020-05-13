const getStudentQuery = require('../database/queries/getStudent');

exports.getStudent = (req, res, next) => {
  const id = req.params.id;
  getStudentQuery(id)
    .then((data) => {
      if (data.length != 0) {
        res.json(data);
      } else {
        res.status(404).json({ message: ' Student not found 404' });
      }
    })
    .catch((err) => next(err));
};
