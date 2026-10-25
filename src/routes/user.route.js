import { Router } from "express";
import { handleUserRegister, handleUserLogin, handleUserLogout } from "../controller/user.controller.js";
import { requireAuth } from "../middleware/user.middleware.js";
const router = Router();


router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);
router.get("/profile", requireAuth);

router.post("/logout", handleUserLogout);

export default router