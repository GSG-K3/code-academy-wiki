const dbconnection = require('../config/dbConnection');

const getallusers = () => {
  const sql = 'select * from users;';
  return dbconnection
    .query(sql)
    .then((res) => res.rows)
    .catch((err) => err);
};

module.exports = getallusers;
