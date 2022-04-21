import React, { useLayoutEffect, useState } from "react";
import "./game.css";
import MessageInput from "../chat/MessageInput";
import Message from "../chat/Message";
function CirclePice({ color }: { color: string }) {
  return (
    <span className="circle-piece" style={{ backgroundColor: color }}></span>
  );
}
function GameBox({ gameBoxDiv, divX }: { gameBoxDiv: any; divX: any }) {
  return (
    <div ref={gameBoxDiv} className="game-box" style={{ height: divX }}>
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

function useWindowSize(ref: any) {
  const [size, setSize] = useState([0, 0, 0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      if (ref.current !== null) {
        const { current } = ref;
        const boundingRect = current.getBoundingClientRect();
        const { width, height } = boundingRect;
        setSize([window.innerWidth, window.innerHeight, width, height]);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [ref]);
  return size;
}

function Game() {
  let gameBoxDiv = React.useRef<any>(null);
  const divSize = useWindowSize(gameBoxDiv);
  return (
    <div className="game">
      <div className="game-chat">
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
      <div className="game-container">
        <div className="game-canvas">
          <div className="bottom-game-none">
            <CirclePice color="#000" />
            <CirclePice color="#000" />
            <CirclePice color="#7ff" />
          </div>

          <div className="game-container-game">
            <GameBox gameBoxDiv={gameBoxDiv} divX={divSize[2]} />
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
