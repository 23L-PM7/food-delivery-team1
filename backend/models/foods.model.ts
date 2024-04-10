import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const foodsSchema = new Schema({
  id: ObjectId,
  name: String,
  image: String,
  ingredient: String,
  price: Number,
});

export const FoodsModel = mongoose.model("Foods", foodsSchema);
