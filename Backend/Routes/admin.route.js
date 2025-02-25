import { Router } from "express";

const router = Router();
import adminLogin from "../Controller/adminLogin.controller.js";
import updateAdmin from "../Controller/updateAdmin.controller.js";
import logout from "../Controller/logout.controller.js";
import AdminSignup from "../Controller/AdminSignup.controller.js";
import secureAdminRoute from "../middlewares/secureAdminRoute.js";
import adminAuthCheck from "../Controller/AdminAuthCheck.controller.js";

router.post("/admin/login", adminLogin);
router.post("/admin/signup", AdminSignup);
router.post("/admin/update_admin", secureAdminRoute, updateAdmin);
router.get("/admin/check-admin-auth", secureAdminRoute, adminAuthCheck);
router.post("/admin/logout", secureAdminRoute, logout);

export default router;
