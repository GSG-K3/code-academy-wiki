const dbconnection = require("../config/db_connection");

const getStudent = (id) => {
    const sql = {
        text: 'select * from students where id = $1;',
        values: [id]
    }
    return dbconnection
        .query(sql.text, sql.values)
        .then(res => res.rows)
        .catch(err => err);
};

module.exports = getStudent;