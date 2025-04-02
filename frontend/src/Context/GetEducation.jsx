import axios from "axios";
import { useQuery } from "react-query";

const GetEducation = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const fetchEducation = async () => {
    const response = await axios.get(`${backendUrl}/admin/getEducation`, {
      withCredentials: true,
    });
    return response.data;
  };

  const {
    data: educationData = [], // Default empty array
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["educationData"], // Using object syntax for better TypeScript support
    queryFn: fetchEducation,
    retry: 3,
    retryDelay: 1000,
    staleTime: 0, // Always consider data stale
    cacheTime: 7_200_000,
    refetchOnMount: true, // Always refetch when component mounts
    refetchOnWindowFocus: false, // Disable refetch on window focus
    initialData: [], // Provide initial empty array
  });

  return {
    educationData,
    isLoading: isLoading || isFetching, // Show loading during background updates
    isError,
    error,
  };
};

export default GetEducation;
