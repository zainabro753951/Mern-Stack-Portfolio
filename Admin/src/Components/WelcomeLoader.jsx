import React from "react";
import { GridLoader } from "react-spinners";

const WelcomeLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <GridLoader size={150} color="#FF6D5A" />
    </div>
  );
};

export default WelcomeLoader;
