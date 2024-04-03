import { UsersModel } from "../models/user.model";



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
