const dbconnection = require('../config/dbConnection');

const getallstudents = () => {
  const sql = 'select * from students;';
  return dbconnection
    .query(sql)
    .then((res) => res.rows)
    .catch((err) => err);
};

module.exports = getallstudents;
