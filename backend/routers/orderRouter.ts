import express from "express";

import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controller/order.controller";

const orderRouter = express.Router();

orderRouter.get("/", getOrders);
orderRouter.post("/create", createOrder);
orderRouter.put("/update/:id", updateOrder);
orderRouter.delete("/delete/:id", deleteOrder);

export default orderRouter;
