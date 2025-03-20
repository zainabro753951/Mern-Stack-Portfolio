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
import getUsers from "../../Controller/AdminControllers/getAllUser.controller.js";
import getProjectCounts from "../../Controller/AdminControllers/getProjectCounts.controller.js";
import getBlogCounts from "../../Controller/AdminControllers/getBlogCount.controller.js";
import getAllBlogCommentData from "../../Controller/AdminControllers/getAllBlogCommentData.controller.js";
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
router.get(
  "/admin/get_all_blog_comment_data",
  secureAdminRoute,
  getAllBlogCommentData
);
router.get("/admin/getBlogCounts", secureAdminRoute, getBlogCounts);

// Testimonila Data
router.get("/admin/getTestimonial", getTestimonial);

// Project Data
router.get("/admin/getProjects/", ViewProject);
router.get("/admin/getProjectCounts", secureAdminRoute, getProjectCounts);

// getAdmin Id
router.get("/admin/get_admin", getAdminId);

// Get User data
router.get("/admin/getUsers", secureAdminRoute, getUsers);
export default router;
