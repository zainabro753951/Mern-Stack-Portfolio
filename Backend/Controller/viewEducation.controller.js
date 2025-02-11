import educationModel from "../Models/education.model.js";
const viewEducation = async (req, res) => {
  let educationData = await educationModel.find();

  res.status(200).json(educationData);
};

export default viewEducation;
