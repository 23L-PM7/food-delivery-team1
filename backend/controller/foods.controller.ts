import { FoodsModel } from "../models/foods.model";

export async function getFoods(req: any, res: any) {
  const foods = await FoodsModel.find();

  res.json(foods);
}

export async function createFoods(req: any, res: any) {
  const { name, image, ingeredient, price } = req.body;
  console.log({ name, image, ingeredient, price });

  const foods = await FoodsModel.create({
    name: name,
    image: "",
    ingeredient: ingeredient,
    price: 100,
  });

  console.log({ foods });

  res.json(foods);
}

export async function updateFoods(req: any, res: any) {
  const { id } = req.params;
  const { name, image, ingeredient, price } = req.body;

  const foods = await FoodsModel.findByIdAndUpdate(id, {
    name: name,
    image: image,
    ingeredient: ingeredient,
    price: price,
  });

  res.json(foods);
}
export async function deleteFoods(req: any, res: any) {
  const { id } = req.params;

  const foods = await FoodsModel.findByIdAndDelete(id);
  res.json(foods);
}
