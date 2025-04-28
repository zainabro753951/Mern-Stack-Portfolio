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
      onSuccess: (data) => {
        console.log(data);
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
