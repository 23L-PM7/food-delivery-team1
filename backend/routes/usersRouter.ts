import express from "express";

import {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers,
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
usersRouter.put("/login", updateLogin);
usersRouter.delete("/login", deleteLogin);


usersRouter.get("/signup", getUsers);
usersRouter.post("/signup", createUsers);
usersRouter.put("/signup", updateUsers);
usersRouter.delete("/signup", deleteUsers);

export default usersRouter;