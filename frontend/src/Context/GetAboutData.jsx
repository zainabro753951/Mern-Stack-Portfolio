import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAdminAuth } from "./AdminAuthProvider";
import { useQuery, useQueryClient } from "react-query";

export const AboutDataContext = createContext();

export const GetAboutData = () => useContext(AboutDataContext);

export const GetAboutProvider = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [aboutData, setAboutData] = useState("");
  const queryClient = useQueryClient();

  const getData = useQuery(
    "aboutData",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/getAbout",
          {
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        throw error;
      }
    },
    {
      enabled: isAdminAuthenticated,
      retry: 3,
      staleTime: 10000,
      onSuccess: (fetchedData) => {
        setAboutData(fetchedData || {}); // Ensure default value
      },
      onError: (error) => console.log(error),
    }
  );

  useEffect(() => {
    if (isAdminAuthenticated) {
      queryClient.invalidateQueries("aboutData");
    }
  }, [isAdminAuthenticated, queryClient]);

  return (
    <AboutDataContext.Provider value={{ aboutData, setAboutData }}>
      {children}
    </AboutDataContext.Provider>
  );
};
