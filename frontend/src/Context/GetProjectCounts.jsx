import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";

const GetProjectCounts = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [deletedProjects, setDeletedProjects] = useState(0);
  const [availableProjects, setAvailableProjects] = useState(0);

  const getProjectCounts = useQuery(
    "getProjectCounts",
    async () => {
      const response = await axios.get(
        "http://localhost:3000/admin/getProjectCounts",
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
      retryDelay: 1000,
      onSuccess: (data) => {
        setDeletedProjects(data.deletedProjects);
        setAvailableProjects(data.availableProjects);
      },
    }
  );

  return { deletedProjects, availableProjects };
};

export default GetProjectCounts;
