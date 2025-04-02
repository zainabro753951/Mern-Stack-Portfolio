import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";

const getBlogCounts = () => {
  const { isAdminAuthenticated } = useAdminAuth();
  const [deletedBlogs, setDeletedBlogs] = useState(0);
  const [availableBlogs, setavailableBlogs] = useState(0);

  const getBlogCounts = useQuery(
    "getBlogCounts",
    async () => {
      const response = await axios.get(
        "http://localhost:3000/admin/getBlogCounts",
        {
          withCredentials: true,
        }
      );
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
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        setDeletedBlogs(data.deletedBlogs);
        setavailableBlogs(data.availableBlogs);
      },
    }
  );

  return { availableBlogs, deletedBlogs };
};

export default getBlogCounts;
