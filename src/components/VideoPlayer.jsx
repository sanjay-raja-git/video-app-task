import React, { useRef } from "react";

const VideoPlayer = ({ videoSrc, onVideoEnd, onClose, onShowComments }) => {
  const videoRef = useRef(null);
  let tapCount = 0;
  let tapTimer;

  const handleTap = (e) => {
    const width = window.innerWidth;
    const x = e.clientX;

    tapCount += 1;

    if (tapTimer) clearTimeout(tapTimer);

    tapTimer = setTimeout(() => {
      if (tapCount === 1) {
        videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
      } else if (tapCount === 2) {
        if (x > width / 2) videoRef.current.currentTime += 10;
        else videoRef.current.currentTime -= 10;
      } else if (tapCount === 3) {
        if (x > width * 0.66) {
          onClose();
        } else if (x < width * 0.33) {
          onShowComments();
        } else {
          onVideoEnd();
        }
      }
      tapCount = 0;
    }, 400);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        onClick={handleTap}
        onEnded={onVideoEnd}
        src={videoSrc}
        width="100%"
        controls={false}
      />
    </div>
  );
};

export default VideoPlayer;
