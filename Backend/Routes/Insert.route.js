import { Router } from "express";
import setAboutData from "../Controller/addAbout.controller.js";
import updateAboutValues from "../Controller/updateAbout.controller.js";
import addEducation from "../Controller/addEducation.controller.js";
import secureAdminRoute from "../middlewares/secureAdminRoute.js";
let router = Router();

// About Data
router.post("/admin/add_about", secureAdminRoute, setAboutData);
router.post("/admin/update_about", secureAdminRoute, updateAboutValues);

// Education Data
router.post("/admin/add_education", secureAdminRoute, addEducation);

export default router;
