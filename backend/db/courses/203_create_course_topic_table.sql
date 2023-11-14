DROP TABLE IF EXISTS dentarius.course_topic;

CREATE TABLE dentarius.course_topic (
    course_id TINYINT UNSIGNED,
    topic_id TINYINT UNSIGNED,
    FOREIGN KEY (course_id) REFERENCES course(id),
    FOREIGN KEY (topic_id) REFERENCES topic(id)
);

INSERT INTO dentarius.course_topic (course_id, topic_id)
VALUES
    ( 1, 1),
    ( 2, 1)
;