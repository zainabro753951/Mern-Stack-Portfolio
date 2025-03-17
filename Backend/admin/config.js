import axios from "axios";

export let admin = null;
export const getAdminId = async () => {
  try {
    const response = await axios.get("http://localhost:3000/admin/get_admin");
    let { _id: id } = response.data[0];
    admin = id;
    console.log(`Admin ID fetched: ${admin}`);
  } catch (error) {
    console.error("Error fetching admin ID:", error);
  }
};
