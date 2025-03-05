import { Router } from "express";
import getAboutData from "../Controller/getAbout.controller.js";
import viewEducation from "../Controller/viewEducation.controller.js";
import secureAdminRoute from "../middlewares/secureAdminRoute.js";
import GetBlogData from "../Controller/getBlogPosts.controller.js";
const router = Router();
// About
router.get("/admin/getAbout", secureAdminRoute, getAboutData);
// Education
router.get("/admin/getEducation", secureAdminRoute, viewEducation);

// Blog Data
router.get("/admin/getBlogData", secureAdminRoute, GetBlogData);
export default router;
