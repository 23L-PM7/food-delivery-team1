import express from "express";

import {
  getCart,
  createCart,
  updateCart,
  deleteCart,
} from "../controller/cart.controller";

const cartRouter = express.Router();

cartRouter.get("/", getCart);
cartRouter.post("/create", createCart);
cartRouter.put("/update/:id", updateCart);
cartRouter.delete("/delete/:id", deleteCart);

export default cartRouter;