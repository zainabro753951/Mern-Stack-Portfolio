import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useAdminAuth } from "./AdminAuthProvider";

const useProjectCounts = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchProjectCounts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin/getProjectCounts`, {
        withCredentials: true,
        timeout: 10000, // 10 second timeout
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching project counts:", error);
      throw new Error(
        error.response?.data?.message ||
          "Failed to fetch project counts. Please try again later."
      );
    }
  };

  const { data: counts = { deletedProjects: 0, availableProjects: 0 } } =
    useQuery({
      queryKey: ["projectCounts"],
      queryFn: fetchProjectCounts,
      enabled: isAdminAuthenticated,
      placeholderData: keepPreviousData,
      select: (data) => ({
        deletedProjects: data?.deletedProjects || 0,
        availableProjects: data?.availableProjects || 0,
      }),
    });

  return {
    deletedProjects: counts.deletedProjects,
    availableProjects: counts.availableProjects,
  };
};

export default useProjectCounts;
