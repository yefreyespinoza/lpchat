import React from "react";
import GameConfigUser from "./GameConfigUser";
import "./gameConfig.css";
import TableUser from "./TableUser";

const TableHeader = () => {
  return (
    <div className="g-c-table-header">
      <span>table name</span>
      <span>user host</span>
    </div>
  );
};

const TableConfig = () => {
  return (
    <div className="g-c-table-config">
      <div className="g-c-t-c-group">
        <span>Table Name</span>
        <input type="text" placeholder="table_name" />
      </div>
      <div className="g-c-t-c-link">
        <span>Invitar</span>
        <a href="/">this is a link to other</a>
      </div>
      <div id="buttons-g-c-container">
        <button className="g-c-t-c-button bg-red">delete</button>
        <button className="g-c-t-c-button bg-black white">save</button>
      </div>
    </div>
  );
};
const TableUsers = () => {
  return (
    <div className="g-c-table-users">
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
      <TableUser />
    </div>
  );
};
function GameConfig() {
  return (
    <div className="game-config">
      <div className="game-config-container">
        <div className="game-config-users">
          <GameConfigUser />
          <GameConfigUser isUserFriend />
        </div>
        <div className="game-config-game">
          <TableHeader />
          <TableConfig />
          <TableUsers />
        </div>
      </div>
    </div>
  );
}

export default GameConfig;
