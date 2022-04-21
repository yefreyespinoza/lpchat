import React from "react";
import "./conversationItem.css";
import { GoChevronDown } from "react-icons/go";
function ConversationItem() {
  return (
    <div className="conversation-item">
      <div id="conversation-item__avatar">
        <div></div>
      </div>
      <div id="conversation-item__chat-info">
        <div id="conversation-item__chat-info_username">
          <span>username</span>
        </div>
        <span>last message</span>
        <span>today 3:30 pm</span>
      </div>
      <div id="conversation-item__chat-icon">
        <GoChevronDown color="#fdf" />
      </div>
    </div>
  );
}

export default ConversationItem;
