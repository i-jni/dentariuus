CREATE TABLE dentarius.topic(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    topic_name VARCHAR(50) NOT NULL
);

INSERT INTO dentarius.topic
VALUES
    (NULL, 'biologie'),
    (NULL, 'science')
;