import { OrderModel } from "../models/order.model";

export async function getOrders(req: any, res: any) {
  const category = await OrderModel.find();

  res.json(category);
}

export async function createOrder(req: any, res: any) {
  const { userId, address, adminId, totalPrice, payment, createdDate, items } =
    req.body;
  console.log(req.body);
  // try {
  //   const data = await OrderModel.create({
  //     address: address,
  //     userId: userId,
  //     adminId: adminId,
  //     totalPrice: totalPrice,
  //     payment: payment,
  //     createdDate: createdDate,
  //     items: items,
  //   });

  //   res.json(data);
  // } catch (error) {
  //   console.log(error);
  //   res.send("error");
  // }
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
