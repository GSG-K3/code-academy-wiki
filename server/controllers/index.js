const router = require('express').Router();
const { cohorts } = require('./cohorts');
const { getCohortData } = require('./getCohortData');
const { getStudent } = require('./student');
const { getProject } = require('./getProject');
const { getAllStudents } = require('./allStudents');
const { cohortsByCity } = require('./getCohortsByCity');
const { getCohortstudent } = require('./getCohortstudents');
const { getMentorData } = require('./getMentorData');
const { getCohortProjects } = require('./getCohortProjects');
const { clientError } = require('../helpers/errors');
const { serverError } = require('../helpers/errors');
const { postUser } = require('./postUser');
const checkEmail = require('../middlewares/checkEmail');
const checkUsername = require('../middlewares/checkUsername');

router.get('/api/cohortinfo/:cohortID', getCohortData);
router.get('/api/students', getAllStudents);
router.get('/api/students/:id', getStudent);
router.get('/api/project/:id', getProject);
router.get('/api/cohorts/:city', cohortsByCity);
router.get('/api/cohorts/projects/:city', cohorts);
router.get('/api/cohortstd/:cohortID', getCohortstudent);
router.get('/api/cohortMentor/:cohortID', getMentorData);
router.get('/api/cohortProjects/:cohortID', getCohortProjects);
router.post('/api/signup', checkUsername, checkEmail, postUser);

router.get('/verify', function(req, res) {
  console.log(req.query.id);
  console.log('email is verified');
  res.send('<h1>Email is been Successfully verified</h1>');
});
router.use(clientError);
router.use(serverError);
module.exports = router;
