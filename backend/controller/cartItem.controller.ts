import { CartItemModel } from "../models/cartItem.model";

export async function getCartItem(req: any, res: any) {
  const category = await CartItemModel.find();

  res.json(category);
}

export async function createCartItem(req: any, res: any) {
  const { id, name } = req.body;
  console.log(req.body);

  const category = await CartItemModel.create({
    id: id,
    name: name,
  });
  res.json(category);
}

export async function updateCartItem(req: any, res: any) {
  const { id } = req.params;
  const { updatedName } = req.body;

  await CartItemModel.findByIdAndUpdate(id, {
    name: updatedName,
  });
  res.send("Successfully updated.");
}
export async function deleteCartItem(req: any, res: any) {
  const { id } = req.params;

  await CartItemModel.findByIdAndDelete(id);
  res.send("Successfully deleted.");
}
