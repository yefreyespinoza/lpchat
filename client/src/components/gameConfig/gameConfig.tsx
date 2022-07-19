import GameConfigUser from "./GameConfigUser";
import "./gameConfig.css";
import TableUser from "./TableUser";
import { Link } from "react-router-dom";

const TableHeader = () => {
  return (
    <div className="g-c-table-header">
      <span>table name</span>
      <span>user host</span>
    </div>
  );
};

const TableConfig = ({ isNew }: { isNew: boolean }) => {
  return (
    <div className="g-c-table-config">
      <div className="g-c-t-c-group">
        <span>Table Name</span>
        <input type="text" placeholder="table name" />
      </div>
      {!isNew ? (
        <div className="g-c-t-c-link">
          <span>Invitar</span>
          <a href="/">this is a link to other</a>
        </div>
      ) : null}
      <div id="buttons-g-c-container">
        {isNew ? (
          <Link className="g-c-t-c-button bg-orange" to="/app">
            Home
          </Link>
        ) : (
          <button className={"g-c-t-c-button bg-red"}>delete</button>
        )}

        <button className="g-c-t-c-button bg-darkcyan white">save</button>
      </div>
    </div>
  );
};
const TableUsers = () => {
  return (
    <div className="g-c-table-users overflow-y-auto">
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
  const isNew = window.location.pathname === "/new-table";
  console.log(isNew);
  return (
    <div className="main">
      <div className="game-config-container">
        <div className="game-config-users">
          <GameConfigUser />
          <GameConfigUser isUserFriend />
        </div>
        <div className="game-config-game">
          <TableHeader />
          <TableConfig isNew={isNew} />
          {!isNew ? <TableUsers /> : null}
        </div>
      </div>
    </div>
  );
}

export default GameConfig;
