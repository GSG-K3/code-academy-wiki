const fs = require("fs");
const path = require("path");
const connection = require("./db_connection");

const sql = fs.readFileSync(path.join(__dirname, "db_build.sql")).toString();

const createTable = callback => {
  connection.query(sql, (err, res) => {
    if (err) throw err;
  });
};

createTable();
module.exports = createTable;
