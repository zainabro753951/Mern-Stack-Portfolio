import { Router } from "express";
import getAboutData from "../Controller/getAbout.controller.js";
const router = Router();

router.get("/admin/getAbout", getAboutData);

export default router;
