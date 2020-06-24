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
const { logout } = require('./logout');
const { clientError } = require('../helpers/errors');
const { serverError } = require('../helpers/errors');
const { postUser } = require('./postUser');
const { checkEmail } = require('../middlewares/checkEmail');
const { checkUsername } = require('../middlewares/checkUsername');
const { login } = require('./login');
const { verifyToken } = require('./verifyToken');
const { verifyEmail } = require('../middlewares/verifyEmail');

router.get('/api/cohortinfo/:cohortID', getCohortData);
router.get('/api/students', getAllStudents);
router.get('/api/students/:id', getStudent);
router.get('/api/project/:id', getProject);
router.get('/api/cohorts/:city', cohortsByCity);
router.get('/api/cohorts/projects/:city', cohorts);
router.get('/api/cohortstd/:cohortID', getCohortstudent);
router.get('/api/cohortMentor/:cohortID', getMentorData);
router.get('/api/cohortProjects/:cohortID', getCohortProjects);
router.post('/api/login', login);
router.post('/api/logout', logout);
router.post('/api/signup', checkUsername, checkEmail, verifyEmail, postUser);
router.get('/verify', verifyToken);

router.use(clientError);
router.use(serverError);
module.exports = router;
