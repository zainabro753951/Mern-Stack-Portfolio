import { Router } from "express";
import getAboutData from "../../Controller/AdminControllers/getAbout.controller.js";
import viewEducation from "../../Controller/AdminControllers/viewEducation.controller.js";
import GetBlogData from "../../Controller/AdminControllers/getBlogPosts.controller.js";
import getTestimonial from "../../Controller/AdminControllers/GetTestimonial.controller.js";
import ViewProject from "../../Controller/AdminControllers/ViewProject.controller.js";
import getAllBlogComment from "../../Controller/AdminControllers/getAllBlogCommentNotif.controller.js";
import secureUserRoute from "../../middlewares/secureUserRoute.js";
import secureAdminRoute from "../../middlewares/secureAdminRoute.js";
import getAdminId from "../../Controller/AdminControllers/getAdminId.controller.js";
const router = Router();
// About
router.get("/admin/getAbout", getAboutData);
// Education
router.get("/admin/getEducation", viewEducation);

// Blog Data
router.get("/admin/getBlogData", GetBlogData);
// Blog Pending Comment Fetching
router.get(
  "/admin/get_blog_comments_notification",
  secureAdminRoute,
  getAllBlogComment
);

// Testimonila Data
router.get("/admin/getTestimonial", getTestimonial);

// Project Data
router.get("/admin/getProjects/", ViewProject);

// getAdmin Id
router.get("/admin/get_admin", getAdminId);
export default router;
