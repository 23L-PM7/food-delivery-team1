import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { userRef } from "./user.model";
import { foodRef } from "./foods.model";
const { Schema } = mongoose;

export const cartRef = "cart";

const cartSchema = new Schema({
  id: ObjectId,
  userId: {
    type: Schema.Types.ObjectId,
    ref: userRef,
  },
  foodId: {
    type: Schema.Types.ObjectId,
    ref: foodRef,
  },
  quantity: Number,
});

export const CartModel = mongoose.model("cart", cartSchema, cartRef);
