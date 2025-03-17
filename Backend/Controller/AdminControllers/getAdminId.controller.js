import adminModel from "../../Models/admin.model.js";

const getAdminId = async (req, res) => {
  try {
    const adminId = await adminModel.find().select("_id");
    return res.status(200).json(adminId);
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

export default getAdminId;
