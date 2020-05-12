const db_connection = require('../config/db_connection');
const getMentorData = (cohortID) => {
  const sql = {
    text:
      'select g.* from gsg_members g,cohorts c,coh_members cm where cm.mem_id=g.id AND c.id=cm.coh_id AND c.id=$1;',
    values: [cohortID],
  };
  return db_connection
    .query(sql)
    .then((result) => result.rows)
    .catch((error) => error);
};
module.exports = getMentorData;
