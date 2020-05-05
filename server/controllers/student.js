const getStudent = require("../database/queries/getStudent");

exports.getStudent = (req, res, next) => {
    const id = req.params.id;
    getStudent(id)
        .then(data => res.json(data))
        .catch(err => next(err));
};