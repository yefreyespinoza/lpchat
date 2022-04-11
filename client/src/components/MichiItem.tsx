import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GameItemI } from "../types/types";
function MichiItem(props: GameItemI) {
  return (
    <div className="michi-item">
      {props.openMenu && (
        <div className="michi-options-menu">
          <Link to={"/game"}>go</Link>
          <Link to={"/game-config"}>config</Link>
          <span>delete</span>
        </div>
      )}

      <div className="michi-item-users">
        <div className="michi-item-user">
          <span>username1</span>
        </div>
        <div className="michi-item-state">
          <span>WIN</span>
        </div>
        <div className="michi-item-user">
          <span>username2</span>
        </div>
      </div>
      <div className="michi-item-options">
        <Link to={"/game"} className="michi-item-go">
          <span>go</span>
        </Link>
        <div className="michi-items-icon" onClick={props.openMenuHandle}>
          <BsThreeDotsVertical size={40} />
        </div>
      </div>
    </div>
  );
}

export default MichiItem;
