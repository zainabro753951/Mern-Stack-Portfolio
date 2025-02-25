import { Router } from "express";
import getAboutData from "../Controller/getAbout.controller.js";
import viewEducation from "../Controller/viewEducation.controller.js";
import secureAdminRoute from "../middlewares/secureAdminRoute.js";
const router = Router();
// About
router.get("/admin/getAbout", secureAdminRoute, getAboutData);
// Education
router.get("/admin/getEducation", secureAdminRoute, viewEducation);
export default router;
