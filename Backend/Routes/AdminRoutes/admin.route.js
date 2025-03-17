import { Router } from "express";

const router = Router();
import adminLogin from "../../Controller/AdminControllers/adminLogin.controller.js";
import updateAdmin from "../../Controller/AdminControllers/updateAdmin.controller.js";
import logout from "../../Controller/AdminControllers/logout.controller.js";
import AdminSignup from "../../Controller/AdminControllers/AdminSignup.controller.js";
import secureAdminRoute from "../../middlewares/secureAdminRoute.js";
import adminAuthCheck from "../../Controller/AdminControllers/AdminAuthCheck.controller.js";

router.post("/admin/login", adminLogin);
router.post("/admin/signup", AdminSignup);
router.put("/admin/update_admin", secureAdminRoute, updateAdmin);
router.get("/admin/check-admin-auth", secureAdminRoute, adminAuthCheck);
router.post("/admin/logout", secureAdminRoute, logout);

export default router;
