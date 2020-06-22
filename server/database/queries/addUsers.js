const dbconnection = require('../config/dbConnection');
const bcrypt = require('bcryptjs');
const addUser = (userinfo, callback) => {
  const { username, email, password } = userinfo;
  // hash password to store it in  Database
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const sql = {
        text: 'INSERT INTO users(username,email,password) VALUES($1,$2,$3)',
        values: [username, email, hash],
      };
      return dbconnection.query(sql.text, sql.values);
    })
    .then((result) => {
      if (callback) {
        callback(null, result);
      }
    })
    .catch((err) => {
      const error = new Error('error in adding user to database');
      if (callback) {
        callback(error, null);
      }
    });
};
module.exports = addUser;
