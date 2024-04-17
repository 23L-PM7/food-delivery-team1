import { ObjectId } from "mongodb";
import { categoryRef } from "./category.model";
import { userRef } from "./user.model";
import mongoose from "mongoose";
import { userInfo } from "os";
const { Schema } = mongoose;

const foodsSchema = new Schema({
  id: ObjectId,
  name: String,
  image: String,
  ingredient: String,
  price: Number,
  sale: Boolean,
  saleprice: Number,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: categoryRef,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: userRef,
  },
});

export const FoodsModel = mongoose.model("Foods", foodsSchema);
