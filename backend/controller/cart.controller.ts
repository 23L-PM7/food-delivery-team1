import { CartModel } from "../models/cart.model";

export async function getCart(req: any, res: any) {
  const category = await CartModel.find();

  res.json(category);
}

export async function createCart(req: any, res: any) {
  const { id, name } = req.body;
  console.log(req.body);

  const category = await CartModel.create({
    id: id,
    name: name,
  });
  res.json(category);
}

export async function updateCart(req: any, res: any) {
  const { id } = req.params;
  const { updatedName } = req.body;

  await CartModel.findByIdAndUpdate(id, {
    name: updatedName,
  });
  res.send("Successfully updated.");
}
export async function deleteCart(req: any, res: any) {
  const { id } = req.params;

  await CartModel.findByIdAndDelete(id);
  res.send("Successfully deleted.");
}
