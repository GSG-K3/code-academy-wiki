const dbconnection = require('../config/dbConnection');

const getStatus = (email) => {
  const sql = {
    text: 'SELECT status from users where email=$1',
    values: [email],
  };
  return dbconnection
    .query(sql.text, sql.values)
    .then((res) => res.rows)
    .catch((err) => err);
};

module.exports = getStatus;
