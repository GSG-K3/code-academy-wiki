const dbconnection = require('../config/dbConnection');
const getCohortData = (cohortID) => {
  const sql = {
    text:
      'select  name cohort_name,details cohort_details,id cohort_id  from cohorts where id=$1;',
    values: [cohortID],
  };
  return dbconnection
    .query(sql)
    .then((result) => result.rows)
    .catch((error) => error);
};
module.exports = getCohortData;
