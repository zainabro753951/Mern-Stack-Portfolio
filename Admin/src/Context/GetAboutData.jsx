import React, { createContext, useContext, useMemo } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const AboutDataContext = createContext();

export const useAboutData = () => {
  const context = useContext(AboutDataContext);
  if (!context) {
    throw new Error("useAboutData must be used within an AboutDataProvider");
  }
  return context;
};

export const AboutDataProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const queryClient = useQueryClient();

  const fetchAboutData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getAbout`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // 10 second timeout
      });
      return response.data ?? {};
    } catch (error) {
      console.error("Error fetching about data:", error);
      throw new Error(
        error.response?.data?.message || "Failed to fetch about data"
      );
    }
  };

  const {
    data: aboutData = {},
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["aboutData"], // Query keys must be arrays in v5
    queryFn: fetchAboutData,
  });

  // Memoize the context value
  const contextValue = useMemo(
    () => ({
      aboutData,
      isLoading: isLoading || isFetching,
      isError,
      error,
      refetch: () => queryClient.invalidateQueries({ queryKey: ["aboutData"] }),
    }),
    [aboutData, isLoading, isFetching, isError, error, queryClient]
  );

  return (
    <AboutDataContext.Provider value={contextValue}>
      {children}
    </AboutDataContext.Provider>
  );
};
