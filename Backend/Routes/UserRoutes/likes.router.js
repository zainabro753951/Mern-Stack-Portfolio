import { Router } from "express";
import secureUserRoute from "../../middlewares/secureUserRoute.js";
import blogLikesStored from "../../Controller/UserControllers/StoreBlogLikes.controller.js";
import getBlogLikes from "../../Controller/UserControllers/GetBlogLikes.controller.js";
const router = Router();

// Blog Likes
router.post("/user/like/blogLikes", secureUserRoute, blogLikesStored);
router.get("/user/like/getBlogLikes/:blogId", secureUserRoute, getBlogLikes);
export default router;
