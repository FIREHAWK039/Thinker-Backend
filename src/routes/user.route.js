import { Router } from "express";
import { handleUserRegister, handleUserLogin, handleUserLogout } from "../controller/user.controller.js";
import { requireAuth } from "../middleware/user.middleware.js";
import { aiResponse, clearchat } from "../controller/user.controller.aatmik.js";
import { handleUserProfile } from "../controller/user.profile.controller.js";
const router = Router();

console.log("i am in route");

router.post("/chats", aiResponse)
router.post("/clear-chat", clearchat)
router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);
router.get("/profile", requireAuth, handleUserProfile);

router.post("/logout", handleUserLogout);

export default router