import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminAuth } from "./AdminAuthProvider";
import { useUserAuth } from "./UserAuthProvider";
import WelcomeLoader from "../components/WelcomeLoader";

export const GetBlogContext = createContext();

export const useBlogPosts = () => useContext(GetBlogContext);

// Configure axios instance with interceptors
const apiClient = axios.create({
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout
});

// Add retry mechanism for 429 errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    if (error.response?.status === 429 && !config._retry) {
      config._retry = true;
      const delay = Math.pow(2, config._retryCount || 1) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
      return apiClient(config);
    }

    return Promise.reject(error);
  }
);

export const GetBlogs = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const { isUserAuthenticated } = useUserAuth();
  const [blogPosts, setBlogPosts] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const queryClient = useQueryClient();

  const fetchBlogPosts = useMemo(
    () => async () => {
      try {
        const response = await apiClient.get(`${backendUrl}/admin/getBlogData`);
        return response.data;
      } catch (error) {
        console.error("Error fetching blog posts:", error);

        // Provide fallback data structure
        if (error.response?.status === 429) {
          throw new Error("Too many requests. Please try again later.");
        }
        throw new Error(
          error.response?.data?.message ||
            "Failed to fetch blog posts. Please check your connection."
        );
      }
    },
    [backendUrl]
  );

  // Prefetch data when authentication status changes
  useEffect(() => {
    if (isUserAuthenticated || isAdminAuthenticated) {
      queryClient.prefetchQuery({
        queryKey: ["blogPosts"],
        queryFn: fetchBlogPosts,
      });
    }
  }, [isUserAuthenticated, isAdminAuthenticated, queryClient, fetchBlogPosts]);

  const { isLoading, isError, error, isSuccess, data } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    enabled: isUserAuthenticated || isAdminAuthenticated,
    onError: (error) => {
      console.error("Error in useQuery:", error);
      const cachedData = queryClient.getQueryData(["blogPosts"]);
      if (cachedData) {
        setBlogPosts(cachedData);
      }
    },
  });

  // Storing Data
  useEffect(() => {
    if (isSuccess) {
      setBlogPosts(data || []);
    }
  }, [isSuccess]);

  // Memoize the context value
  const contextValue = useMemo(
    () => ({
      blogPosts,
      setBlogPosts,
      isLoading,
      isError,
      error,
    }),
    [blogPosts, isLoading, isError, error]
  );

  return (
    <GetBlogContext.Provider value={contextValue}>
      {children}
    </GetBlogContext.Provider>
  );
};
