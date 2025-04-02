import testimonialModel from "../../Models/testimonial.model.js";

const getTestimonial = async (req, res) => {
  try {
    const testimonial = await testimonialModel
      .find()
      .lean() // Convert to plain JS object for faster serialization
      .catch(300); // Cache results for 5 minutes;

    console.log(testimonial);

    res.status(200).json(testimonial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getTestimonial;
