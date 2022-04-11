import React from "react";
import MichiItem from "../MichiItem";
import Profile from "../Profile";

function Home() {
  const [isOpenMenuItem, setIsOpenMenuItem] = React.useState(false);

  const handleOpenMenuItem = (id?: string) => {
    setIsOpenMenuItem(!isOpenMenuItem);
  };
  return (
    <div className="App-section">
      <div className="profile-section">
        <Profile />
      </div>
      <div className="michis-section overflow-auto">
        <MichiItem
          openMenu={isOpenMenuItem}
          openMenuHandle={handleOpenMenuItem}
        />
        <MichiItem
          openMenu={isOpenMenuItem}
          openMenuHandle={handleOpenMenuItem}
        />
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
