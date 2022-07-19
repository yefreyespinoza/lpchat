CREATE DATABASE lpchat


-- users table
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username varchar(20) UNIQUE,
    password varchar(500)
)


--- game JSON

CREATE TABLE michi_game (
    id SERIAL PRIMARY KEY, --ID INCREMENT
    users JSON NOT NULL, -- USERS [USERID1, USERID2]
    gameName VARCHAR(50), --NAME OF GAME
    hostId INTEGER,--ID HOST
    winId INTEGER, --ID WIN
    pieces JSON NOT NULL, -- [{userId: pieces: 3}{userId: number, pieces: 3}]
    game JSON NOT NULL, --- [{userId: number | null, piece: number 1-3,} ...+8 {}]
)

--example
INSERT INTO michi_game (users, gameName, hostId, winId, pieces, game) VALUES ('[3,4]', 'game name', 3,5, '[{"userId": 2, "pieces": 3}, {"userId": 3, "pieces": 3}]', '[{"userId": 0, "id": 1, "piece": 0},{"userId": 0, "id": 2, "piece": 0}, {"userId": 0, "id": 3, "piece": 0},{"userId": 0, "id": 4, "piece": 0},{"userId": 0, "id": 5, "piece": 0}, {"userId": 0, "id": 6, "piece": 0},{"userId": 0, "id": 7, "piece": 0}, {"userId": 0, "id": 8, "piece": 0},{"userId": 0, "id": 9, "piece": 0}]')

--get by user
 select * from michi_game where JSON_CONTAINS(users, '[3]')


--visit next page for more information about json objects
--https://dev.mysql.com/doc/refman/8.0/en/json.html#json-value
-- learning sql 
SELECT JSON_TYPE ("HELLO")