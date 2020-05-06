const router = require('express').Router();
const { getProject } = require('./getProject');

const { getAllStudents } = require('./allStudents');
const { getStudent } = require('./student');

router.get('/api/students', getAllStudents);
router.get('/api/students/:id', getStudent);
router.get('/api/project/:id', getProject);
module.exports = router;
