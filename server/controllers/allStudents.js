const getAllstudentsQuery = require("../database/queries/getAllStudents");

exports.getAllStudents = (req, res, next) => {
    getAllstudentsQuery()
        .then(data => res.json(data))
        .catch(err => next(err));
};