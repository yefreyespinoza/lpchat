import React from "react";
import MichiItem from "./MichiItem";
import ProfileGame from "../profile/ProfileGame";
import "./Home.css";
function Home() {
  const [isOpenMenuItem, setIsOpenMenuItem] = React.useState(false);

  const handleOpenMenuItem = (id?: string) => {
    setIsOpenMenuItem(!isOpenMenuItem);
  };
  return (
    <div className="main">
      <div className="main-left main-left-hidden overflow-y-auto">
        <ProfileGame />
      </div>
      <div className="main-right overflow-auto">
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
