import React from "react";
import MichiItem from "../MichiItem";
import Profile from "../Profile";

function Home() {
  return (
    <div className="App-section">
      <div className="profile-section">
        <Profile />
      </div>
      <div className="michis-section overflow-auto">
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
  );
}

export default Home;
