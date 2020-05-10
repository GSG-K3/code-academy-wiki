const router = require('express').Router();

const { getCohortData } = require('./getCohortData');
const { getStudent } = require('./student');
const { getProject } = require('./getProject');
const { getAllStudents } = require('./allStudents');

router.get('/api/cohortinfo/:cohortID', getCohortData);
router.get('/api/students', getAllStudents);
router.get('/api/students/:id', getStudent);
router.get('/api/project/:id', getProject);
module.exports = router;
