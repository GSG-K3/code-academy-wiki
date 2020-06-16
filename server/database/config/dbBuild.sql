BEGIN;
  DROP TABLE IF EXISTS  students,cohorts,projects,std_projects,coh_members,gsg_members, users
  CASCADE;



CREATE TABLE cohorts
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  details VARCHAR  ,
  city VARCHAR(50) NOT NULL
);

CREATE TABLE projects
(
  id SERIAL PRIMARY KEY,
  cohort_id INT,
  FOREIGN KEY (cohort_id)  REFERENCES cohorts(id),
  title VARCHAR(50) NOT NULL,
  github VARCHAR NOT NULL,
  heroku VARCHAR NOT NULL,
  description VARCHAR,
  image TEXT
);


CREATE TABLE students
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  cohort_id INT,
  FOREIGN KEY (cohort_id)  REFERENCES cohorts(id),
  email VARCHAR,
  github VARCHAR,
  phone_No VARCHAR,
  image TEXT ,
  address VARCHAR,
  role VARCHAR
);


CREATE TABLE gsg_members
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  image TEXT
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

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  type VARCHAR(50)
  );


COMMIT;