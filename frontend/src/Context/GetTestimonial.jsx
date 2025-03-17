import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";

export const TestimonialContext = createContext();

export const GetTestimonial = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [testimonialData, setTestimonialData] = useState([]);
  const queryClient = useQueryClient();
  // Getting Testimonial Data with useQuery Hook
  const getData = useQuery(
    "testimonialData",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/getTestimonial",
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
      enabled: isAdminAuthenticated,
      retry: 3,
      staleTime: 10000,
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
  return (
    <TestimonialContext.Provider
      value={{ testimonialData, setTestimonialData }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonial = () => useContext(TestimonialContext);
