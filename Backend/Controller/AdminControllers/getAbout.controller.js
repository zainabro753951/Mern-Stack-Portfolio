import aboutModel from "../../Models/about.model.js";

let getAboutData = async (req, res) => {
  let aboutData = await aboutModel
    .find()
    .lean() // Convert to plain JS object for faster serialization
    .catch(300); // Cache results for 5 minutes
  let [data] = aboutData;
  res.status(200).json(data);
};
export default getAboutData;
