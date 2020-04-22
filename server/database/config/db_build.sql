BEGIN;
  DROP TABLE IF EXISTS  
  students,cohorts,projects,std_projects,coh_members
  CASCADE;


CREATE TABLE students
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  img TEXT ,
  about VARCHAR(400) ,
FOREIGN KEY (project_id)  REFERENCES projects(id),
FOREIGN KEY (cohort_id)  REFERENCES cohorts(id),

);

CREATE TABLE projects
(
  id SERIAL PRIMARY KEY,
  FOREIGN KEY (cohort_id)  REFERENCES cohorts(id),
  title VARCHAR(50) NOT NULL,
  github VARCHAR (255) NOT NULL,
  heroku VARCHAR(255) NOT NULL,
);

CREATE TABLE cohorts
(
  id SERIAL PRIMARY KEY,
  FOREIGN KEY (project_id)  REFERENCES projects(id),
  name VARCHAR(50) NOT NULL,
  details VARCHAR (255) ,
  city VARCHAR(50) NOT NULL,
);

CREATE TABLE gsg_members(
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
type VARCHAR(50) NOT NULL,
about VARCHAR(255) NOT NULL,
);

CREATE TABLE coh_members(
    FOREIGN KEY(mem_id) REFERENCES gsg_members(id),
    FOREIGN KEY(coh_id) REFERENCES cohorts(id),
);
CREATE TABLE std_projects(
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
);

COMMIT;