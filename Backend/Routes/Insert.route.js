import { Router } from "express";
import setAboutData from "../Controller/addAbout.controller.js";
import updateAboutValues from "../Controller/updateAbout.controller.js";
import addEducation from "../Controller/addEducation.controller.js";
let router = Router();

// About Data
router.post("/admin/add_about", setAboutData);
router.post("/admin/update_about", updateAboutValues);

// Education Data
router.post("/admin/add_education", addEducation);

export default router;
