import { Router } from "express";
import setAboutData from "../../Controller/AdminControllers/addAbout.controller.js";
import updateAboutValues from "../../Controller/AdminControllers/updateAbout.controller.js";
import addEducation from "../../Controller/AdminControllers/addEducation.controller.js";
import secureAdminRoute from "../../middlewares/secureAdminRoute.js";
import addTestimonial from "../../Controller/AdminControllers/addTestimonial.controller.js";
import addProject from "../../Controller/AdminControllers/addProject.controller.js";
import updateEducation from "../../Controller/AdminControllers/editEducation.controller.js";
import editTestimonial from "../../Controller/AdminControllers/EditTestimonial.controller.js";
import updateProject from "../../Controller/AdminControllers/updateProject.controller.js";
let router = Router();

// About Data
router.post("/admin/add_about", secureAdminRoute, setAboutData);
router.put("/admin/update_about", secureAdminRoute, updateAboutValues);

// Education Data
router.post("/admin/add_education", secureAdminRoute, addEducation);
router.put("/admin/update_education", secureAdminRoute, updateEducation);

// Testimonial Data
router.post("/admin/add_testimonial", secureAdminRoute, addTestimonial);
router.put("/admin/edit_testimonial/:id", secureAdminRoute, editTestimonial);

// Project Data
router.post("/admin/add_project", secureAdminRoute, addProject);
router.put("/admin/update_project/:id", secureAdminRoute, updateProject);

export default router;
