import { Router } from "express";
const router = Router()


import { aiResponse,clearchat } from "../controller/user.controller.js";

console.log("i am in route");

router.route("/chats").post(aiResponse)
router.route("/clear-chat").post(clearchat)


export default router
