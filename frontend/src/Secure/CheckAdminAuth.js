import axios from "axios";

const CheckAdminAuth = async () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  try {
    const response = await axios.get(`${backendUrl}/admin/check-admin-auth`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default CheckAdminAuth;
