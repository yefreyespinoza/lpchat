import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
function MichiItem() {
  return (
    <div className="michi-item">
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
        <div className="michi-item-go">
          <span>go</span>
        </div>
        <div className="michi-items-icon">
          <BsThreeDotsVertical size={40} />
        </div>
      </div>
    </div>
  );
}

export default MichiItem;
