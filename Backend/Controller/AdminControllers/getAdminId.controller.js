import adminModel from "../../Models/admin.model.js";

const getAdminId = async (req, res) => {
  try {
    const adminId = await adminModel
      .find()
      .select("_id")
      .lean() // Convert to plain JS object for faster serialization
      .catch(300); // Cache results for 5 minutes;
    return res.status(200).json(adminId);
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

export default getAdminId;
