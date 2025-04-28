import userModel from "../../Models/user.model.js";

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default getUsers;
