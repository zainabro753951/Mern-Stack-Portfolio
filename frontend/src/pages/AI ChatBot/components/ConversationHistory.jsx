import React from "react";
import { TbMessageCircle } from "react-icons/tb";
import { useChatBotConversation } from "../../../Context/GetChatBotConversation";

const ConversationHistory = () => {
  const { allConversations, setMessages, messages, setSessionId } =
    useChatBotConversation();

  if (!allConversations) return <div>No conversations found</div>;

  const handleSelectConversation = (data) => {
    setSessionId(data.sessionId);
    setMessages(data.messages);
  };

  console.log(messages);

  return (
    <div className="lg:mt-[1.5vw] max-h-[10vw] overflow-x-auto md:mt-[1vw] xs:mt-[2.5vw] flex flex-col">
      {allConversations.map((conversation, idx) => (
        <div
          key={idx}
          onClick={() =>
            handleSelectConversation({
              sessionId: conversation.sessionId,
              messages: conversation.messages,
            })
          }
          className="flex items-center gap-1 md:pl-[1.5vw] md:py-[0.4vw] xs:py-[1vw] xs:pl-[2.5vw]"
        >
          <TbMessageCircle className="lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.8vw]" />
          <p className="lg:text-[1.2vw] whitespace-nowrap xs:hidden lg:block overflow-hidden md:text-[2.2vw] xs:text-[3.4vw] text-gray-700">
            {conversation.messages[0]?.message || "No message found"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ConversationHistory;
