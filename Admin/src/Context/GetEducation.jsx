import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const GetEducation = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [educationData, setEducationData] = useState([]);
  const fetchEducation = async () => {
    const response = await axios.get(`${backendUrl}/admin/getEducation`, {
      withCredentials: true,
    });
    return response.data;
  };

  const {
    data, // Default empty array
    isLoading,
    isError,
    error,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: ["educationData"], // Using object syntax for better TypeScript support
    queryFn: fetchEducation,
    placeholderData: keepPreviousData,
  });

  // storing data
  useEffect(() => {
    if (isSuccess) {
      setEducationData(data || []);
    }
  }, [isSuccess]);

  return {
    educationData,
    setEducationData,
    isLoading: isLoading || isFetching, // Show loading during background updates
    isError,
    error,
  };
};

export default GetEducation;
