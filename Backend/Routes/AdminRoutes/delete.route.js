import { Router } from "express";
const router = Router();
import secureAdminRoute from "../../middlewares/secureAdminRoute.js";
import deleteEducation from "../../Controller/AdminControllers/deleteEducation.controller.js";
import { deleteBlog } from "../../Controller/AdminControllers/deleteBlog.controller.js";
import deletTesimonial from "../../Controller/AdminControllers/deleteTestimonial.controller.js";

// Education Deleted
router.delete("/admin/delete_education/:id", secureAdminRoute, deleteEducation);

// Blog Deleting
router.put("/admin/delete_blog/:blogId", secureAdminRoute, deleteBlog);

// testimonial Deleting
router.put("/admin/delete_testimonial/:id", secureAdminRoute, deletTesimonial);

export default router;
