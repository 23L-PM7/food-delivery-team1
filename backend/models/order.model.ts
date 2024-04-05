import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
  id: ObjectId,
  userid: ObjectId,
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
