import React from "react";
import "./MessageInput.css";
import { RiSendPlane2Fill } from "react-icons/ri";
function MessageInput() {
  return (
    <div className="box-message-textarea">
      <div className="box-message-input">
        <input type="text" placeholder="write message" />
        <button>
          <RiSendPlane2Fill size={30} />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
