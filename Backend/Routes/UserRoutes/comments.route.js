import { Router } from "express";
import { BlogComment } from "../../Controller/UserControllers/SendComment.controller.js";
import secureUserRoute from "../../middlewares/secureUserRoute.js";
import getAllBlogComments from "../../Controller/UserControllers/getBlogComments.controller.js";

const router = Router();

router.post("/user/blog/comment", secureUserRoute, BlogComment);
router.get("/user/blog/all_comments", secureUserRoute, getAllBlogComments);

export default router;
