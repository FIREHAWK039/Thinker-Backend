import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.route.js";
import staticRoutes from "./routes/static.route.js";
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");




app.use("/", staticRoutes);


// CORS
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

// Body parsers
app.use(express.json({ limit: "16kb" }));

app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);
// Routes
app.use("/api/v1/users", userRoutes);
// Cookie parser
app.use(cookieParser());

// Static files
app.use(express.static("public"));



// Root route


app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome</h1>

        <a href="/api/v1/users/login">Login</a>
        <br>
        <a href="/api/v1/users/register">Register</a>
    `);
});





export { app };