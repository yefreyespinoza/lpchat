import React from "react";
import { MessagePropsI } from "../../types/types";

function Message(props: MessagePropsI) {
  return (
    <div className={props.isMe ? "message-item" : "message-item"}>
      <div
        className={
          props.isMe ? "message-shape message-shape-me" : "message-shape"
        }
      ></div>
      <div
        className={
          props.isMe ? "message-message-me message-message" : "message-message"
        }
      >
        <div className="message-message-text">{props.text}</div>
      </div>
    </div>
  );
}

export default Message;
