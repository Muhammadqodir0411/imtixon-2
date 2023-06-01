
import { Router } from "express";
import adminController from "../controllers/admin.controller.js";
import checkToken from "../middlewares/check-token.js";

const router = Router();

router.post("/admin/login", adminController.LOGIN)
router.post('/admin/add-post', adminController.addPost)
router.post("/activate" , checkToken,  adminController.ACTIVATE)

export default router;
