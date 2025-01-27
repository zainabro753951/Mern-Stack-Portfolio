import { Router } from "express";

const router = Router();
import adminLogin from "../Controller/adminLogin.controller.js";
import updateAdmin from "../Controller/updateAdmin.controller.js";
import logout from "../Controller/logout.controller.js";

router.post("/admin/login", adminLogin);
router.post("/admin/update_admin", updateAdmin);
router.post("/admin/logout", logout);

export default router;
