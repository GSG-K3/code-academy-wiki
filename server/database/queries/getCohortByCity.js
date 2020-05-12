const dbconnection = require('../config/db_connection');

const getCohortsByCity = (city) => {
  const sql = {
    text:
      'select  c.id cohort_id,c.name cohort_name from cohorts c where city=$1;',
    value: [city],
  };

  return dbconnection
    .query(sql.text, sql.value)
    .then((res) => res.rows)
    .catch((err) => console.log('this is an  error'));
};

module.exports = { getCohortsByCity };