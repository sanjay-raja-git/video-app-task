import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Profile from "./components/Profile";
import DownloadManager from "./components/DownloadManager";
import "./App.css";

function App() {
  const [videoWatched, setVideoWatched] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [downloadedToday, setDownloadedToday] = useState(false);

  const handleVideoEnd = () => {
    setVideoWatched(prev => prev + 1);
    alert("Watched video complete!");
  };

  const handleClose = () => {
    alert("Closing the website...");
    window.close();
  };

  const handleShowComments = () => {
    alert("Showing comments section...");
  };

  return (
    <div className="app-container">
      <Profile videoWatched={videoWatched} />
      <VideoPlayer
        videoSrc="/SampleVideo_1280x720_1mb.mp4"
        onVideoEnd={handleVideoEnd}
        onClose={handleClose}
        onShowComments={handleShowComments}
      />
      <DownloadManager
        isPremium={isPremium}
        setIsPremium={setIsPremium}
        downloadedToday={downloadedToday}
        setDownloadedToday={setDownloadedToday}
      />
    </div>
  );
}

export default App;
