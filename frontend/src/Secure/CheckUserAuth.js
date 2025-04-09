import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUserAuth = async () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  try {
    const response = await axios.get(`${backendUrl}/user/verify-user-auth`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const useCheckUserAuth = () => {
  return useQuery({
    queryKey: ["userAuth"],
    queryFn: fetchUserAuth,
  });
};

export default useCheckUserAuth;
