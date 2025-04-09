import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { RiGeminiLine } from "react-icons/ri";
import { BiCurrentLocation } from "react-icons/bi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import ChatBubble from "./ChatBubble";

const ChatBotChat = () => {
  const [message, setMessage] = useState("");
  const [aiMessage, setAiMessage] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Create mutation
  const mutation = useMutation(
    (content) => {
      const response = axios.post(`${backendUrl}/user/deepSeek`, content);
      return response;
    },
    {
      onSuccess: (data) => {
        setAiMessage(data.data);
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ message });
  };

  return (
    <div className="w-[75%] overflow-hidden h-full p-[0.7vw]">
      <div className="bg-chatBot w-full h-full bg-center md:rounded-[2vw] flex items-center justify-center">
        <div className="max-w-[55vw] flex items-center flex-col justify-center w-full h-full ">
          <div
            id="chatScrollBar"
            className="w-full h-full overflow-auto md:px-[1.5vw] xs:px-[2.8vw]"
          >
            <ChatBubble message={aiMessage} isRight={false} />
          </div>
          <div className="md:py-[1vw] xs:py-[1.5vw] w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-gray-300/50 border border-gray-400 md:rounded-[0.6vw] xs:rounded-[1.2vw]  flex items-center"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-2 border-none bg-transparent h-full focus:outline-none focus:border-none"
              />
              <button className="md:p-[0.9vw] xs:p-[1.8vw] m-1 md:rounded-[0.4vw] xs:rounded-[1vw] bg-themePurple">
                <IoSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotChat;
