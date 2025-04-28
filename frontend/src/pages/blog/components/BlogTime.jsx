import React, { useState, useEffect } from "react";

const BlogTime = () => {
  // Total time in seconds (5 hours = 18000 seconds)
  const totalTime = 48 * 60 * 60;

  // State to hold remaining time in seconds
  const [remainingTime, setRemainingTime] = useState(totalTime);

  // Convert remaining time in seconds to hours, minutes, and seconds
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours} : ${minutes} : ${seconds}`;
  };

  useEffect(() => {
    // If time reaches 0, stop the countdown
    if (remainingTime <= 0) return;

    // Start the countdown timer
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000); // 1000ms = 1 second

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [remainingTime]); // Re-run effect when remainingTime changes

  return (
    <div>
      <h1 className="text-2xl text-themePurple font-lexend_deca">
        Remaining Time: {formatTime(remainingTime)}
      </h1>
    </div>
  );
};

export default BlogTime;
