const router = require('express').Router();
const {cohorts} = require('./cohorts');
const { getAllStudents } = require('./allStudents');
const { getStudent } = require('./student');






router.get('/api/students', getAllStudents);
router.get('/api/students/:id', getStudent);
router.get('/api/cohorts/:city', cohorts);

module.exports = router;
