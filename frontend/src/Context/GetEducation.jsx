import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const GetEducation = () => {
  const [educationData, setEducationData] = useState([]);

  const fetchEducation = async () => {
    const response = await axios.get(
      "http://localhost:3000/admin/getEducation",
      {
        withCredentials: true,
      }
    );
    return response.data;
  };

  const { isLoading, isError, error } = useQuery(
    "educationData",
    fetchEducation,
    {
      retry: 3,
      retryDelay: 10000,
      onSuccess: (data) => {
        setEducationData(data);
      },
      onError: (error) => {
        console.error("Error fetching education data:", error);
      },
    }
  );

  return { educationData, setEducationData, isLoading, isError, error };
};

export default GetEducation;
