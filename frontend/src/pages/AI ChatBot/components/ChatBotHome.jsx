import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { RiGeminiLine } from "react-icons/ri";
import ChatBubble from "./ChatBubble";
import { BiCurrentLocation } from "react-icons/bi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { useChatBotConversation } from "../../../Context/GetChatBotConversation";
import { useMutation } from "react-query";
import axios from "axios";
import { useSocketContext } from "../../../Context/SocketIO";

const ChatBotHome = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, sessionId } = useChatBotConversation();
  const [message, setMessage] = useState("");
  const [realtimeMessage, setRealtimeMessage] = useState("");
  const [readyToSendMessage, setReadyToSendMessage] = useState(false);
  const chatContainerRef = useRef(null);

  // create mutation for posting message
  const mutation = useMutation((data) => {
    const response = axios.post(
      "http://localhost:3000/user/deepseek/send_message",
      data,
      { withCredentials: true }
    );
    return response;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Empty message ko handle karein
    setMessage("");
    setReadyToSendMessage(true);
    mutation.mutate(
      { sessionId, message, sender: "user" },
      {
        onSuccess: () => {
          setMessage(""); // Input field ko clear karein
        },
      }
    );
  };

  useEffect(() => {
    const handleUserMessage = (data) => {
      console.log("User message received:", data);
      setMessages((prev) => [...prev, data]);
    };

    const handleAiRealtimeMessage = (data) => {
      console.log("AI real-time message received:", data);
      setRealtimeMessage((prev) => prev + data.message);
    };

    const handleAiResponse = (data) => {
      console.log("AI response received:", data);
      setMessages((prev) => [...prev, data]);
      setRealtimeMessage(""); // Clear real-time message buffer
    };

    socket.on("user-message", handleUserMessage);
    socket.on("ai-realtimeMessage", handleAiRealtimeMessage);
    socket.on("ai-response", handleAiResponse);

    return () => {
      socket.off("user-message", handleUserMessage);
      socket.off("ai-realtimeMessage", handleAiRealtimeMessage);
      socket.off("ai-response", handleAiResponse);
    };
  }, [socket, setMessages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, realtimeMessage]);

  useEffect(() => {
    setReadyToSendMessage(messages?.length > 0);
  }, [messages]);

  console.log(readyToSendMessage);

  return (
    <div className="lg:w-[75%] xs:w-full h-full overflow-hidden p-[0.7vw]">
      <div className="bg-chatBot w-full h-full bg-center md:rounded-[2vw] flex items-center justify-center">
        <div className="lg:max-w-[55vw] xs:max-w-full px-3 flex items-center flex-col justify-center w-full h-full">
          <h1
            className={`lg:text-[4vw] md:text-[5vw] xs:text-[5.5vw] font-lexend_deca font-semibold ${
              readyToSendMessage ? "hidden" : "block"
            }`}
          >
            Welcome to{" "}
            <span className="border-l-2 px-2 border-themePurple chatTrasnEffect">
              ChatBot
            </span>
          </h1>
          <p
            className={`lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] xs:mt-[1.5vw] md:text-[2.2vw] xs:text-[3.4vw] text-gray-700 text-center font-jost font-medium ${
              readyToSendMessage ? "hidden" : "block"
            }`}
          >
            The power of Al at your service - Tame the knowledge !
          </p>

          {/* Messages Box here */}

          <div
            id="chatScrollBar"
            className={`${
              readyToSendMessage ? "h-full" : "hidden h-0"
            } w-full transition-all duration-500 overflow-auto`}
          >
            {messages?.map((item, index) => (
              <ChatBubble
                key={index}
                message={item.message}
                isRight={item.sender === "user"}
              />
            ))}
            {realtimeMessage && (
              <ChatBubble message={realtimeMessage} isRight={false} />
            )}
            <div ref={chatContainerRef}></div>
          </div>

          <div
            className={`${
              readyToSendMessage
                ? "md:py-[1.5vw] xs:py-[2.5vw] "
                : "md:py-[4.5vw] xs:py-[6.5vw]"
            } w-full`}
          >
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
              <button
                type="submit"
                className="md:p-[0.9vw] xs:p-[1.8vw] m-1 md:rounded-[0.4vw] xs:rounded-[1vw] bg-themePurple"
              >
                <IoSend />
              </button>
            </form>
          </div>
          <div
            className={`w-full grid xs:grid-cols-1 lg:grid-cols-3 place-items-center  gap-[3vw] ${
              readyToSendMessage ? "hidden" : "block"
            }`}
          >
            <div className="flex flex-col gap-1 xs:w-[40%] lg:w-full items-center text-center">
              <RiGeminiLine className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.6vw]" />
              <h4 className="font-lexend_deca lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] xs:mt-[1.5vw] md:text-[2.2vw] xs:text-[3.4vw] font-medium">
                Clear and Precise
              </h4>
              <p className="lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] xs:mt-[1.5vw] md:text-[2.2vw] xs:text-[3.4vw] text-gray-700 font-jost  lg:leading-[1.6vw] md:leading-[2.6vw] xs:leading-[3.9vw]">
                The power of Al at your service - Tame the knowledge !
              </p>
            </div>
            <div className="flex flex-col xs:w-[40%] lg:w-full gap-1 items-center text-center">
              <BiCurrentLocation className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.6vw]" />
              <h4 className="font-lexend_deca lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] xs:mt-[1.5vw] md:text-[2.2vw] xs:text-[3.4vw] font-medium">
                Clear and Precise
              </h4>
              <p className="lg:text-[1.2vw] text-center lg:mt-[0.5vw] md:mt-[1vw] xs:mt-[1.5vw] md:text-[2.2vw] xs:text-[3.4vw] text-gray-700 font-jost  lg:leading-[1.6vw] md:leading-[2.6vw] xs:leading-[3.9vw]">
                The power of Al at your service - Tame the knowledge !
              </p>
            </div>
            <div className="flex flex-col xs:w-[40%] lg:w-full gap-1 items-center text-center">
              <IoAnalyticsSharp className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.6vw]" />
              <h4 className="font-lexend_deca lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] xs:mt-[1.5vw] md:text-[2.2vw] xs:text-[3.4vw] font-medium">
                Clear and Precise
              </h4>
              <p className="lg:text-[1.2vw] lg:mt-[0.5vw] md:mt-[1vw] xs:mt-[1.5vw] md:text-[2.2vw] xs:text-[3.4vw] text-gray-700 font-jost  lg:leading-[1.6vw] md:leading-[2.6vw] xs:leading-[3.9vw]">
                The power of Al at your service - Tame the knowledge !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotHome;
