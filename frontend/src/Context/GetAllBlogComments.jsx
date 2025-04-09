import React, { createContext, useState, useEffect, useContext } from "react";
import { useSocketContext } from "./SocketIO.jsx";
import { useUserAuth } from "./UserAuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const CommentsContext = createContext();

export const useComments = () => useContext(CommentsContext);

export const GetAllBlogComments = ({ children }) => {
  const [allBlogComments, setAllBlogComments] = useState([]);
  const { socket } = useSocketContext();
  const { isUserAuthenticated } = useUserAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { error, isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: ["allBlogComments"],
    queryFn: async () => {
      const response = await axios.get(`${backendUrl}/user/blog/all_comments`, {
        withCredentials: true,
      });
      return response.data;
    },
    enabled: isUserAuthenticated,
  });

  useEffect(() => {
    if (isSuccess) {
      setAllBlogComments(data || []);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (socket) {
      const handleNewComment = () => {
        refetch();
      };
      socket.on("newComment", handleNewComment);

      return () => socket.off("newComment", handleNewComment);
    }
  }, [socket, refetch]);

  return (
    <CommentsContext.Provider value={{ allBlogComments, setAllBlogComments }}>
      {children}
    </CommentsContext.Provider>
  );
};
