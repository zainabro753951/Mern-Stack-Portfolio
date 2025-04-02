import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";

const GetAllUsers = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [users, setUsers] = useState([]);
  const getUsers = useQuery(
    "getUsers",
    async () => {
      const response = await axios.get("http://localhost:3000/admin/getUsers", {
        withCredentials: true,
      });
      return response.data;
    },
    {
      enabled: isAdminAuthenticated,
      retry: 3,
      retryDelay: 1000,
      staleTime: 7_200_000, // Data 2 hours tak stale nahi hoga
      cacheTime: 7_200_000, // Data 2 hours tak cache mein rahega
      refetchOnMount: false, // Component mount hone par dobara fetch nahi hoga
      refetchOnWindowFocus: false, // Window focus hone par dobara fetch nahi hoga
      onSuccess: (data) => {
        setUsers(data);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );
  return {
    users,
    setUsers,
    isLoading: getUsers.isLoading,
    error: getUsers.error,
  };
};

export default GetAllUsers;
