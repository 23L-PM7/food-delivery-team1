import express from "express";

import {
  getFoods,
  createFoods,
  updateFoods,
  deleteFoods,
} from "../controller/foods.controller";

const foodsRouter = express.Router();

foodsRouter.get("/", getFoods);
foodsRouter.post("/create", createFoods);
foodsRouter.put("/update/:id", updateFoods);
foodsRouter.delete("/delete/:id", deleteFoods);

export default foodsRouter;
