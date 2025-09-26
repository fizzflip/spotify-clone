import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import { error } from 'console';
import userRoutes from './route.js'

dotenv.config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI as string, {
            dbName: "Spotify"
        })
        console.log("MongoDB connected!");
    } catch {
        console.log(error);
    }
}

const app = express();

app.use("/api/v1", userRoutes);

app.get("/", (request, response) => {
    response.send("Server is working!")
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});