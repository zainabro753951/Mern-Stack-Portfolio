import axios from "axios";
import { useQuery } from "react-query";

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
    staleTime: 7_200_000, // 2 hours
    cacheTime: 7_200_000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

export default useCheckUserAuth;
