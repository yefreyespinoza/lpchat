import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { CgProfile } from "react-icons/cg";
import { HiPlusSm } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import MichiItem from "./components/MichiItem";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">Michi</div>
        <div className="header-nav">
          <div className="nav-icon">
            <HiPlusSm size={40} />
          </div>
          <div className="nav-icon">
            <BiMessageRounded size={40} />
            <span className="number-not">49</span>
          </div>
          <div className="nav-icon">
            <span className="number-not">10</span>

            <IoNotificationsOutline size={40} />
          </div>
          <div className="nav-icon">
            <CgProfile size={40} />
          </div>
        </div>
      </header>
      <div className="App-section">
        <div className="profile-section">
          <Profile />
        </div>
        <div className="michis-section">
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
          <MichiItem />
        </div>
      </div>
    </div>
  );
}

export default App;
