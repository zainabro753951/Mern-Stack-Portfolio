import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";

export const GetProjectContext = createContext();

const GetProject = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [projects, setProjects] = useState("");
  const queryClient = useQueryClient();

  const getProjectsData = useQuery(
    "projectData",
    async () => {
      const response = await axios.get(
        "http://localhost:3000/admin/getProjects",
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    {
      enabled: isAdminAuthenticated,
      retry: 3,
      staleTime: 10000,
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
