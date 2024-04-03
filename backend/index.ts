import express from "express";
import cors from "cors";
import { connectDB } from "./database/connect";


const app = express();
const port = 7770;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});


connectDB();

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
