import React, { createContext, useState, useEffect, useContext } from "react";
import { useUserAuth } from "./UserAuthProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const CommentsContext = createContext();

export const useComments = () => useContext(CommentsContext);

export const GetAllBlogComments = ({ children }) => {
  const { isUserAuthenticated } = useUserAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const queryClient = useQueryClient();

  const { error, isError, isLoading, isSuccess, data, refetch } = useQuery({
    queryKey: ["allBlogComments"],
    queryFn: async () => {
      const response = await axios.get(`${backendUrl}/user/blog/all_comments`, {
        withCredentials: true,
      });
      return response.data;
    },
    enabled: isUserAuthenticated,
    refetchOnWindowFocus: true,
  });

  return (
    <CommentsContext.Provider
      value={{ allBlogComments: data || [], queryClient }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
