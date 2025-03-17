import aboutModel from "../../Models/about.model.js";

let getAboutData = async (req, res) => {
  let aboutData = await aboutModel.find();
  let [data] = aboutData;
  res.status(200).json(data);
};
export default getAboutData;
