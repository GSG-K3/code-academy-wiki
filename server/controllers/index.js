const router = require("express").Router();
const cohorts = require("./cohorts");
router.get("/cohorts/:city", cohorts);
module.exports = router;
