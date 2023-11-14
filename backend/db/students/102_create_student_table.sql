CREATE TABLE dentarius.student(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    level_id TINYINT UNSIGNED NOT NULL,
    country_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (level_id) REFERENCES level(id),
    FOREIGN KEY (country_id) REFERENCES country(id),
      -- Contrainte d'unicité :
    UNIQUE KEY unique_email (email)
);

INSERT INTO dentarius.student
VALUES
    (NULL, 'toto', 'nomtoto', 'toto@mail.fr', '1234', 1, 2),
    (NULL, 'tata', 'nomtata', 'tata@mail.fr', '1234', 2, 1)
;
