import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiPlusSm } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="App-header">
      <div className="header-logo">
        <Link to={"/"}>Michi</Link>
      </div>
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
  );
}

export default Header;
