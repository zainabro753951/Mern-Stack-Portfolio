import educationModel from "../../Models/education.model.js";

const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;

    // Step 1: Delete the document by ID
    const deletedEducation = await educationModel.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedEducation) {
      return res.status(404).json({ message: "Education record not found" });
    }

    // Step 2: Fetch all remaining documents after deletion
    const remainingEducations = await educationModel.find({});

    // Step 3: Send the response with the deleted document and remaining documents
    res.status(200).json({
      message: "Education record deleted successfully",
      deletedEducation,
      remainingEducations,
    });
  } catch (error) {
    console.error("Error deleting education record:", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default deleteEducation;
