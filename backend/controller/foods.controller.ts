import { FoodsModel } from "../models/foods.model";

export async function GetFoods(req: any, res: any) {
  const foods = await FoodsModel.find();

  res.json(foods);
}

export async function createFoods(req: any, res: any) {
  const { name, image, ingredient, price, saleprice } = req.body;
  console.log({ name, image, ingredient, price, saleprice });

  const foods = await FoodsModel.create({
    name: name,
    image: image,
    ingredient: ingredient,
    price: price,
    saleprice: saleprice,
  });

  console.log({ foods });

  res.json(foods);
}

export async function updateFoods(req: any, res: any) {
  const { id } = req.params;
  const { name, image, ingeredient, price, saleprice } = req.body;

  const foods = await FoodsModel.findByIdAndUpdate(id, {
    name: name,
    image: image,
    ingeredient: ingeredient,
    price: price,
    saleprice: saleprice,
  });

  res.json(foods);
}
export async function deleteFoods(req: any, res: any) {
  const { id } = req.params;

  const foods = await FoodsModel.findByIdAndDelete(id);
  res.json(foods);
}
