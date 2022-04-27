import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Chat from "../components/chat/Chat";
import Friends from "../components/friends/Friends";
import Game from "../components/game/Game";
import GameConfig from "../components/gameConfig/gameConfig";
import Profile from "../components/profile/Profile";
import Header from "../components/header/Header";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-config" element={<GameConfig />} />
        <Route path="/p/:username" element={<Profile />} />
        <Route path="/profile-config" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Router;
