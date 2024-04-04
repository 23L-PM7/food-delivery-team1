import express from "express";

import {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controller/category.controller";

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/create", createCategory);
categoryRouter.put("/update/[id]", updateCategory);
categoryRouter.delete("/delete/[id]", deleteCategory);

export default categoryRouter;
