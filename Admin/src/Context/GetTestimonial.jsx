import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminAuth } from "./AdminAuthProvider";

export const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
  const [testimonialData, setTestimonialData] = useState([]);
  const { isAdminAuthenticated } = useAdminAuth();
  const queryClient = useQueryClient();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getTestimonial`, {
        withCredentials: true,
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

  const { data, isLoading, isError, isSuccess, error, isFetching } = useQuery({
    queryKey: ["testimonialData"],
    queryFn: fetchTestimonials,
    enabled: isAdminAuthenticated,
    refetchOnWindowFocus: true,
  });

  // Handle Response
  useEffect(() => {
    if (isSuccess) {
      setTestimonialData(data);
    }
  }, [isSuccess]);

  const contextValue = {
    testimonialData,
    setTestimonialData,
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
