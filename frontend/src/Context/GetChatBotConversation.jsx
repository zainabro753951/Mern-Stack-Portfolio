import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useUserAuth } from "./UserAuthProvider";
import { useSocketContext } from "./SocketIO";

export const ChatBotConversationContext = createContext();

export const useChatBotConversation = () =>
  useContext(ChatBotConversationContext);

export const GetChatBotConversation = ({ children }) => {
  const { socket } = useSocketContext();
  const { isUserAuthenticated } = useUserAuth();
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [allConversations, setAllConversations] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchDefaultConversation = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/user/deepseek/default_conversation`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching default conversation:", error);
      throw error;
    }
  };

  const getDefaultConversation = useQuery({
    queryKey: ["getDefaultSessionId"],
    queryFn: fetchDefaultConversation,
    enabled: isUserAuthenticated,
    onSuccess: (data) => {
      setSessionId(data.sessionId);
    },
    onError: (error) => {
      console.error("Error fetching default conversation:", error);
    },
  });

  const fetchConversation = async (sessionId) => {
    if (!sessionId) return;
    try {
      const response = await axios.get(
        `${backendUrl}/user/deepseek/conversation_history`,
        { params: { sessionId }, withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching conversation data:", error);
      throw error;
    }
  };

  const getConversation = useQuery({
    queryKey: ["getConversation", sessionId],
    queryFn: () => fetchConversation(sessionId),
    enabled: !!sessionId, // Changed from !sessionId to !!sessionId (likely what you intended)
    retry: 3,
    staleTime: 10000,
    onSuccess: (data) => {
      setAllConversations((prev) => [...(prev || []), data ? data[0] : []]);
      setMessages(data?.[0].messages || null);
    },
    onError: (error) => {
      console.error("Error fetching conversation data:", error);
    },
  });

  useEffect(() => {
    if (sessionId) {
      socket.emit("join-room", sessionId);
      return () => {
        socket.emit("leave-room", sessionId);
      };
    }
  }, [sessionId, socket]);

  const fetchAllConversations = async () => {
    const response = await axios.get(
      `${backendUrl}/user/deepseek/all_conversations`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  };

  const { data: allConversationsData, refetch: refetchAllConversations } =
    useQuery({
      queryKey: ["getAllConversation"],
      queryFn: fetchAllConversations,
      enabled: isUserAuthenticated,
      retry: 3,
      staleTime: 10000,
      onSuccess: (data) => {
        setAllConversations(data);
      },
      onError: (error) => {
        console.error("Error fetching all conversations:", error);
      },
    });

  useEffect(() => {
    if (isUserAuthenticated) {
      refetchAllConversations();
    }
  }, [messages, isUserAuthenticated, refetchAllConversations]);

  return (
    <ChatBotConversationContext.Provider
      value={{
        messages,
        setMessages,
        sessionId,
        setSessionId,
        allConversations,
        setAllConversations,
      }}
    >
      {children}
    </ChatBotConversationContext.Provider>
  );
};
