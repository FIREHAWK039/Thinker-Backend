import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.route.js";
import staticRoutes from "./routes/static.route.js";
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// CORS
app.use("/", staticRoutes);



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