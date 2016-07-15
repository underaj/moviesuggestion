DROP DATABASE moviesuggestion;

CREATE DATABASE moviesuggestion;

USE moviesuggestion;

CREATE TABLE movies (
  m_id INT NOT NULL AUTO_INCREMENT,
  moviename VARCHAR(50) NOT NULL UNIQUE,
  PRIMARY KEY (m_id)
);

INSERT INTO movies (moviename) VALUES ('PULP FICTION');
INSERT INTO movies (moviename) VALUES ('GOD FATHER');