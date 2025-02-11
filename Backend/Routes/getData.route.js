import { Router } from "express";
import getAboutData from "../Controller/getAbout.controller.js";
import viewEducation from "../Controller/viewEducation.controller.js";
const router = Router();
// About
router.get("/admin/getAbout", getAboutData);
// Education
router.get("/admin/getEducation", viewEducation);
export default router;
