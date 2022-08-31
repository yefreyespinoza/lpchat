import GameConfigUser from "./GameConfigUser";
import "./gameConfig.css";
import TableUser from "./TableUser";
import { Link, useNavigate } from "react-router-dom";
import { createNewGameTable } from "./../../api/game";
import { NewMichiGame } from "./../../types/game";
import { ChangeEvent, useState } from "react";

const TableHeader = () => {
  return (
    <div className="g-c-table-header">
      <span>table name</span>
      <span>user host</span>
    </div>
  );
};

const TableConfig = ({ isNew }: { isNew: boolean }) => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<NewMichiGame>({
    gameName: "",
    hostId: 0,
  });
  const createNewMichiGameTable = async () => {
    if (gameState.gameName.trim()) {
      const res = await createNewGameTable(gameState, "");
      if (res.status === 200) return navigate("/app");
      return console.log("error creating game");
    } else {
      console.log("add any name for your michi game table");
    }
  };
  const changeMichiGameName = (e: ChangeEvent<HTMLInputElement>) => {
    setGameState({ ...gameState, gameName: e.target.value });
  };
  const saveMichiGameAction = () => {
    if (isNew) return createNewMichiGameTable();
    return console.log("update michi game table");
  };
  return (
    <div className="g-c-table-config">
      <div className="g-c-t-c-group">
        <span>Table Name</span>
        <input
          onChange={changeMichiGameName}
          type="text"
          placeholder="table name"
        />
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
        <button
          onClick={saveMichiGameAction}
          className="g-c-t-c-button bg-darkcyan white"
        >
          save
        </button>
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
