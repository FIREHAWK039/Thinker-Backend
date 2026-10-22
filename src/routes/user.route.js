import { Router } from "express";
const router = Router()


import { aiResponse } from "../controller/user.controller.js";

router.route("/chat").get(aiResponse)


export default router