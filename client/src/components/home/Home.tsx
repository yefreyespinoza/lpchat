import React, { useContext, useEffect, useState } from "react";
import MichiItem from "./MichiItem";
import ProfileGame from "../profile/ProfileGame";
import "./Home.css";
import { MichiGameI } from "../../types/game";
import AppContext from "../../context/AppContext";
import { getMichiGamesByUserId } from "../../api/game";
function Home() {
  const [isOpenMenuItem, setIsOpenMenuItem] = React.useState(false);
  const { auth } = useContext(AppContext);
  const [myGames, setMyGames] = useState<MichiGameI[]>([]);

  const handleOpenMenuItem = (id?: string) => {
    setIsOpenMenuItem(!isOpenMenuItem);
  };
  useEffect(() => {
    (async () => {
      const res = await getMichiGamesByUserId(auth.token);
      console.log(res);
      if (res.status === 200 || res.status === 305) setMyGames(res.data);
    })();
  }, []);
  return (
    <div className="main p-h-mobile">
      <div className="main-left main-left-hidden overflow-y-auto">
        <ProfileGame />
      </div>
      <div className="main-right overflow-auto">
        {/* <MichiItem
          openMenu={isOpenMenuItem}
          openMenuHandle={handleOpenMenuItem}
        /> */}
        {myGames.map((item, i) => {
          return (
            <MichiItem
              key={i}
              openMenu={isOpenMenuItem}
              openMenuHandle={handleOpenMenuItem}
              gameName={item.gameName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
