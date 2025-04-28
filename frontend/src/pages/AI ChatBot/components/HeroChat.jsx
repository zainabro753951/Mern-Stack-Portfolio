import React, { useState } from "react";
import ChatBotSideBar from "./ChatBotSideBar";
import ChatBotHome from "./ChatBotHome";
import ChatBotChat from "./ChatBotChat";

const HeroChat = () => {
  const [isConverstionCreated, setIsConverstionCreated] = useState("");
  return (
    <div className="w-full h-screen bg-[#f9fbff]">
      <div className="w-full h-full flex *:transition-all duration-700">
        <ChatBotSideBar />
        <ChatBotHome />
      </div>
    </div>
  );
};

export default HeroChat;
