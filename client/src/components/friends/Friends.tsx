import React from "react";
import FriendItem from "../FriendItem";
import ProfileGame from "../profile/ProfileGame";
function Friends() {
  return (
    <div className="App-section">
      <div className="profile-section">
        <ProfileGame />
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
