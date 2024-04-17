import express from "express";

import {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
  // getUserById,
} from "../controller/users.controller";

import {
  deleteLogin,
  getLogin,
  updateLogin,
  createLogin,
} from "../controller/users.controller";

const usersRouter = express.Router();

usersRouter.get("/login", getLogin);
usersRouter.post("/login", createLogin);
usersRouter.put("/login/:id", updateLogin);
usersRouter.delete("/login/:id", deleteLogin);

usersRouter.get("/signup", getUsers);
usersRouter.post("/signup", createUsers);
usersRouter.put("/signup/:id", updateUsers);
usersRouter.delete("/signup/:id", deleteUsers);
// usersRouter.get("/:id", getUserById);
export default usersRouter;
