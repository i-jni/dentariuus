CREATE TABLE dentarius.country(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);
INSERT INTO dentarius.country
VALUES
    (NULL, 'france'),
    (NULL, 'belgique')
;
