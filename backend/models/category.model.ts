import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  id: ObjectId,
  name: String,
});

export const CategoryModel = mongoose.model("Category", categorySchema);
