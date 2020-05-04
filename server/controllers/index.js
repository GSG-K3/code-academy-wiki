const router = require("express").Router();
const getProject = require('./getProject'); 
router.get('/api/project/:id' , getProject);
module.exports = router;
