import React from "react";
import Profile from "../Profile";
import FriendItem from "../FriendItem";
function Friends() {
  return (
    <div className="App-section">
      <div className="profile-section">
        <Profile />
      </div>
      <div className="friends-section overflow-auto">
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>
    </div>
  );
}

export default Friends;
