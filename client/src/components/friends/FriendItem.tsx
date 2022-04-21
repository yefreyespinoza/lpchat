import React from "react";
import "./FriendItem.css";
import { BsChat } from "react-icons/bs";
function FriendItem() {
  return (
    <div className="friend-item">
      <div id="friend-item__avatar">
        <div id="f-i-photo"></div>
      </div>
      <div id="friend-item__info">
        <span>username</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ipsum quod ut saepe dicta, optio numquam amet voluptatem earum?
        </p>
      </div>
      <div id="friend-item__icon-chat">
        <BsChat />
      </div>
    </div>
  );
}

export default FriendItem;
