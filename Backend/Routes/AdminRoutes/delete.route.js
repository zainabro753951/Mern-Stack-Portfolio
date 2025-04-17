import { Router } from "express";
const router = Router();
import secureAdminRoute from "../../middlewares/secureAdminRoute.js";
import deleteEducation from "../../Controller/AdminControllers/deleteEducation.controller.js";
import deletTesimonial from "../../Controller/AdminControllers/deleteTestimonial.controller.js";

// Education Deleted
router.delete("/admin/delete_education/:id", secureAdminRoute, deleteEducation);

// testimonial Deleting
router.put("/admin/delete_testimonial/:id", secureAdminRoute, deletTesimonial);

export default router;
