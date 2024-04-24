import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { userRef } from "./user.model";
import { foodRef } from "./foods.model";
import { cartItemRef } from "./cartItem.model";
const { Schema } = mongoose;


const cartSchema = new Schema({
  id: ObjectId,
  items: [
    {
      cartItemId: {
        type: Schema.Types.ObjectId,
        ref: cartItemRef,
      },
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: userRef,
  },
  foodId: {
    type: Schema.Types.ObjectId,
    ref: foodRef,
  },
  totalPrice: Number,
});

export const CartModel = mongoose.model("CartModel", cartSchema,cartItemRef);
