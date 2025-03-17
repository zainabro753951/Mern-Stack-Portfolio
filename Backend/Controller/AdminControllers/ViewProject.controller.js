import projectModel from "../../Models/project.model.js";

const ViewProject = async (req, res) => {
  try {
    const project = await projectModel.find();
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default ViewProject;
