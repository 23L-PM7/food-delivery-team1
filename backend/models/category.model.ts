import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

export const categoryRef = "category";

const categorySchema = new Schema({
  id: ObjectId,
  name: String,
});

export const CategoryModel = mongoose.model(
  "category",
  categorySchema,
  categoryRef
);
