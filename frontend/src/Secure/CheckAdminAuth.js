import axios from "axios";

const CheckAdminAuth = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/admin/check-admin-auth",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default CheckAdminAuth;
