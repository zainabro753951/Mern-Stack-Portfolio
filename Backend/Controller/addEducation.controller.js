import educationModel from "../Models/education.model.js";

let addEducation = async (req, res) => {
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
  } = req.body;
  let education = await educationModel({
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
  let result = await education.save();
  console.log(result);
  res.json("Education successfully saved.");
};
export default addEducation;
