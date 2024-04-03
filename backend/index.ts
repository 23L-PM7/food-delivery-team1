import express from "express";
import cors from "cors";
import { connectDB } from "./database/connect";
import { UserModel } from "./models/user.model";

const app = express();
const port = 7770;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", (req, res) => {
  const user = UserModel.create({
    id: 123,
    name: "cake",
    email: "assad",
    password: "123",
    role: {
      type: "user",
    },
  })

  res.send("success")
})

connectDB();

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
