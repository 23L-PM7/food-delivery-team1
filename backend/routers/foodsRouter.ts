import express from "express";

import {
  GetFoods,
  createFoods,
  updateFoods,
  deleteFoods,
} from "../controller/foods.controller";
import { checkAuth } from "../middlewares/check-auth";

const foodsRouter = express.Router();

foodsRouter.get("/", GetFoods);
foodsRouter.post("/create", createFoods);
foodsRouter.put("/update/:id", updateFoods);
foodsRouter.delete("/delete/:id", deleteFoods);

export default foodsRouter;
