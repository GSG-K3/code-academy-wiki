const router = require("express").Router();

const getCohortinfo = require("./getCohortData");
router.get("/api/cohortinfo/:cohortID", getCohortinfo);


const { getAllStudents } = require("./allStudents");
const { getStudent } = require("./student");

router.get("/api/students", getAllStudents);
router.get("/api/students/:id", getStudent);


module.exports = router;
