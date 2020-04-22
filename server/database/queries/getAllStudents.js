const connection = require("../config/db_connection");

const sql = "SELECT * FROM students";
const getallstudents = callback => {
  connection.query(sql, (err, res) => {
    if (err) throw err;
    else {
      callback(err, res.rows);
    }
  });
};

module.exports = getallstudents;