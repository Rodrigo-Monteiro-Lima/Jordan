CREATE DATABASE IF NOT EXISTS jordan_prod;

CREATE TABLE
    jordan_prod.users (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        PRIMARY KEY (id)
    );