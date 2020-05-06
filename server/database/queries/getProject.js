const connection = require('../config/db_connection');
const project = (id) => {
  const sql = {
    text:
      'SELECT p.* , s.name , s.img , s.id from students s, projects p where  s.project_id = p.id And project_id = $1 ; ',
    values: [id],
  };
  return connection
    .query(sql.text, sql.values)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};
module.exports = project;
