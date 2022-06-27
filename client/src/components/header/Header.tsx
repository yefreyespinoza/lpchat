import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiPlusSm } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="App-header">
      <header className="header">
        <div className="header-logo">
          {/* ruleta, casino, etc */}
          <Link to={"/app"}>Michi Game</Link>
        </div>
        <div className="header-nav">
          <div className="nav-icon">
            <HiPlusSm size={40} />
          </div>
          <div className="nav-icon">
            <FiSearch size={40} />
          </div>
          <Link to={"/chat"} className="nav-icon">
            <BiMessageRounded size={40} />
            <span className="number-not">49</span>
          </Link>

          <Link to={"/p/username"} className="nav-icon">
            <span className="number-not">10</span>
            <CgProfile size={40} />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
