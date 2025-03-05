import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";

export const GetBlogContext = createContext();

export const useBlogPosts = () => useContext(GetBlogContext);

export const GetBlogs = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [blogPosts, setBlogPosts] = useState([]);

  const getData = useQuery(
    "blogPosts",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/getBlogData",
          {
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    {
      enabled: isAdminAuthenticated,
      retry: 3,
      staleTime: 10000,
      onSuccess: (fetchedData) => {
        setBlogPosts(fetchedData || []); // Ensure default value
      },
      onError: (error) => console.log(error),
    }
  );

  return (
    <GetBlogContext.Provider value={{ blogPosts, setBlogPosts }}>
      {children}
    </GetBlogContext.Provider>
  );
};
