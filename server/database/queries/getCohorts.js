const dbconnection = require('../config/db_connection');
console.log('hi');
const getCohorts = (city) => {
  console.log("I'm inside the query");
  const sql = {
    text:
      'select p.id project_id,p.image project_image, c.id cohort_id from cohorts c,projects p where c.id=p.cohort_id AND city=$1;',
    value: [city],
  };

  return dbconnection
    .query(sql.text, sql.value)
    .then((res) => res.rows)
    .catch((err) => console.log('this is an  error'));
};

module.exports = { getCohorts };
