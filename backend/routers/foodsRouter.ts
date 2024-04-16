import express from "express";

import {
  getFoods,
  getCustomFoods,
  createFoods,
  updateFoods,
  deleteFoods,
} from "../controller/foods.controller";
import { checkAuth } from "../middlewares/check-auth";

const foodsRouter = express.Router();

foodsRouter.get("/", getFoods);
foodsRouter.post("/custom/:id", getCustomFoods);
foodsRouter.post("/create", createFoods);
foodsRouter.put("/update/:id", updateFoods);
foodsRouter.delete("/delete/:id", deleteFoods);

export default foodsRouter;
