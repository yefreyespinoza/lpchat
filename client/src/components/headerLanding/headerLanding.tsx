import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./HeaderLanding.css";
function HeaderLanding() {
  const { auth } = useContext(AppContext);
  return (
    <div className="App-header">
      <header className="header">
        <div className="header-logo">
          {/* ruleta, casino, etc */}
          <Link to={"/"}>Friends Club</Link>
        </div>
        <div className="header-nav">
          <Link
            to={auth.auth ? "/app " : "/login"}
            className="nav-icon button-header-app"
          >
            <span>
              {auth.loading
                ? ""
                : auth.auth && !auth.loading
                ? "Open App"
                : "Login"}
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HeaderLanding;
