import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

export const userRef = "user";

const usersSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phoneNumber: Number,
  password: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

export const UsersModel = mongoose.model("User", usersSchema, userRef);
