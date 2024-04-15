import express from "express";

import {
  getFoods,
  getFirstFour,
  createFoods,
  updateFoods,
  deleteFoods,
} from "../controller/foods.controller";
import { checkAuth } from "../middlewares/check-auth";

const foodsRouter = express.Router();

foodsRouter.get("/", getFoods);
foodsRouter.get("/four", getFirstFour);
foodsRouter.post("/create", createFoods);
foodsRouter.put("/update/:id", updateFoods);
foodsRouter.delete("/delete/:id", deleteFoods);

export default foodsRouter;
