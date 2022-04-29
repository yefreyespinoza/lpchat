import React from "react";
import FriendItem from "./FriendItem";
import ProfileGame from "../profile/ProfileGame";
function Friends() {
  return (
    <div className="main p-h-mobile">
      <div className="main-left main-left-hidden overflow-y-auto">
        <ProfileGame />
      </div>
      <div className="friends-section main-right overflow-y-auto">
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
