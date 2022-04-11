import React from "react";
import FriendItem from "../FriendItem";
import Message from "./Message";
function Chat() {
  return (
    <div className="App-section">
      <div className="profile-section">
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>
      <div className="friends-section overflow-auto">
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
    </div>
  );
}

export default Chat;
