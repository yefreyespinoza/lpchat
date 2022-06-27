import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/home/Home";
import Chat from "../components/chat/Chat";
import Friends from "../components/friends/Friends";
import Game from "../components/game/Game";
import GameConfig from "../components/gameConfig/gameConfig";
import Profile from "../components/profile/Profile";
import Login from "../components/login/Login";
import Landing from "../components/landing/Landing";
import Register from "../components/register/Register";
import Header from "../components/header/Header";
import HeaderAuth from "../components/headerAuth/HeaderAuth";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import HeaderLanding from "../components/headerLanding/headerLanding";
const Router = () => {
  const { auth } = useContext(AppContext);
  const isAuth = auth.auth && !auth.loading;
  const isLoading = auth.loading;
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderLanding />} />
        <Route path="/terms" element={null} />
        <Route path="/privacy" element={null} />
        <Route
          path="/*"
          element={isLoading ? null : isAuth ? <Header /> : <HeaderAuth />}
        />
      </Routes>
      <Routes>
        <Route
          path="/app"
          index
          element={
            isLoading ? null : isAuth ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/" index element={<Landing />} />
        <Route
          path="/login"
          element={
            isLoading ? null : isAuth ? (
              <Navigate to="/app" replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            isLoading ? null : isAuth ? (
              <Navigate to="/app" replace />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/chat"
          element={
            isLoading ? null : isAuth ? (
              <Chat />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/friends"
          element={
            isLoading ? null : isAuth ? (
              <Friends />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/game"
          element={
            isLoading ? null : isAuth ? (
              <Game />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/game-config"
          element={
            isLoading ? null : isAuth ? (
              <GameConfig />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/p/:username"
          element={
            isLoading ? null : isAuth ? (
              <Profile />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/profile-config"
          element={
            isLoading ? null : isAuth ? (
              <Profile />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
