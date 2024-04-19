import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { userRef } from "./user.model";
const { Schema } = mongoose;

const orderSchema = new Schema({
  id: ObjectId,
  userId: {
    type: Schema.Types.ObjectId,
    ref: userRef,
  },
  orderNumber: Number,
  foods: Array,
  totalPrice: Number,
  process: ObjectId,
  createdDate: Date,
  district: String,
  Khoroo: String,
  Apartments: String,
});

export const OrderModel = mongoose.model("Model", orderSchema);
