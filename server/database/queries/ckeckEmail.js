const dbconnection = require('../config/dbConnection');

const checkEmail = (email) => {
  const sql = {
    text: 'select * from users where email=$1;',
    values: [email],
  };
  return dbconnection.query(sql.text, sql.values);
};

module.exports = checkEmail;
