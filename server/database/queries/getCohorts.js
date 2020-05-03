const dbconnection = require("../config/db_connection");
console.log("hi");
const getCohorts = (city) => {
  console.log("I'm inside the query");
  const sql = {
    text:
      "select cohorts.name, cohorts.id, cohorts.city,image from projects inner join cohorts on cohorts.id=projects.id where city = $1 ;",
    value: [city],
  };

  return dbconnection
    .query(sql.text, sql.value)
    .then((res) => res.rows)
    .catch((err) => console.log("this is an  error"));
};

module.exports = { getCohorts };
