// import express from "express";
import cors from "cors";
import { connectDB } from "./database/connect";
import usersRouter from "./routers/usersRouter";
import categoryRouter from "./routers/categoryRouter";
import foodsRouter from "./routers/foodsRouter";
import orderRouter from "./routers/orderRouter";
import cartRouter from "./routers/cartRouter";
import cartItemRouter from "./routers/cartItemRouter";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { Schema, connect, model } from "mongoose";
import multer from "multer";
import { nanoid } from "nanoid";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

function getExtension(filename: string) {
  const names = filename.split(".");
  if (names.length > 1) {
    return `.${names.pop()}`;
  }
  return "";
}

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
      const filename = `${nanoid()}${getExtension(file.originalname)}`;
      cb(null, filename);
    },
  }),
});

const app = express();
const port = 9090;

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/foods", foodsRouter);
app.use("/orders", orderRouter);
app.use("/cart", cartRouter);
app.use("/cartItem", cartItemRouter);

connectDB();

app.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    // req.file

    const filePath = req.file?.path;

    if (filePath) {
      const result = await cloudinary.uploader.upload(filePath);
      console.log(result);
      res.json({ url: result.secure_url });
    }
  }
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

connect(`${process.env.MONGODB_STRING}`).then(() => {
  console.log("MongoDB started");
});

// app.listen(port, () => {
//   console.log(`Listening on port ${port}...`);
// });
