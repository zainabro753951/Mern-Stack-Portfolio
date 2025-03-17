import React from "react";
import { Link } from "react-router-dom";

const ChatbotButton = () => {
  return (
    <Link
      to={"/chat-bot"}
      id="chatHoverAble"
      className="z-50 hover:animate-none cursor-pointer animate-bounce transition-all duration-300 flex  fixed bottom-10 right-10 items-center"
    >
      <div className="w-[5vw] h-[5vw] rounded-full overflow-hidden">
        <img className="w-full h-full" src="/imgs/bot.png" alt="" />
      </div>
      <div
        id="chatHover"
        className="bg-white rounded-full whitespace-nowrap transition-all duration-1000 ease-in-out border-gray-300 max-w-0 overflow-hidden"
      >
        <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.6vw] lg:py-[1vw] md:py-[2vw] xs:py-[3.5vw] px-3 font-jost text-gray-500">
          Examplet Text lorem epsum doller sit
        </p>
      </div>
    </Link>
  );
};

export default ChatbotButton;
