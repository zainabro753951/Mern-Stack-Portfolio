import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";

export const GetProjectContext = createContext();

const GetProject = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [projects, setProjects] = useState("");
  const queryClient = useQueryClient();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getProjectsData = useQuery(
    "projectData",
    async () => {
      const response = await axios.get(
        `${backendUrl}/admin/getProjects`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    {
      enabled: isAdminAuthenticated,
      retry: 3,
      staleTime: 7_200_000, // Data 2 hours tak stale nahi hoga
      cacheTime: 7_200_000, // Data 2 hours tak cache mein rahega
      refetchOnMount: false, // Component mount hone par dobara fetch nahi hoga
      refetchOnWindowFocus: false, // Window focus hone par dobara fetch nahi hoga
      onSuccess: (data) => {
        setProjects(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  useEffect(() => {
    if (isAdminAuthenticated) {
      queryClient.invalidateQueries("projectData");
    }
  }, [isAdminAuthenticated, queryClient]);
  return (
    <GetProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </GetProjectContext.Provider>
  );
};

export default GetProject;

export const useProjects = () => useContext(GetProjectContext);
