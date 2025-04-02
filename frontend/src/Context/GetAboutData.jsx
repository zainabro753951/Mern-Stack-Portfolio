import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

export const AboutDataContext = createContext();

export const GetAboutData = () => useContext(AboutDataContext);

export const GetAboutProvider = ({ children }) => {
  const [aboutData, setAboutData] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const getData = useQuery(
    "aboutData",
    async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/admin/getAbout`,
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
      retry: 3,
      staleTime: 7_200_000, // Data 2 hours tak stale nahi hoga
      cacheTime: 7_200_000, // Data 2 hours tak cache mein rahega
      refetchOnMount: false, // Component mount hone par dobara fetch nahi hoga
      refetchOnWindowFocus: false, // Window focus hone par dobara fetch nahi hoga
      onSuccess: (fetchedData) => {
        setAboutData(fetchedData ?? {});
      },
      onError: (error) => console.error("Error fetching about data:", error),
    }
  );

  return (
    <AboutDataContext.Provider
      value={{ aboutData, setAboutData, isLoading: getData.isLoading }}
    >
      {children}
    </AboutDataContext.Provider>
  );
};
