import { UsersModel } from "../models/user.model";
import jwt from "jsonwebtoken";

export async function getUsers(req: any, res: any) {
  const users = await UsersModel.find();

  res.json(users);
}

export async function createUsers(req: any, res: any) {
  const { id, name, email, password, phoneNumber, role } = req.body;
  console.log(req.body);

  const users = await UsersModel.create({
    id: id,
    name: name,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    role: role,
  });
  res.json(users);
}

export async function updateUsers(req: any, res: any) {
  const { name, email, password, phoneNumber, role } = req.body;
  const { id } = req.params;

  const users = await UsersModel.findByIdAndUpdate(id, {
    name: name,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    role: role,
  });
  res.json(users);
}
export async function deleteUsers(req: any, res: any) {
  const { id } = req.params;

  const users = await UsersModel.findByIdAndDelete(id);
  res.json(users);
}

////////////////////LOGIN HESEG////////////////////

export async function getLogin(req: any, res: any) {
  res.json(["dorj", "dolgor"]);
}

export async function createLogin(req: any, res: any) {
  const { email, password } = req.body;
  console.log(req.body);

  UsersModel.findOne({ email: "bat@gmail.com" });
  const loggedin = true;

  if (loggedin) {
    const access = jwt.sign({ email: email, password: password }, "dd");
    res.json({ access });
  }

  res.sendStatus(401);
}

export async function updateLogin(req: any, res: any) {
  const { email, password } = req.body;
  const { id } = req.params;

  const usersLogin = await UsersModel.findByIdAndUpdate(id, {
    email: email,
    password: password,
  });
  res.json(usersLogin);
}
export async function deleteLogin(req: any, res: any) {
  const { id } = req.params;

  const usersLogin = await UsersModel.findByIdAndDelete(id);

  res.json(usersLogin);
}
