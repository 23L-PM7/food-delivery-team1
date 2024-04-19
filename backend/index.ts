import express from "express";
import cors from "cors";
import { connectDB } from "./database/connect";
import usersRouter from "./routers/usersRouter";
import categoryRouter from "./routers/categoryRouter";
import foodsRouter from "./routers/foodsRouter";
import orderRouter from "./routers/orderRouter";

const app = express();
const port = 9090;

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/foods", foodsRouter);
app.use("/orders", orderRouter);

connectDB();

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
