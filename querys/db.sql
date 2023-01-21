CREATE DATABASE IF NOT EXISTS jordan_prod;

CREATE DATABASE IF NOT EXISTS jordan_dev;

CREATE TABLE
    jordan_prod.users (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        PRIMARY KEY (id)
    );

CREATE TABLE
    jordan_dev.users (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        PRIMARY KEY (id)
    );