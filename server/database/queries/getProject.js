const dbconnection = require('../config/dbConnection');
const project = (id) => {
  const sql = {
    text:
      'SELECT p.* , s.name  student_name , s.image  student_image, s.id student_id from students s, projects p , std_projects sp where sp.student_id=s.id AND sp.project_id=p.id  And p.id= $1 ; ',
    values: [id],
  };
  return connection
    .query(sql.text, sql.values)
    .then((res) => res.rows)
    .catch((err) => err);
};
module.exports = project;
