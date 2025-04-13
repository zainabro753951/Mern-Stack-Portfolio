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

export const GetBlogContext = createContext();
export const useBlogPosts = () => useContext(GetBlogContext);

export const GetBlogsProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const queryClient = useQueryClient();
  const { isAdminAuthenticated } = useAdminAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getBlogData`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      // Return cached data if available
      const cachedData = queryClient.getQueryData(["blogPosts"]);
      if (cachedData) return cachedData;

      // Throw structured error
      throw {
        message:
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch blog posts",
        status: error.response?.status,
        isRetryable: error.code !== 401 && error.code !== 403,
      };
    }
  };

  const { isLoading, isError, error, isSuccess, data, isFetching, refetch } =
    useQuery({
      queryKey: ["blogPosts"],
      queryFn: fetchBlogPosts,
      enabled: isAdminAuthenticated,
    });

  // Storing DAta
  useEffect(() => {
    if (isSuccess) {
      if (data && data.length > 0) {
        setBlogPosts(data);
      }
    }
  }, [isSuccess]);

  // Memoize the context value
  const contextValue = useMemo(
    () => ({
      blogPosts,
      isLoading: isLoading || isFetching,
      isError,
      error,
      refetch,
    }),
    [blogPosts, isLoading, isFetching, isError, error, refetch]
  );

  return (
    <GetBlogContext.Provider value={contextValue}>
      {children}
    </GetBlogContext.Provider>
  );
};
