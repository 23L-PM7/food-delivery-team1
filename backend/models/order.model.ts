import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { userRef } from "./user.model";
import { foodRef } from "./foods.model";
const { Schema } = mongoose;

const orderSchema = new Schema({
  id: ObjectId,
  adminId: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: userRef,
  },
  items: [
    {
      foodId: ObjectId,
      quantity: Number,
      price: Number,
      total: Number,
    },
  ],
  totalPrice: Number,
  process: ObjectId,
  createdDate: Date,
  Address: String,
});

export const OrderModel = mongoose.model("Model", orderSchema);

// const cartItem = {
//   id: 1,
//   orderId: 2,
//   userId: "ar",
//   foodId: 123,
//   quantity: 1,
// };

// const cart = {
//   id: 2,
//   totalPrice: 100,
// };

// const Food = {
//   id: 123,
//   name: "tsuivsan",
//   price: 1,
// };
