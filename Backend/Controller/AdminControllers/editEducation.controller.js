import educationModel from "../../Models/education.model.js";

let updateEducation = async (req, res) => {
  try {
    const {
      eduId,
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
    const eduNotFound = await educationModel.findById({ _id: eduId });
    if (eduNotFound.length <= 0) {
      return res.status(404).json({ message: "Education not found" });
    }

    eduNotFound.degree = degree;
    eduNotFound.fieldOfStudy = fieldOfStudy;
    eduNotFound.instituteName = instituteName;
    eduNotFound.location = location;
    eduNotFound.startDate = startDate;
    eduNotFound.endDate = endDate;
    eduNotFound.eduStatus = eduStatus;
    eduNotFound.grade = grade;
    eduNotFound.certificate = certificate;

    const result = await eduNotFound.save();
    console.log(result);

    res.json({ message: "Education successfully updated.", result });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};
export default updateEducation;
