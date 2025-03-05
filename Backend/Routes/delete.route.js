import { Router } from "express";
const router = Router();
import secureAdminRoute from "../middlewares/secureAdminRoute.js";
import deleteEducation from "../Controller/deleteEducation.controller.js";

// Education Deleted
router.delete("/admin/delete_education/:id", secureAdminRoute, deleteEducation);

export default router;
