// import express from "express";
import cors from "cors";
import type { Request, Response, Express } from "express";
import { connectDB } from "./database/connect";
import usersRouter from "./routers/usersRouter";
import categoryRouter from "./routers/categoryRouter";
import foodsRouter from "./routers/foodsRouter";
import orderRouter from "./routers/orderRouter";
import cartRouter from "./routers/cartRouter";
import cartItemRouter from "./routers/cartItemRouter";
import { v2 as cloudinary } from "cloudinary";
import express from "express";
import multer from "multer";
import { nanoid } from "nanoid";
import tempCartRouter from "./routers/tempCartRouter";

const app: Express = express();

const port = 9090;

cloudinary.config({
  cloud_name: "datkkanof",
  api_key: "987748353861582",
  api_secret: "5793yyCpTMkUxztroDEty08PeL4",
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

app.use(cors());
app.use(express.json());

app.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    const filePath = req?.file?.path;

    if (filePath) {
      const result = await cloudinary.uploader.upload(filePath);
      console.log(result);
      res.json({ url: result.secure_url });
    }
  }
);
// app.get(
//   "/upload",
//   upload.single("file"),
//   async (req: Request, res: Response) => {
//     const filePath = req?.file?.path;

//     if (filePath) {
//       const result = await cloudinary.uploader.upload(filePath);
//       console.log(result);
//       res.json({ url: result.secure_url });
//     }
//   }
// );

app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/foods", foodsRouter);
app.use("/orders", orderRouter);
app.use("/cart", cartRouter);
app.use("/cartItem", cartItemRouter);
app.use("/tempCart", tempCartRouter);

connectDB();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// app.listen(port, () => {
//   console.log(`Listening on port ${port}...`);
// });
