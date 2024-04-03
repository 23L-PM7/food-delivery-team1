import express from "express";

import {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers,
} from "../controller/users.controller";


const usersRouter = express.Router();



usersRouter.get("/signup", getUsers);
usersRouter.post("/signup", createUsers);
usersRouter.put("/signup", updateUsers);
usersRouter.delete("/signup", deleteUsers);

export default usersRouter;