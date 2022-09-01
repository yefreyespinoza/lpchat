import {
  MichiGameI,
  MichiGameSave,
  MichiGameStart,
  MichiGameUsernames,
} from "../types/MichiGame";
import { db } from "../../config/db";
import { OkPacket, RowDataPacket } from "mysql2";
function findUsername(id: number) {
  const query = "SELECT username FROM users WHERE id = ?";
  db.query(query, id);
}

//main oprations for michi_game table
export const createNewMichiGame = (
  game: MichiGameStart,
  cb: (err: Error | null, michiGame: MichiGameI | null) => void
): void => {
  console.log(game);
  const startGame: MichiGameSave = {
    users: [game.hostId, 0],
    gameName: game.gameName,
    hostId: game.hostId,
    winId: 0,
    pieces: [
      { userId: game.hostId, pieces: 3 },
      { userId: 0, pieces: 3 },
    ],
    game: [
      { id: 1, userId: 0, piece: 0 },
      { id: 2, userId: 0, piece: 0 },
      { id: 3, userId: 0, piece: 0 },
      { id: 4, userId: 0, piece: 0 },
      { id: 5, userId: 0, piece: 0 },
      { id: 6, userId: 0, piece: 0 },
      { id: 7, userId: 0, piece: 0 },
      { id: 8, userId: 0, piece: 0 },
      { id: 9, userId: 0, piece: 0 },
    ],
  };
  const query =
    "INSERT INTO michi_game (users, gameName, hostId, winId, pieces, game) values (?,?,?,?,?,?) ";
  db.query(
    query,
    [
      JSON.stringify(startGame.users),
      startGame.gameName,
      startGame.hostId,
      startGame.winId,
      JSON.stringify(startGame.pieces),
      JSON.stringify(startGame.game),
    ],
    (err, result) => {
      if (err) return cb(new Error("Error saving game"), null);
      const insertId = (<OkPacket>result).insertId;
      const gameSave: MichiGameSave = {
        ...startGame,
        id: insertId,
      };
      cb(null, gameSave);
    }
  );
};

export const findMichiGameByUserId = (
  userId: number,
  cb: (err: Error | null, game: MichiGameSave[] | null) => void
) => {
  const query = "SELECT * FROM michi_game WHERE JSON_CONTAINS(users, '[?]')";
  db.query(query, userId, (err, result) => {
    if (err) return cb(err, null);
    const rows = <MichiGameSave[]>result;
    return cb(null, rows);
  });
};

export const findOneMIchiGame = (
  id: string | number,
  cb: (err: Error | null, game: MichiGameSave | null) => void
) => {
  const query = "SELECT * FROM michi_game WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return cb(err, null);
    const row = (<RowDataPacket>result)[0];
    if (!row) return cb(new Error("game not found"), null);
    const game: MichiGameSave = row;
    return cb(null, game);
  });
};

export const updateMichiGameById = (
  id: string | number,
  game: MichiGameSave | null
) => {};

export const deleteMichiGameById = (
  id: string | number,
  cb: (err: Error | null, message: string | null) => void
) => {
  const query = "DELETE FROM michi_game WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return cb(err, null);
    return cb(null, "game deleted successfull");
  });
};

//OTHER OPERATIONS
// michi_game oprations where much operations for the game and fazt
export async function findOneMIchiGameWithUsernames(
  id: string | number,
  cb: (err: Error | null, game: MichiGameUsernames | null) => void
) {
  //querys
  const findGameSaveQueryWithUsers = "SELECT * FROM michi_game WHERE id = ?";
  const findUser = "SELECT id, username FROM users WHERE id = ?";
  db.query(findGameSaveQueryWithUsers, [id], (err, result) => {
    if (err) return cb(err, null);
    const row = (<RowDataPacket>result)[0];
    const michi_game: MichiGameUsernames = row;
    if (!row) return cb(new Error("game not found"), null);
    db.query(
      `${findUser} union ${findUser}`,
      [michi_game.users[0], michi_game.users[1]],
      (err, result) => {
        if (err) return cb(err, null);
        //code for return michi game complete
        const row1 = (<RowDataPacket>result)[0];
        const row2 = (<RowDataPacket>result)[1];
        return cb(null, {
          ...michi_game,
          users: [
            { id: row1 ? row1.id : 0, username: row1 ? row1.username : "" },
            { id: row2 ? row2.id : 0, username: row2 ? row2.username : "" },
          ],
        });
      }
    );
  });
}
