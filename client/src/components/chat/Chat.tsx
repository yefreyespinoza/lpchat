import React from "react";
import Message from "./Message";
import "./Chat.css";
import MessageInput from "./MessageInput";
import ConversationItem from "./ConversationItem";
import ChatOpen from "./ChatOpen";
function Chat() {
  const [currentChat, setCurrentChat] = React.useState(false);
  return (
    <>
      <div className="main">
        <div
          className={
            !currentChat
              ? "left-chat overflow-y-auto"
              : "left-chat-close overflow-y-auto"
          }
        >
          <ConversationItem
            onClick={() => {
              setCurrentChat(true);
            }}
          />
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

        <div className={!currentChat ? "right-chat" : "right-chat-open"}>
          {!currentChat ? (
            <ChatOpen />
          ) : (
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
            </div>
          )}
          {currentChat ? <MessageInput /> : null}
        </div>
      </div>
    </>
  );
}

export default Chat;
