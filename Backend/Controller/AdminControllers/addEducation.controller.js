import educationModel from "../../Models/education.model.js";

let addEducation = async (req, res) => {
  const { education } = req.body;

  const {
    degree,
    fieldOfStudy,
    instituteName,
    location,
    startDate,
    endDate,
    eduStatus,
    grade,
    certificate,
  } = education;

  const isEduExists = await educationModel.find({
    degree: degree,
  });
  if (isEduExists.length > 0) {
    return res.status(409).json({ message: "Education already exists" });
  }

  let data = await educationModel({
    degree,
    fieldOfStudy,
    instituteName,
    location,
    startDate,
    endDate,
    eduStatus,
    grade,
    certificate,
  });
  let result = await data.save();
  res.json("Education successfully saved.");
};
export default addEducation;
