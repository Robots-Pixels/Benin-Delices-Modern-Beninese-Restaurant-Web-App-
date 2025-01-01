import express from "express";
const app = express();
import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
})

app.get("/api/", (req, res) => {
    res.json({ message: "Hello from server!" });
})
