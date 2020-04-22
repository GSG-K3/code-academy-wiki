BEGIN;
-- insert to students
INSERT INTO students (name, img, about, project_id, cohort_id)
VALUES ('Hussein', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
 'my name is hussein','1','1'),
 ('Rahaf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
 'my name is Rahaf','1','2'),
 ('Bayan', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
 'my name is Bayan','1','1'),
 ('Khoulod', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
 'my name is Khoulod','1','2');

-- insert to cohorts
INSERT INTO cohorts (project_id,name, details,city)
 ('1', 'k1', 'this cohort contain on 18 member','Kalel'),
 ('1', 'k2', 'this cohort contain on 10 member','Kalel'),
 ('1', 'k3', 'this cohort contain on 25 member','Kalel'),
 ('1', 'k4', 'this cohort contain on 15 member','gaza'),
 ('1', 'k5', 'this cohort contain on 19 member','gaza');

-- insert to std_projects
INSERT INTO std_projects(student_id,project_id)
VALUES
('1','1'),
('2','1'),
('3','1'),
('4','1');


-- coh_members
INSERT INTO coh_members(mem_id,coh_id)
VALUES
('3','4'),
('4','2'),
('2','1'),
('1','1'),
('5','4');

-- gsg_members
INSERT INTO gsg_members(name, type, about,)
VALUES
('farah','cf','i was cf on 6 cohorts'),
('ishak','mentor','i was mentor on 2 cohorts'),
('hanen','mentor','i was mentor on 4 cohorts'),
('anam','supervisor','i was supervisor on 5 cohorts'),

-- std_projects
INSERT INTO std_projects(student_id,project_id)
VALUES
('1',''),
('2',''),
('3',''),
('4','');

INSERT INTO projects(cohort_id,title,github ,heroku)
VALUES
('1','wiki project','github','heroku'),
('2','stop go cont project','github','heroku'),
('3','attendance project','github','heroku'),
('4','news project','github','heroku');
COMMIT;