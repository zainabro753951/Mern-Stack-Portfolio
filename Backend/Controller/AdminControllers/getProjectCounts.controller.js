import projectModel from "../../Models/project.model.js";

const getProjectCounts = async (req, res) => {
  try {
    const [availableProjects, deletedProjects] = await Promise.all([
      projectModel.countDocuments({ isDeleted: false }),
      projectModel.countDocuments({ isDeleted: true }),
    ]);
    res.status(200).json({ availableProjects, deletedProjects });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default getProjectCounts;
