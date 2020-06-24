const dbconnection = require('../config/dbConnection');

const checkUsername = (username) => {
  const sql = {
    text: 'select * from users where username=$1;',
    values: [username],
  };
  return dbconnection.query(sql.text, sql.values);
};

module.exports = checkUsername;
