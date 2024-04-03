import { UsersModel } from "../models/user.model";


export async function getUsers(require: any, res: any) {
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