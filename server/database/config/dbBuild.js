const fs = require('fs');
const path = require('path');

const dbConnection = require('./dbConnection');

const sql = fs.readFileSync(path.join(__dirname, 'dbBuild.sql')).toString();
const sql2 = fs.readFileSync(path.join(__dirname, 'dummyData.sql')).toString();

const runDbBuild = (sql) => {
  return dbConnection
    .query(sql)
    .then((res) => {
      dbConnection.query(sql2).then((res) => res);
    })
    .catch((err) => err);
};

runDbBuild(sql, sql2);

module.exports = runDbBuild;
