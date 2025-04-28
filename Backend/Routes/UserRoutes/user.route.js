import { Router } from "express";
import userSignup from "../../Controller/UserControllers/signup.controller.js";
import verify_email from "../../Controller/UserControllers/verifyEmail.controller.js";
import secureUserRoute from "../../middlewares/secureUserRoute.js";
import verifyUserAuth from "../../Controller/UserControllers/VerifyUserAuth.controller.js";
import userLogin from "../../Controller/UserControllers/Login.controller.js";
const router = Router();

router.post("/user/signup", userSignup);
router.post("/user/verify-email/:token", verify_email);
router.get("/user/verify-user-auth", secureUserRoute, verifyUserAuth);
router.post("/user/login", userLogin);

export default router;
