BEGIN;
    -- insert to students
    INSERT INTO students
        (id,name, img, about,email,phone_no,github, project_id, cohort_id)
    VALUES
        ('1', 'Hussein', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
            'my name is hussein','hussein@gmail.com','0599503844','Hussein-shahatet97', '1', '1'),
        ('2', 'Rahaf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
            'my name is Rahaf','Rahaf@gmail.com','0599332354','Rahaf-96', '1', '2'),
        ('3', 'Bayan', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
            'my name is Bayan','Bayan@gmail.com','0599345113','Bayan-short', '1', '1'),
        ('4', 'Khoulod', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
            'my name is Khoulod','Khoulod@gmail.com','0599622544','Khoulod-96', '1', '2');

    INSERT INTO cohorts
        (id,name, details,city)
    VALUE
        ( '1', 'K1', 'this cohort contain on 18 member', 'Kalel'),
        ( '2', 'K2', 'this cohort contain on 10 member', 'Kalel'),
        ( '3', 'K3', 'this cohort contain on 25 member', 'Kalel'),
        ( '4', 'G1', 'this cohort contain on 15 member', 'gaza'),
        ( '5', 'G2', 'this cohort contain on 15 member', 'gaza'),
        ( '6', 'G3', 'this cohort contain on 11 member', 'gaza'),
        ( '7', 'G4', 'this cohort contain on 18 member', 'gaza'),
        ( '8', 'G5', 'this cohort contain on 13 member', 'gaza'),
        ( '9', 'G6', 'this cohort contain on 12 member', 'gaza'),
        ( '10', 'G7', 'this cohort contain on 20 member', 'gaza'),
        ( '11', 'G8', 'this cohort contain on 25 member', 'gaza');


    INSERT INTO std_projects
        (student_id,project_id)
    VALUES
        ('1', '1'),
        ('2', '1'),
        ('3', '1'),
        ('4', '1');

    INSERT INTO coh_projects
        (cohort_id,project_id)
    VALUES
        ('1', '1'),
        ('1', '2'),
        ('1', '16'),
        ('1', '17'),
        ('1', '18'),
        ('1', '19'),
        ('2', '1');


    INSERT INTO coh_members
        (mem_id,coh_id)
    VALUES
        ('3', '4'),
        ('4', '2'),
        ('2', '1'),
        ('1', '1'),
        ('5', '4');

    INSERT INTO gsg_members
        (id,name, type, about)
    VALUES
        ('1', 'farah', 'cf', 'i was cf on 6 cohorts'),
        ('2', 'ishak', 'mentor', 'i was mentor on 2 cohorts'),
        ('3', 'hanen', 'mentor', 'i was mentor on 4 cohorts');


    INSERT INTO std_projects
        (student_id,project_id)
    VALUES
        ('1', '1'),
        ('2', '3'),
        ('3', '4'),
        ('4', '1');

    INSERT INTO projects
        (id,title,github ,heroku,image,description)
    VALUES
        ('1', 'wiki project', 'github', 'heroku','https://g.top4top.io/p_1578upbwv1.png','This is project about code academy students,projects,cohorts'),
        ('2', 'stopgocont project', 'github', 'heroku','https://g.top4top.io/p_1578upbwv1.png','This project build for Stop-Go-Continue game in code academy'),
        ('3', 'attendance project', 'github', 'heroku','https://g.top4top.io/p_1578upbwv1.png','This project made for student attendance in code academy cohorts'),
        ('4', 'news project', 'github', 'heroku','https://g.top4top.io/p_1578upbwv1.png','This project made to get all news from NewsApi and translate them to arabic');




    INSERT INTO projects
        (id,title,github ,heroku,image,description,cohort_id)
    VALUES
        ('16', 'wiki project', 'github', 'heroku','https://g.top4top.io/p_1578upbwv1.png','This is project about code academy students,projects,cohorts',1),
        ('17', 'stopgocont project', 'github', 'heroku','https://g.top4top.io/p_1578upbwv1.png','This project build for Stop-Go-Continue game in code academy',1),
        ('18', 'attendance project', 'github', 'heroku','https://g.top4top.io/p_1578upbwv1.png','This project made for student attendance in code academy cohorts',1),
        ('19', 'news project', 'github', 'heroku','https://g.top4top.io/p_1578upbwv1.png','This project made to get all news from NewsApi and translate them to arabic',1);

    COMMIT ;