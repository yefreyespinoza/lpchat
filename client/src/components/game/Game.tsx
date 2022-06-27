import React, { useState } from "react";
import "./game.css";
import MessageInput from "../chat/MessageInput";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { RiChat1Fill } from "react-icons/ri";
import Message from "../chat/Message";
function CirclePice({ color }: { color: string }) {
  return (
    <span className="circle-piece" style={{ backgroundColor: color }}></span>
  );
}
function GameBox() {
  return (
    <div className="game-box">
      <div className="piece-item">
        <div className="piece-item-circle-pink piece-item-circle"></div>
      </div>
      <div className="piece-item">
        <div className="piece-item-circle-white piece-item-circle"></div>
      </div>
      <div className="piece-item">
        <div className="piece-item-circle-green piece-item-circle"></div>
      </div>
      <div className="piece-item">
        <div className="piece-item-circle-white piece-item-circle"></div>
      </div>
      <div className="piece-item">
        <div className="piece-item-circle-pink piece-item-circle"></div>
      </div>
      <div className="piece-item">
        <div className="piece-item-circle-green piece-item-circle"></div>
      </div>
      <div className="piece-item">
        <div className="piece-item-circle-white piece-item-circle"></div>
      </div>
      <div className="piece-item">
        <div className="piece-item-circle-green piece-item-circle"></div>
      </div>
      <div className="piece-item">
        <div className="piece-item-circle-pink piece-item-circle"></div>
      </div>
    </div>
  );
}
function ToggleChatGame({
  isChatOpen,
  onClick,
}: {
  isChatOpen?: boolean;
  onClick?: any;
}) {
  return (
    <div id="toggle-chat-game" onClick={onClick}>
      {/* <AiOutlineDoubleRight /> */}
      {!isChatOpen ? <RiChat1Fill /> : <AiOutlineDoubleRight />}
    </div>
  );
}

function Game() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChatOpen = () => setIsChatOpen(!isChatOpen);
  return (
    <div className="game main relative">
      <ToggleChatGame
        isChatOpen={isChatOpen}
        onClick={() => {
          toggleChatOpen();
        }}
      />
      <div
        className={
          !isChatOpen ? "game-chat game-left" : "game-chat game-left-open"
        }
      >
        <div className="game-chat-table-chat">
          <span>table name</span>
        </div>
        <div className="game-chat-container">
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
          <Message text="this is a text" />
          <Message text="this is a text" isMe />
        </div>
        <MessageInput />
      </div>
      <div
        className={
          !isChatOpen
            ? "game-container game-right"
            : "game-container game-right-close"
        }
      >
        <div className="game-canvas">
          <div className="bottom-game-none">
            <CirclePice color="#000" />
            <CirclePice color="#000" />
            <CirclePice color="#7ff" />
          </div>

          <div className="game-container-game">
            <GameBox />
          </div>
          <div className="top-game-users">
            <span>username1</span>
            <span>vs</span>
            <span>username2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
