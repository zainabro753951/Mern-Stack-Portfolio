import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const GetProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]); // Initialize as array
  const queryClient = useQueryClient();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getProjects`, {
        withCredentials: true,
        timeout: 10000, // 10 second timeout
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
  });

  // Handle Response
  useEffect(() => {
    if (isSuccess) {
      setProjects(data || []); // Ensure array fallback
    }
  }, [isSuccess]);

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
