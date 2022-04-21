import React from "react";
import Message from "./Message";
import "./Chat.css";
import MessageInput from "./MessageInput";
import ConversationItem from "./ConversationItem";
function Chat() {
  return (
    <>
      <div className="chat-section-app">
        <div className="chat-profile-section">
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
        </div>
        <div className="chat-section">
          <div className="messages-container overflow-auto">
            <Message
              text="
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates architecto doloremque praesentium, eligendi non autem recusandae voluptas et, eos perferendis nesciunt ad eveniet, ipsum necessitatibus impedit consectetur laborum accusamus
        "
            />
            <Message text="hola" />
            <Message text="this is the end of the month" />
            <Message
              isMe={true}
              text="
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates architecto doloremque praesentium, eligendi non autem recusandae voluptas et, eos perferendis nesciunt ad eveniet, ipsum necessitatibus impedit consectetur laborum accusamus
        "
            />
            <Message text="hola" isMe={true} />
            <Message text="this is the end of the month" isMe={true} />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          <MessageInput />
        </div>
      </div>
    </>
  );
}

export default Chat;
