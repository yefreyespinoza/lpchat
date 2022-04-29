import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { AiFillSave } from "react-icons/ai";
import "./Profile.css";
import Statistics from "./Statistics";

function Profile() {
  let isConfig = window.location.pathname === "/profile-config";
  console.log(isConfig);

  return (
    <div className="main p-h-mobile">
      <div className="main-right profile overflow-y-auto">
        <div className="profile-user">
          <div className="profile-user-avatar">
            <img src="https://i.pravatar.cc/300" alt="avatar" />
          </div>
          <div className="profile-user-info">
            <div className="profile-user-info-username">
              {!isConfig ? (
                <span>username</span>
              ) : (
                <input
                  className="input-profile-user-config"
                  value={"username"}
                />
              )}
            </div>
            <div className="profile-user-info-links">
              {isConfig ? (
                <span className="link-profile-span">Friends</span>
              ) : (
                <Link className="link-profile" to={"/friends"}>
                  Friends
                </Link>
              )}
            </div>
            <div>
              {!isConfig ? (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  repellendus incidunt debitis sapiente, voluptatum nulla ipsum
                </p>
              ) : (
                <textarea
                  className="text-area-profile-config"
                  name=""
                  value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  repellendus incidunt debitis sapiente, voluptatum nulla ipsum
                `}
                  id="hola"
                />
              )}
            </div>
          </div>
          <Link
            to={isConfig ? "/p/username" : "/profile-config"}
            className="profile-user-config"
          >
            <div className="profile-user-config-icon">
              {isConfig ? (
                <AiFillSave size={30} color="#7ff" />
              ) : (
                <FiSettings size={30} color="#faf" />
              )}
            </div>
          </Link>
        </div>

        <div className="profile-user-game-info">
          <div className="profile-user-game-info-1">
            <span>partidas jugadas</span> <span>190</span>
          </div>
          <div className="profile-user-game-info-2">
            <div>
              <span className="cyan">partidas ganadas</span>
              <span className="cyan">50</span>
            </div>
            <div>
              <span className="red">partidas perdidas</span>
              <span className="red">50</span>
            </div>
          </div>
        </div>
        <Statistics />
      </div>
    </div>
  );
}

export default Profile;
