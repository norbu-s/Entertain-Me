-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS entertain;
-- Creates the "entertain" database --
CREATE DATABASE entertain;

USE entertain;

CREATE TABLE movies(
id INT NOT NULL AUTO_INCREMENT,
rank_no INT NOT NULL,
title VARCHAR(255) NOT NULL,
genre VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
director VARCHAR(255) NOT NULL,
actors VARCHAR(255) NOT NULL,
year INT NOT NULL,
runtime INT NOT NULL,
rating DECIMAL(10,2) NOT NULL,
votes INT NOT NULL,
revenue DECIMAL(10,3),
metascore INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE review(
id INT NOT NULL AUTO_INCREMENT,
movie_id INT NOT NULL,
score INT,
comments VARCHAR(255),
PRIMARY KEY (id)
);
