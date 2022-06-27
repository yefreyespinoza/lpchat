import mysql from "mysql2";
import config from "./config";
const connection = mysql.createConnection(config.db_uri);
export default connection;
