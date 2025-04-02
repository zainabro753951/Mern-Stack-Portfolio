import React, { useEffect } from "react";
import UserAvator from "./UserAvator";
import ConversationHistory from "./ConversationHistory";
import NewConversationButton from "./NewConversationButton";
import SideBarButton from "./SideBarButton";
import { VscTrash } from "react-icons/vsc";
import { LuSunMedium } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import axios from "axios";
import { useMutation } from "react-query";
import { useChatBotConversation } from "../../../Context/GetChatBotConversation";

const ChatBotSideBar = () => {
  const { setAllConversations, setSessionId, setMessages } =
    useChatBotConversation();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const deleteConversationMutation = useMutation(
    async () => {
      try {
        const response = await axios.delete(
          `${backendUrl}/user/deepseek/delete_conversation`,
          {
            withCredentials: true,
          }
        );
        return response;
      } catch (error) {
        throw error;
      }
    },
    {
      retry: 3,
      retryDelay: (attempt) => attempt * 1000,
      onError: (error) => {
        console.error(error);
      },
    }
  );

  useEffect(() => {
    if (deleteConversationMutation.isSuccess) {
      setAllConversations([]);
      setSessionId(null);
      setMessages([]);
    }
  }, [deleteConversationMutation.isSuccess, setAllConversations]);

  const deleteConversation = () => {
    if (!deleteConversationMutation.isLoading) {
      deleteConversationMutation.mutate();
    }
  };
  return (
    <>
      <div className="lg:w-[25%] h-screen flex flex-col justify-between bg-white border-r-[1.5px] md:p-[1vw] xs:p-[2vw] border-gray-200">
        <div className="w-full">
          <UserAvator />
          <ConversationHistory />
          <NewConversationButton />
        </div>
        <div className="w-full md:pt-[0.4vw] xs:pt-[1vw] border-t border-gray-300">
          <SideBarButton
            icon={
              <VscTrash className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.8vw]" />
            }
            text={"Clear All Conversation"}
            function={deleteConversation}
          />
          <SideBarButton
            icon={
              <LuSunMedium className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.8vw]" />
            }
            text={"Toggle Dark Mode"}
          />
          <SideBarButton
            icon={
              <RiLogoutCircleLine className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.8vw]" />
            }
            text={"Log Out"}
          />
        </div>
      </div>
    </>
  );
};

export default ChatBotSideBar;
