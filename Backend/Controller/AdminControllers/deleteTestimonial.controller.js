import testimonialModel from "../../Models/testimonial.model.js";

const deletTesimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await testimonialModel.findOneAndUpdate(id);
    testimonial.isDeleted = true;
    const result = await testimonial.save();

    res
      .status(200)
      .json({ message: "Successfully deleted testimonial", result });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default deletTesimonial;
