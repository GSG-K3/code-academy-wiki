const router = require("express").Router();

const getCohortinfo = require("./getCohortData");
const { getAllStudents } = require("./allStudents");
const { getStudent } = require("./student");

router.get("/api/cohortinfo/:cohortName", getCohortinfo);
router.get("/api/students", getAllStudents);
router.get("/api/students/:id", getStudent);



module.exports = router;