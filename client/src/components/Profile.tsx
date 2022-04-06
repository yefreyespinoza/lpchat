import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="profile">
      <div>
        <div className="p-s-username">
          <span>@username</span>
        </div>

        <div className="won-games">
          <p>
            <Link to={"/friends"}>Friends</Link>
          </p>
          <p>30</p>
        </div>
        <div className="all-games">
          <p>partidas ganadas</p>
          <p>1000</p>
        </div>
        <div className="won-games">
          <p>partidas ganadas</p>
          <p>600</p>
        </div>
        <div className="lost-games">
          <p>partidas perdidas</p>
          <p>50</p>
        </div>
        <div className="won-games">
          <p>partidas en curso</p>
          <p>40</p>
        </div>
        <div className="p-s-username">
          <span>crear nuevo</span>
        </div>
      </div>

      <div className="statistics"></div>
    </div>
  );
}

export default Profile;
