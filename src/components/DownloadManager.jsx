import React, { useState } from "react";

const DownloadManager = ({ isPremium, setIsPremium, downloadedToday, setDownloadedToday }) => {
  const handleDownload = () => {
    if (isPremium || !downloadedToday) {
      const link = document.createElement("a");
      link.href = "/SampleVideo_1280x720_1mb.mp4";
      link.download = "SampleVideo.mp4";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (!isPremium) setDownloadedToday(true);
    } else {
      alert("Only one video download allowed per day. Go premium for unlimited access.");
    }
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_xxxxxx", // I dont have a razorpay key so you can Replace this  with your Razorpay test key
      amount: 10000,
      currency: "INR",
      name: "Premium Plan",
      description: "Unlimited video downloads",
      handler: () => {
        alert("Payment Successful!");
        setIsPremium(true);
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="download-manager">
      <button onClick={handleDownload}>Download Video</button>
      <button onClick={handlePayment}>Go Premium</button>
    </div>
  );
};

export default DownloadManager;
