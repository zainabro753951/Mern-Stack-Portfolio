import React, { createContext, useState, useEffect, useContext } from "react";
import { useSocketContext } from "./SocketIO.jsx";
import { useUserAuth } from "./UserAuthProvider";
import { useQuery } from "react-query";
import axios from "axios";

export const CommentsContext = createContext();

export const useComments = () => useContext(CommentsContext);

export const GetAllBlogComments = ({ children }) => {
  const [allBlogComments, setAllBlogComments] = useState([]);
  const { socket } = useSocketContext();
  const { isUserAuthenticated } = useUserAuth();

  const getAllBlogComments = useQuery(
    "allBlogComments",
    async () => {
      const response = await axios.get(
        "http://localhost:3000/user/blog/all_comments",
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    {
      enabled: isUserAuthenticated,
      retry: 3,
      staleTime: 10000,
      onSuccess: (data) => {
        setAllBlogComments(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return (
    <CommentsContext.Provider value={{ allBlogComments, setAllBlogComments }}>
      {children}
    </CommentsContext.Provider>
  );
};
