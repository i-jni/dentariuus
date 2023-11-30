DROP DATABASE IF EXISTS dentarius;

CREATE DATABASE dentarius;

ALTER DATABASE dentarius CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE dentarius.level(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE dentarius.country(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE dentarius.student(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('visitor', 'user', 'admin') NOT NULL DEFAULT 'visitor',
    level_id TINYINT UNSIGNED NOT NULL,
    country_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (level_id) REFERENCES level(id),
    FOREIGN KEY (country_id) REFERENCES country(id),
    UNIQUE KEY unique_email (email)
);

CREATE TABLE dentarius.course(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(50) NOT NULL,
    title VARCHAR(255),
    content TEXT,
    document VARCHAR(255),
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    date_edit TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    student_id TINYINT UNSIGNED NOT NULL,
    level_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE,
    FOREIGN KEY (level_id) REFERENCES level(id)
);

CREATE TABLE dentarius.topic(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    topic_name VARCHAR(50) NOT NULL
);

CREATE TABLE dentarius.course_topic (
    course_id TINYINT UNSIGNED,
    topic_id TINYINT UNSIGNED,
    FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topic(id)
);


INSERT INTO dentarius.level
VALUES
    (NULL, 'bac1'),
    (NULL, 'bac2')
;

INSERT INTO dentarius.country
VALUES
    (NULL, 'France'),
    (NULL, 'Belgique'),
    (NULL, 'Suisse'),
    (NULL, 'Autre')
;

INSERT INTO dentarius.student
VALUES
    (NULL, 'toto', 'nomtoto', 'toto@mail.fr', '1234', 'visitor', 1, 2),
    (NULL, 'tata', 'nomtata', 'tata@mail.fr', '1234', 'user', 2, 1),
    (NULL, 'titi', 'nomtiti', 'titi@mail.fr', '1234', 'admin', 2, 1),
    (NULL, 'tutu', 'nomtutu', 'tutu@mail.fr', '1234', 'user', 2, 1);


INSERT INTO dentarius.course (course_name, title, content, document, date_creation, date_edit, student_id, level_id)
VALUES
    ('les molecules spé', 'title : molecules', 'lorem ipsum content', 'doc.pdf', '2023-11-03 14:35:00', '2023-11-03 14:37:00', 3, 2),
    ('la science des dent', 'title : science spé', 'lorem ipsum content science', 'doc2.pdf', '2023-11-03 14:38:00', '2023-11-03 14:26:00', 4, 1),
    ('les molecules 2', 'title : molecules2', 'lorem ipsum content2', 'doc.pdf', '2023-11-03 14:30:00', '2023-11-03 14:10:00', 3, 2),
    ('la science des dent2', 'title : science spé2', 'lorem ipsum content science2', 'doc2.pdf', '2023-11-03 14:50:00', '2023-11-03 14:20:00', 4, 1),
    ('la science des dent3', 'title : science spé3', 'lorem ipsum content science3', 'doc3.pdf', '2023-11-03 14:50:00', '2023-11-03 14:50:00', 4, 2);


INSERT INTO dentarius.topic
VALUES
    (NULL, 'biologie'),
    (NULL, 'science'),
    (NULL, 'medecine')
;

INSERT INTO dentarius.course_topic (course_id, topic_id)
VALUES
    ( 1, 1),
    ( 2, 1),
    ( 3, 2),
    ( 4, 2),
    ( 5, 3)
;
