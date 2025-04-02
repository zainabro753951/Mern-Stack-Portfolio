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
      staleTime: 7_200_000, // Data 2 hours tak stale nahi hoga
      cacheTime: 7_200_000, // Data 2 hours tak cache mein rahega
      refetchOnMount: false, // Component mount hone par dobara fetch nahi hoga
      refetchOnWindowFocus: false, // Window focus hone par dobara fetch nahi hoga
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
