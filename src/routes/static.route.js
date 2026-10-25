
import express from "express";

const router = express.Router();

router.get("/api/v1/users/login", (req, res) => {
    return res.render("login");
});

router.get("/api/v1/users/register", (req, res) => {
    return res.render("register");
});

export default router;