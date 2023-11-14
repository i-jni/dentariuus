DROP TABLE IF EXISTS dentarius.course;
CREATE TABLE dentarius.course(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(50) NOT NULL,
    title VARCHAR(255),
    content TEXT,
    document LONGBLOB,
    student_id TINYINT UNSIGNED NOT NULL,
    level_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (level_id) REFERENCES level(id)
);

INSERT INTO dentarius.course (course_name, title, content, document, student_id, level_id)
VALUES
    ('les molecules spé', 'title : molecules', 'lorem ipsum content', 'doc.pdf', 3, 2),
    ('la science des dent', 'title : science spé' ,'lorem ipsum content science', 'doc2.pdf', 4, 1),
    ('les molecules 2', 'title : molecules2', 'lorem ipsum content2', 'doc.pdf', 3, 2),
    ('la science des dent2', 'title : science spé2' ,'lorem ipsum content science2', 'doc2.pdf', 4, 1)
    ;
