
import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app.js";

const PORT = process.env.PORT || 8001;
const MONGO_URI = "mongodb://127.0.0.1:27017/thinker";

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.log("MongoDB connection failed");
    }
}

connectDB();

