const dbconnection = require('../config/dbConnection');
const getUserInfo = (id) => {
  const sql = {
    text: 'select * from users where  id = $1;',
    values: [id],
  };
  return dbconnection
    .query(sql.text, sql.values)
    .then((res) => res.rows)
    .catch((err) => err);
};
module.exports = getUserInfo;
