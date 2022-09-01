import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GameItemI } from "../../types/types";

function MichiItem(props: GameItemI) {
  return (
    <div className="michi-item">
      <div className="michi-item-users">
        <div className="michi-item-user">
          <span>username1</span>
        </div>
        <div className="michi-item-vs">
          <span>VS</span>
        </div>
        <div className="michi-item-user">
          <span>username2</span>
        </div>
        <Link
          to="/game-config"
          id="icons_otuline_setting"
          onClick={props.openMenuHandle}
        >
          <AiOutlineSetting size={30} />
        </Link>
      </div>
      <div className="michi-item-options">
        <div>
          <div className="michi-table-name">
            <span>{props.gameName}</span>
          </div>
          <div className="michi-item-win">
            <span>WIN</span>
          </div>
          <Link to={"/game"} className="michi-item-go">
            <span>go</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MichiItem;
