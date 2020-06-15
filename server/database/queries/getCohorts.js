const dbconnection = require('../config/dbConnection');
const getCohorts = (city) => {
  const sql = {
    text:
      'select p.id project_id,p.image project_image, c.id cohort_id from cohorts c,projects p where c.id=p.cohort_id AND city=$1;',
    value: [city],
  };

  return dbconnection
    .query(sql.text, sql.value)
    .then((res) => res.rows)
    .catch((err) => err);
};

module.exports = { getCohorts };
