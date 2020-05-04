const db_connection = require("../config/db_connection");
const getCohortData = (cohortName) => {
  const sql = {
    text:
      " SELECT p.id project_id,p.image Project_image,s.id student_id,s.img student_image,s.name student_name,g.name gsg_member,g.type Mentor_role,g.image mentor_image,c.name cohort_name,c.details about_cohort FROM gsg_members g,coh_members cm ,students s, projects p,cohorts c, std_projects sp WHERE s.id=sp.student_id AND p.id=sp.project_id AND c.project_id=sp.project_id AND g.id=cm.mem_id AND c.name=$1 order by cohort_name;",
    values: [cohortName],
  };
  return db_connection
    .query(sql)
    .then((result) => result.rows)
    .catch((error) => error);
};
 module.exports = getCohortData;