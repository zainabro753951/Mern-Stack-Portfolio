import { Router } from "express";
import setAboutData from "../Controller/addAbout.controller.js";
import updateAboutValues from "../Controller/updateAbout.controller.js";
let router = Router();

router.post("/admin/add_about", setAboutData);

// Update about
router.post("/admin/update_about", updateAboutValues);

export default router;
