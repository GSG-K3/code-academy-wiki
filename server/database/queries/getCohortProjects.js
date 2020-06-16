const dbconnection = require('../config/dbConnection');
const getCohortProjects = (cohortID) => {
  const sql = {
    text:
      'select p.id project_id,p.image project_image from projects p,cohorts c where c.id=p.cohort_id AND c.id=$1;',
    values: [cohortID],
  };
  return db_connection
    .query(sql)
    .then((result) => result.rows)
    .catch((error) => error);
};
module.exports = getCohortProjects;
