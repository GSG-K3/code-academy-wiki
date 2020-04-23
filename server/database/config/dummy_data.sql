BEGIN;
    -- insert to students
    INSERT INTO students
        (id,name, img, about, project_id, cohort_id)
    VALUES
        ('1', 'Hussein', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
            'my name is hussein', '1', '1'),
        ('2', 'Rahaf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
            'my name is Rahaf', '1', '2'),
        ('3', 'Bayan', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
            'my name is Bayan', '1', '1'),
        ('4', 'Khoulod', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F23264%2Fuser&psig=AOvVaw1s1DGCuajeU0dWsuJAm7Cm&ust=1587656696814000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj4gZyw_OgCFQAAAAAdAAAAABAD',
            'my name is Khoulod', '1', '2');

    INSERT INTO cohorts
        (id,name, details,city)
    VALUES
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
        (id,title,github ,heroku)
    VALUES
        ('1', 'wiki project', 'github', 'heroku'),
        ('2', 'stopgocont project', 'github', 'heroku'),
        ('3', 'attendance project', 'github', 'heroku'),
        ('4', 'news project', 'github', 'heroku');

    COMMIT ;