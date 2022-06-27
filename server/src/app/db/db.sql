CREATE DATABASE lpchat


-- users table
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username varchar(20) UNIQUE,
    password varchar(500)
)


--- game JSON

CREATE TABLE michi_game (jdoc JSON);

--visit next page for more information about json objects
--https://dev.mysql.com/doc/refman/8.0/en/json.html#json-value
-- learning sql 
SELECT JSON_TYPE ("HELLO")