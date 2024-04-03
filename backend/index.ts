import express from "express";
import cors from "cors";
import { connectDB } from "./database/connect";
import usersRouter from "./routes/usersRouter";




const app = express();
const port = 9090;

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);


connectDB();

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
