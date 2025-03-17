import testimonialModel from "../../Models/testimonial.model.js";

const getTestimonial = async (req, res) => {
  try {
    const testimonial = await testimonialModel.find();
    res.status(200).json(testimonial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getTestimonial;
