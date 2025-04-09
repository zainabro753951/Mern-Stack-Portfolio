import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
  });

  return {
    educationData,
    isLoading: isLoading || isFetching, // Show loading during background updates
    isError,
    error,
  };
};

export default GetEducation;
