const getAllstudents = require("../database/queries/getAllStudents");

exports.getAllStudents = (req, res, next) => {
    getAllstudents()
        .then(data => res.json(data))
        .catch(err => next(err));
};