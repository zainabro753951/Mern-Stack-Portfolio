import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAdminAuth } from "./AdminAuthProvider";

const getBlogCounts = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [deletedBlogs, setDeletedBlogs] = useState(0);
  const [availableBlogs, setavailableBlogs] = useState(0);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { isSuccess, isError, data, error } = useQuery({
    queryKey: ["getBlogCounts"],
    queryFn: async () => {
      const response = await axios.get(`${backendUrl}/admin/getBlogCounts`, {
        withCredentials: true,
      });
      return response.data;
    },
    enabled: isAdminAuthenticated,
  });

  // Storing Data in useState
  useEffect(() => {
    if (isSuccess) {
      setDeletedBlogs(data.deletedBlogs);
      setavailableBlogs(data.availableBlogs);
    }
    if (isError) {
      console.log("Error during fetching blog counts" + error);
    }
  }, [isSuccess]);

  return { availableBlogs, deletedBlogs, isError };
};

export default getBlogCounts;
