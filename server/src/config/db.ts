import mysql from "mysql2";
import config from "./config";
import mysqlpormise from "mysql2/promise";

export const connect = async () => {
  return await mysqlpormise.createConnection(config.db_uri);
};
export const db = mysql.createConnection(config.db_uri);
