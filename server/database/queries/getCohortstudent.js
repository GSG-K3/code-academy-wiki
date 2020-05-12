const db_connection = require('../config/db_connection');
const getCohortData = (cohortID) => {
  const sql = {
    text:
      'select s.id student_id,s.name student_name,s.image student_image from  students s ,cohorts c where s.cohort_id=c.id AND c.id=$1;',
    values: [cohortID],
  };
  return db_connection
    .query(sql)
    .then((result) => result.rows)
    .catch((error) => error);
};
module.exports = getCohortData;
