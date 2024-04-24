import express from "express";

import {
  getTempCart,
  createTempCart,
  updateTempCart,
  deleteTempCart,
} from "../controller/tempCart.controller";

const tempCartRouter = express.Router();

tempCartRouter.get("/", getTempCart);
tempCartRouter.post("/create", createTempCart);
tempCartRouter.put("/update/:id", updateTempCart);
tempCartRouter.delete("/delete/:id", deleteTempCart);

export default tempCartRouter;
