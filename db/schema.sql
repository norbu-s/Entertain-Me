-- Drops the entertain database if it exists currently --
DROP DATABASE IF EXISTS entertain;
-- Creates the "entertain" database --
CREATE DATABASE entertain;

USE entertain;

CREATE TABLE movies(
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(255) NOT NULL,
genre VARCHAR(255) NOT NULL,
plot VARCHAR(255) NOT NULL,
director VARCHAR(255) NOT NULL,
actors VARCHAR(255) NOT NULL,
year INT NOT NULL,
image BLOB,
PRIMARY KEY (id)
);

CREATE TABLE reviews(
id INT AUTO_INCREMENT NOT NULL,
movieId INT NOT NULL,
review VARCHAR(255) NOT NULL,
rating VARCHAR(255) NOT NULL,
author VARCHAR(255) NOT NULL,
source VARCHAR(255) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (movieId) references movies (id)
);