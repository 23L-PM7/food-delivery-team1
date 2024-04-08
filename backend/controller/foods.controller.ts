import { FoodsModel } from "../models/foods.model";

export async function getFoods(req: any, res: any) {
  const foods = await FoodsModel.find();

  res.json(foods);
}

export async function createFoods(req: any, res: any) {
  const { id, name } = req.body;
  console.log(req.body);

  const foods = await FoodsModel.create({
    id: id,
    name: name,
  });
  res.json(foods);
}

export async function updateFoods(req: any, res: any) {
  const { id } = req.params;
  const { name } = req.body;

  await FoodsModel.findByIdAndUpdate(id, {
    name: name,
  });
  res.send("Successfully updated.");
}
export async function deleteFoods(req: any, res: any) {
  const { id } = req.params;

  await FoodsModel.findByIdAndDelete(id);
  res.send("Successfully deleted.");
}
