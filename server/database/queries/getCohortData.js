const db_connection = require("../config/db_connection");
const sql =
  " SELECT p.title project_name,s.name student_name,g.name gsg_member,c.name cohort_name FROM gsg_members g,coh_members cm ,students s, projects p,cohorts c, std_projects sp WHERE s.id=sp.student_id AND p.id=sp.project_id AND c.project_id=sp.project_id AND g.id=cm.mem_id order by cohort_name;";
const getCohortData = () => {
  return db_connection
    .query(sql)
    .then(result => result.rows)
    .catch(error => error);
};
 module.exports = getCohortData;