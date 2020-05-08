const router = require('express').Router();

const { getCohortinfo } = require('./getCohortData');
const { getStudent } = require('./student');
const { getProject } = require('./getProject');
const { getAllStudents } = require('./allStudents');

router.get('/api/cohortinfo/:cohortID', getCohortinfo);
router.get('/api/students', getAllStudents);
router.get('/api/students/:id', getStudent);
router.get('/api/project/:id', getProject);
module.exports = router;
