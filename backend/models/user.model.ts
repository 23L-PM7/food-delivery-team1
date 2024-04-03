import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
});

export const UserModel = mongoose.model("User", userSchema);


