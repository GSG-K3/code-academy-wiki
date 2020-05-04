const router = require("express").Router();

const getCohortinfo = require("./getCohortData");
router.get("/api/cohortinfo", getCohortinfo);

const { getAllStudents } = require("./allStudents");
router.get("/api/students", getAllStudents);
module.exports = router;
