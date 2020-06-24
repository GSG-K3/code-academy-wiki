const dbconnection = require('../config/dbConnection');
const getUserInfo = (email) => {
  const sql = {
    text: 'select * from users where  email = $1;',
    values: [email],
  };
  return dbconnection
    .query(sql.text, sql.values)
    .then((res) => res)
    .catch((err) => err);
};
module.exports = getUserInfo;
