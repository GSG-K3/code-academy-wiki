const dbconnection = require('../config/dbConnection');

const verifyUser = (email) => {
  try {
    const sql = {
      text: "UPDATE users SET status ='verified' WHERE email=$1",
      values: [email],
    };
    return dbconnection.query(sql.text, sql.values);
  } catch (err) {
    const updateError = new Error(
      'error in updating state for user in database '
    );
    throw updateError;
  }
};
module.exports = verifyUser;
