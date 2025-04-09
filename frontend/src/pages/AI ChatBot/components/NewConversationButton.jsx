import axios from "axios";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { useChatBotConversation } from "../../../Context/GetChatBotConversation";

const NewConversationButton = () => {
  const { setSessionId, setMessages } = useChatBotConversation();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const mutation = useMutation(
    async () => {
      try {
        const response = await axios.post(
          `${backendUrl}/user/deepseek/create_conversation`,
          null,
          {
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    {
      retry: 3,
      retryDelay: (attempt) => attempt * 1000,
      onSuccess: (data) => {
        setSessionId(data.sessionId);
        setMessages([]); // Purani messages ko clear karein
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handleCreate = () => {
    mutation.mutate();
  };

  return (
    <>
      <div
        onClick={handleCreate}
        className="w-full xs:p-[1.5vw] md:p-[0.9vw] mt-[0.5vw] md:rounded-[0.4vw] xs:rounded-[1vw] cursor-pointer bg-themePurple xs:justify-center lg:justify-start flex items-center gap-2"
      >
        <FaPlus className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.8vw] " />
        <p className="lg:text-[1.2vw] xs:hidden lg:block md:text-[2.2vw] xs:text-[3.4vw] ">
          Create a New Conversation
        </p>
      </div>
    </>
  );
};

export default NewConversationButton;
