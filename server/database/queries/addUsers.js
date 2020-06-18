const dbconnection = require("../config/dbConnection");
const bcrypt = require("bcryptjs");
const addUser = (userinfo) => {
  const { username, email, password } = userinfo;
  // hash password to store it in  Database 
  const hash = bcrypt.hashSync(password, 10);
  const sql = {
    text:
      "INSERT INTO users(username,email,password) VALUES($1,$2,$3)",
    values: [username, email, hash],
  };
  return dbconnection.query(sql.text, sql.values);
};
module.exports = addUser;
