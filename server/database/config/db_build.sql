BEGIN;
  DROP TABLE IF EXISTS  
  students,cohorts,projects,std_projects,coh_members
  CASCADE;



CREATE TABLE projects
(
  id SERIAL PRIMARY KEY,
  cohort_id INT,
  FOREIGN KEY (cohort_id)  REFERENCES cohorts(id),
  title VARCHAR(50) NOT NULL,
  github VARCHAR (255) NOT NULL,
  heroku VARCHAR(255) NOT NULL,
  description VARCHAR(350),
  image TEXT
);


CREATE TABLE cohorts
(
  id SERIAL PRIMARY KEY,
  project_id INT,
  FOREIGN KEY (project_id)  REFERENCES projects(id),
  name VARCHAR(50) NOT NULL,
  details VARCHAR (255) ,
  city VARCHAR(50) NOT NULL
);

CREATE TABLE students
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  cohort_id INT,
  project_id INT,
  FOREIGN KEY (project_id)  REFERENCES projects(id),
  FOREIGN KEY (cohort_id)  REFERENCES cohorts(id),
  email VARCHAR,
  github VARCHAR,
  phone_No VARCHAR,
  img TEXT ,
  about VARCHAR(400)
);


CREATE TABLE gsg_members
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  about VARCHAR(255) NOT NULL
);

CREATE TABLE coh_members
(
  mem_id INT,
  coh_id INT,
  FOREIGN KEY(mem_id) REFERENCES gsg_members(id),
  FOREIGN KEY(coh_id) REFERENCES cohorts(id)
);
CREATE TABLE std_projects
(
  student_id INT,
  project_id INT,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY(project_id) REFERENCES projects(id)
);

CREATE TABLE coh_projects
(
  cohort_id INT,
  project_id INT,
  FOREIGN KEY (cohort_id) REFERENCES cohorts(id),
  FOREIGN KEY(project_id) REFERENCES projects(id)
);


COMMIT;