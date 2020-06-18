const dbconnection = require("../config/dbConnection");

const checkEmail = (email) => {
  console.log(email);
  const sql = {
    text: "select * from users where email=$1;",
    values: [email],
  };

  return dbconnection
    .query(sql.text, sql.values)
    .then((res) => res)
    .catch((err) => err);
};

module.exports = checkEmail;
