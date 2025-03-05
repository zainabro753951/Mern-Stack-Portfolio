import { Router } from "express";
import setAboutData from "../Controller/addAbout.controller.js";
import updateAboutValues from "../Controller/updateAbout.controller.js";
import addEducation from "../Controller/addEducation.controller.js";
import secureAdminRoute from "../middlewares/secureAdminRoute.js";
import addBlog from "../Controller/addBlog.controller.js";
import addTestimonial from "../Controller/addTestimonial.controller.js";
import addProject from "../Controller/addProject.controller.js";
import updateEducation from "../Controller/editEducation.controller.js";
import updateBlog from "../Controller/updateBlog.controller.js";
let router = Router();

// About Data
router.post("/admin/add_about", secureAdminRoute, setAboutData);
router.put("/admin/update_about", secureAdminRoute, updateAboutValues);

// Education Data
router.post("/admin/add_education", secureAdminRoute, addEducation);
router.put("/admin/update_education", secureAdminRoute, updateEducation);

// Blog Data
router.post("/admin/add_blog", secureAdminRoute, addBlog);
router.post("/admin/update_blog", secureAdminRoute, updateBlog);

// Testimonial Data
router.post("/admin/add_testimonial", secureAdminRoute, addTestimonial);

// Project Data
router.post("/admin/add_project", secureAdminRoute, addProject);

export default router;
