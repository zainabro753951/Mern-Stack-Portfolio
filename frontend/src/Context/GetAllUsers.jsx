import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAdminAuth } from "./AdminAuthProvider";

const GetAllUsers = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [users, setUsers] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { isSuccess, data, isError, isLoading, error } = useQuery({
    queryKey: ["getUsers"],
    queryFn: async () => {
      const response = await axios.get(`${backendUrl}/admin/getUsers`, {
        withCredentials: true,
      });
      return response.data;
    },

    enabled: isAdminAuthenticated,
    onSuccess: (data) => {},
    onError: (error) => {
      console.error(error);
    },
  });

  // Storing data in useState
  useEffect(() => {
    if (isSuccess) {
      setUsers(data);
    }
    if (isError) {
      console.error(`Error during fetching users ${error}`);
    }
  }, [isSuccess, isError]);
  return {
    users,
    setUsers,
    isLoading,
    error,
  };
};

export default GetAllUsers;
