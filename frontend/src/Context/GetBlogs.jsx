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
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const queryClient = useQueryClient();

  // Memoize the fetch function to prevent unnecessary re-renders
  const fetchBlogPosts = useMemo(
    () => async () => {
      try {
        const response = await axios.get(`${backendUrl}/admin/getBlogData`, {
          withCredentials: true,
          headers: {
            "Cache-Control": "max-age=7200",
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        throw new Error("Failed to fetch blog posts");
      }
    },
    []
  );

  // Prefetch data when possible
  useEffect(() => {
    if (isUserAuthenticated || isAdminAuthenticated) {
      console.log("Prefetching blog posts...");
      queryClient.prefetchQuery("blogPosts", fetchBlogPosts);
    }
  }, [isUserAuthenticated, isAdminAuthenticated, queryClient, fetchBlogPosts]);

  const { isLoading, isError, data } = useQuery("blogPosts", fetchBlogPosts, {
    retry: 2, // Reduce retry attempts
    staleTime: 7_200_000, // 2 hours
    cacheTime: 14_400_000, // Increase cache time to 4 hours
    refetchOnMount: false,
    onSuccess: (fetchedData) => {
      console.log("Blog posts fetched successfully:", fetchedData);
      setBlogPosts(fetchedData || []);
    },
    onError: (error) => {
      console.error("Error in useQuery:", error);
      // Use cached data if available on error
      const cachedData = queryClient.getQueryData("blogPosts");
      if (cachedData) {
        console.log("Using cached data:", cachedData);
        setBlogPosts(cachedData);
      }
    },
  });

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      blogPosts,
      setBlogPosts,
      isLoading,
      isError,
    }),
    [blogPosts, isLoading, isError]
  );

  return (
    <GetBlogContext.Provider value={contextValue}>
      {children}
    </GetBlogContext.Provider>
  );
};
