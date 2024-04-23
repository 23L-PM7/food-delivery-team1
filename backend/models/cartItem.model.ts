import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { userRef } from "./user.model";
import { foodRef } from "./foods.model";
const { Schema } = mongoose;

export const cartItemRef = "cart";

const cartItemSchema = new Schema({
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

export const CartItemModel = mongoose.model(
  "cart",
  cartItemSchema,
  cartItemRef
);
