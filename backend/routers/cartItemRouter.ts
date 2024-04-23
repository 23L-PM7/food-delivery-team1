import express from "express";

import {
  createCartItem,
  deleteCartItem,
  getCartItem,
  updateCartItem,
} from "../controller/cartItem.controller";

const cartItemRouter = express.Router();

cartItemRouter.get("/", getCartItem);
cartItemRouter.post("/create", createCartItem);
cartItemRouter.put("/update/:id", updateCartItem);
cartItemRouter.delete("/delete/:id", deleteCartItem);

export default cartItemRouter;
