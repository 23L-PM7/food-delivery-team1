import { UsersModel } from "../models/user.model";
import jwt from "jsonwebtoken";
import { checkAuth } from "../middlewares/check-auth";
import { response, type Request, type Response } from "express";

export const secret = "dmngo"

export async function getUsers(require: Request, res: Response) {
  const users = await UsersModel.find();

  res.json(users);
}

export async function createUsers(req: any, res: any) {
  const { name, email, password, phoneNumber, role } = req.body;
  console.log(req.body);

  // findOne

  const user = await UsersModel.findOne({ email });

  if (user) {
    res
      .status(401)
      .json({ alert: "Бүртгэлтэй И-Мэйл байна." });
    return;
  }

  const newUser = await UsersModel.create({
    name: name,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    role: role,
  });


  res.json(newUser);
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
  const users = await UsersModel.find();
  const accessToken = req.get("access-token");

  if (!accessToken) {
    return res.sendStatus(403);
  }

  try {
    const decoded = jwt.verify(accessToken, "dmngo");
    console.log({ decoded });
    res.json(users);
  } catch (error) {
    return res.sendStatus(403);
  }
}

export async function createLogin(req: any, res: any) {
  const { email, password } = req.body;
  console.log(req.body);

  const user = await UsersModel.findOne({ email: email });

  if (!user) {
    res
      .status(401)
      .json({ alert: "Та бүртгэлгүй байгаа учир бүртгүүлнэ үү" });
    return;
  }

  if (user.password !== password) {
    res.status(401)
      .json({ message: "Нэвтрэх нэр эсвэл нууц үг буруу байна." });
    return;
  }

  if (user) {
    const accesstoken = jwt.sign({ email: email }, "dmngo");
    res.json({ accesstoken });
  }
  res.sendStatus(204);
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


// export const getUserById = async (req: Request, res: Response) => {
//   const accessToken = req.get("access-token");
//   if (!accessToken) {
//     res.json({ message: "unautorized" })
//     return
//   }

//   const decoded = jwt.verify(accessToken, "dmngo");
//   const userId = decoded._id

//   const user = await UsersModel.findById(userId).select('-password')

//   response.json(user)
// }

export const me = async (req: Request, res: Response) => {



  try {
    const { newtoken } = req.body
    const id: any = jwt.verify(newtoken, secret);


    const user = await UsersModel.findById(id.userId)
    if (!user) {
      res.send("error ym irsengu")
      return
    }


    res.json(user)
  } catch (error) {
    console.log(error)
    res.send("error try ajilsangui")
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return
  }

  try {
    const user: any = await UsersModel.findOne({ email });

    if (!user) {
      console.log("user ireegui")
      return;
    }

    console.log(user)

    if (password == user.password) {
      const accesstoken = jwt.sign({ userId: user._id }, secret)
      res.json(accesstoken)
    } else {
      console.log("accesstoken ugj chadsangui")
      res.send("Error")
    }

    res.send("ok")
  } catch (error) {
    console.log(error)
    res.json("Error")
  }


}

/////////////////FORGOT PASS//////////////////////////////


