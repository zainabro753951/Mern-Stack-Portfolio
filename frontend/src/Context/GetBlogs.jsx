import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useQuery, useQueryClient } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";
import { useUserAuth } from "./UserAuthProvider";
import WelcomeLoader from "../components/WelcomeLoader";

export const GetBlogContext = createContext();

export const useBlogPosts = () => useContext(GetBlogContext);

export const GetBlogs = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const { isUserAuthenticated } = useUserAuth();
  const [blogPosts, setBlogPosts] = useState([]);
  const queryClient = useQueryClient();

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/admin/getBlogData",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      throw new Error("Failed to fetch blog posts");
    }
  };

  const { isLoading, isError, data } = useQuery("blogPosts", fetchBlogPosts, {
    enabled: isUserAuthenticated || isAdminAuthenticated,
    retry: 3,
    staleTime: 10000,
    onSuccess: (fetchedData) => {
      setBlogPosts(fetchedData || []);
    },
    onError: (error) => {
      console.error("Error in useQuery:", error);
    },
  });

  useEffect(() => {
    if (data) {
      queryClient.invalidateQueries("blogPosts");
    }
  }, [data, queryClient]);

  const contextValue = useMemo(
    () => ({ blogPosts, setBlogPosts }),
    [blogPosts]
  );

  return (
    <GetBlogContext.Provider value={contextValue}>
      {isLoading ? (
        <WelcomeLoader />
      ) : isError ? (
        <p>Error fetching blog posts</p>
      ) : (
        children
      )}
    </GetBlogContext.Provider>
  );
};
