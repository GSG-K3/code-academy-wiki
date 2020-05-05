const dbconnection = require("../config/db_connection");

const getStudent = (id) => {
    const sql = {
        text: 'select s.*, p.image project_image, p.id project_id from students s,projects p,std_projects sp where sp.student_id=s.id AND sp.project_id=p.id AND s.id = $1;',
        values: [id]
    }
    return dbconnection
        .query(sql.text, sql.values)
        .then(res => res.rows)
        .catch(err => err);
};

module.exports = getStudent;