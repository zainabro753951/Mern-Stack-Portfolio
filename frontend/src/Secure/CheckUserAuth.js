import axios from "axios";

const CheckUserAuth = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/user/verify-user-auth",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default CheckUserAuth;
