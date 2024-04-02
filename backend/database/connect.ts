import mongoose from "mongoose";
import 'dotenv/config'


const connectionString = process.env.MONGO_URL || ''

export const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
    }
};