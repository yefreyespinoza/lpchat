import React from "react";
import "./gameConfigUser.css";
import { IoMdAdd } from "react-icons/io";
import { GameConfigUserPropsI } from "../../types/types";
function GameConfigUser(p: GameConfigUserPropsI) {
  return (
    <div className="game-config-user-container">
      <div className="game-config-user-username-div">
        <span className="g-c-u-u">username</span>
        {p.isUserFriend ? (
          <button className="g-c-u-b">
            <IoMdAdd color="#fdf" size={20} />
          </button>
        ) : null}
      </div>
      <div className="game-config-user-statistics-div">
        <div className="game-config-user-statistics"></div>
      </div>
    </div>
  );
}

export default GameConfigUser;
