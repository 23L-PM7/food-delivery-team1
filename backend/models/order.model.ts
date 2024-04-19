import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { userRef } from "./user.model";
import { foodRef } from "./foods.model";
const { Schema } = mongoose;

const orderSchema = new Schema({
  id: ObjectId,
  userId: {
    type: Schema.Types.ObjectId,
    ref: userRef,
  },
  content: {
    food: {
      type: Schema.Types.ObjectId,
      ref: foodRef,
    },
    amount: Number,
  },
  totalPrice: Number,
  process: ObjectId,
  createdDate: Date,
  Address: String,
});

export const OrderModel = mongoose.model("Model", orderSchema);
