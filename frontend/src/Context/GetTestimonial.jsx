import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminAuth } from "./AdminAuthProvider";

export const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const queryClient = useQueryClient();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getTestimonial`, {
        withCredentials: true,
        timeout: 10000, // 10 second timeout
      });
      return response.data;
    } catch (error) {
      console.error("Testimonial fetch error:", error);
      throw new Error(
        error.response?.data?.message ||
          "Failed to fetch testimonials. Please try again later."
      );
    }
  };

  const {
    data: testimonialData = [],
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["testimonialData"],
    queryFn: fetchTestimonials,
    enabled: isAdminAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
    retry: 2, // Retry twice on failure
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (isAdminAuthenticated) {
      queryClient.invalidateQueries({ queryKey: ["testimonialData"] });
    }
  }, [isAdminAuthenticated, queryClient]);

  const contextValue = {
    testimonialData,
    isLoading: isLoading || isFetching,
    isError,
    error,
  };

  return (
    <TestimonialContext.Provider value={contextValue}>
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonial = () => {
  const context = useContext(TestimonialContext);
  if (!context) {
    throw new Error("useTestimonial must be used within a TestimonialProvider");
  }
  return context;
};
