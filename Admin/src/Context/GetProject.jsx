import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminAuth } from "./AdminAuthProvider";

export const GetProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [projects, setProjects] = useState([]); // Initialize as array
  const queryClient = useQueryClient();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getProjects`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw new Error(
        error.response?.data?.message ||
          "Failed to load projects. Please try again later."
      );
    }
  };

  const { isLoading, isError, error, isSuccess, data } = useQuery({
    queryKey: ["projectData"],
    queryFn: fetchProjects,
    enabled: isAdminAuthenticated,
  });

  // Handle Responses
  useEffect(() => {
    if (isSuccess) {
      console.log(data);

      setProjects(data || []); // Ensure array fallback
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching projects:", error);
    }
  }, [isError]);

  const contextValue = {
    projects,
    setProjects,
    isLoading,
    isError,
    error,
  };

  return (
    <GetProjectContext.Provider value={contextValue}>
      {children}
    </GetProjectContext.Provider>
  );
};

export default ProjectProvider;

export const useProjects = () => {
  const context = useContext(GetProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
