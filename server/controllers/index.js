const router = require("express").Router();

const { getAllStudents } = require("./allStudents");
const { getStudent } = require("./student");

router.get("/api/students", getAllStudents);
router.get("/api/students/:id", getStudent);

module.exports = router;