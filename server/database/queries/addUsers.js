const dbconnection = require('../config/dbConnection');
const bcrypt = require('bcryptjs');
const addUser = async (userinfo) => {
  const { username, email, password } = userinfo;
  // hash password to store it in  Database
  try {
    var hashedPassword = await bcrypt.hash(password, 10);
    const sql = {
      text: 'INSERT INTO users(username,email,password) VALUES($1,$2,$3)',
      values: [username, email, hashedPassword],
    };
    return dbconnection.query(sql.text, sql.values);
  } catch (err) {
    const postError = new Error('error in adding user to database');
    throw postError;
  }
};
module.exports = addUser;
