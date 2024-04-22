import { OrderModel } from "../models/order.model";

export async function getOrders(req: any, res: any) {
  const category = await OrderModel.find();

  res.json(category);
}

export async function createOrder(req: any, res: any) {
  const { userId, name } = req.body;
  console.log(req.body);

  const category = await OrderModel.create({
    // id: id,
    name: name,
  });
  res.json(category);
}

export async function updateOrder(req: any, res: any) {
  const { id } = req.params;
  const { name } = req.body;

  const category = await OrderModel.findByIdAndUpdate(id, {
    name: name,
  });
  res.send("Successfully updated.");
}
export async function deleteOrder(req: any, res: any) {
  const { id } = req.params;

  const category = await OrderModel.findByIdAndDelete(id);
  res.send("Successfully deleted.");
}
