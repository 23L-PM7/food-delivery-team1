import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { foodRef } from "./foods.model";

const { Schema } = mongoose;

export const userRef = "user";

const usersSchema = new Schema({
  id: ObjectId,
  image: String,
  name: String,
  email: String,
  phoneNumber: Number,
  password: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  // foodId: {
  //   type: Schema.Types.ObjectId,
  //   ref: foodRef,
  // },
});

export const UsersModel = mongoose.model("user", usersSchema, userRef);
