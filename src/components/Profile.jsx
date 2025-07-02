import React from "react";
import { calculatePoints } from "../utils/videoPoints";

const Profile = ({ videoWatched }) => {
  const points = calculatePoints(videoWatched);
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p>Videos Watched: {videoWatched}</p>
      <p>Points: {points}</p>
    </div>
  );
};

export default Profile;
