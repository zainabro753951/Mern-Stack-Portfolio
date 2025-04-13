import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CheckAdminAuth = async () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return useQuery({
    queryKey: ["AdminAuth"],
    queryFn: async () => {
      const response = await axios.get(`${backendUrl}/admin/check-admin-auth`, {
        withCredentials: true,
      });
      return response.data;
    },
  });
};

export default CheckAdminAuth;
