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
        <Link to={"/chat"} className="nav-icon">
          <BiMessageRounded size={40} />
          <span className="number-not">49</span>
        </Link>
        <div className="nav-icon">
          <span className="number-not">10</span>

          <IoNotificationsOutline size={40} />
        </div>
        <Link to={"/p/username"} className="nav-icon">
          <CgProfile size={40} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
