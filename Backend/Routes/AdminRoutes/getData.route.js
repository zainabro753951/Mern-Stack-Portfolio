import { Router } from "express";
import getAboutData from "../../Controller/AdminControllers/getAbout.controller.js";
import viewEducation from "../../Controller/AdminControllers/viewEducation.controller.js";
import getTestimonial from "../../Controller/AdminControllers/GetTestimonial.controller.js";
import ViewProject from "../../Controller/AdminControllers/ViewProject.controller.js";
import secureAdminRoute from "../../middlewares/secureAdminRoute.js";
import getAdminId from "../../Controller/AdminControllers/getAdminId.controller.js";
import getProjectCounts from "../../Controller/AdminControllers/getProjectCounts.controller.js";
const router = Router();
// About
router.get("/admin/getAbout", getAboutData);
// Education
router.get("/admin/getEducation", viewEducation);
// Testimonila Data
router.get("/admin/getTestimonial", getTestimonial);

// Project Data
router.get("/admin/getProjects/", ViewProject);
router.get("/admin/getProjectCounts", secureAdminRoute, getProjectCounts);

// getAdmin Id
router.get("/admin/get_admin", getAdminId);

export default router;
