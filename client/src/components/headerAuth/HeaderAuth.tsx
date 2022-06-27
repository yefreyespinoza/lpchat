import React from "react";
import { Link } from "react-router-dom";
function HeaderAuth() {
  return (
    <div className="App-header">
      <header className="header">
        <div className="header-logo">
          {/* ruleta, casino, etc */}
          <Link to={"/"}>Friends Club</Link>
        </div>
        <div className="header-nav">
          <Link to={"/login"} className="nav-icon">
            <span>Login</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HeaderAuth;
