import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";

export const TestimonialContext = createContext();

export const GetTestimonial = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [testimonialData, setTestimonialData] = useState([]);
  const queryClient = useQueryClient();
const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Getting Testimonial Data with useQuery Hook
  const getData = useQuery(
    "testimonialData",
    async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/admin/getTestimonial`,
          {
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch testimonial data");
      }
    },
    {
      retry: 3,
      retryDelay: 1000,
      staleTime: 0, // Always consider data stale
      cacheTime: 7_200_000,
      refetchOnMount: true, // Always refetch when component mounts
      refetchOnWindowFocus: false, // Disable refetch on window focus
      initialData: [], // Provide initial empty array
      onSuccess: (data) => {
        setTestimonialData(data);
      },
      onError: (error) => {
        console.error("Error fetching testimonial data:", error);
      },
    }
  );

  useEffect(() => {
    if (isAdminAuthenticated) {
      queryClient.invalidateQueries("testimonialData");
    }
  }, [isAdminAuthenticated, queryClient]);
  console.log(testimonialData);

  return (
    <TestimonialContext.Provider
      value={{
        testimonialData,
        setTestimonialData,
        isLoading: getData.isFetching || getData.isLoading,
      }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonial = () => useContext(TestimonialContext);
