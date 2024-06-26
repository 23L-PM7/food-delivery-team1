import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { userRef } from "./user.model";
import { foodRef } from "./foods.model";
import { cartItemRef } from "./cartItem.model";
const { Schema } = mongoose;

const tempCartSchema = new Schema({
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
  totalPrice: Number,
  expiresAt: {
    type: Date,
    // The index will expire documents after 1 min
    default: Date.now,
    index: { expires: "1m" },
  },
});

export const TempCartModel = mongoose.model(
  "TempCartModel",
  tempCartSchema,
  cartItemRef
);
