import React from "react";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">Logo</div>
        <div className="header-nav">
          <div className="nav-icon">
            <AiOutlinePlusCircle size={40} />
          </div>
          <div className="nav-icon">
            <BiMessageRounded size={40} />
          </div>
          <div className="nav-icon">
            <IoNotificationsOutline size={40} />
          </div>
          <div className="nav-icon">
            <CgProfile size={40} />
          </div>
        </div>
      </header>
      <div className="App-section"></div>
    </div>
  );
}

export default App;
