import bcrypt from "bcryptjs";
import { User } from "../types/User";
import { db } from "../../config/db";
import { OkPacket, RowDataPacket } from "mysql2";

//AUTH
//function for encrypt user password
export const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

//function for validate user password
export const validatePassword = async (
  password: string,
  encryptedPassword: string
) => await bcrypt.compare(password, encryptedPassword);

//create new user
export const createNewUser = async (
  user: User,
  cb: (err: Error | null, user: User | null) => void
) => {
  //encrypt password
  const newUser: User = {
    username: user.username,
    password: await encryptPassword(user.password),
  };

  //query for create user
  const query = "INSERT INTO users (username, password) VALUES (?,?)";

  //execute SQL query
  db.query(query, [newUser.username, newUser.password], (err, result) => {
    if (err) return cb(err, null);
    const insertId = (<OkPacket>result).insertId;
    const newUser: User = {
      id: insertId,
      username: user.username,
      password: "",
    };
    cb(null, newUser);
  });
};

//find one user by id
export const findUserByUsername = (
  username: string,
  cb: (err: Error | null, user: User | null) => void
) => {
  //query for find user by username
  const query = "SELECT * FROM users WHERE username = ?";
  //execute query
  db.query(query, username, (err, result) => {
    if (err) return cb(err, null);
    const row = (<RowDataPacket>result)[0];
    if (!row) return cb(new Error("user not found"), null);
    const user: User = {
      id: row.id,
      username: row.username,
      password: row.password,
    };
    cb(null, user);
  });
};

//OTHER OPERATIONS

const findUsernameByUserId = () => {};
