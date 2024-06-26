import { countReset } from "console";
import { FoodsModel } from "../models/foods.model";

export async function getCustomFoods(req: any, res: any) {
  const { count } = req.body;
  const foods = await FoodsModel.find()
    .populate("categoryId", "userId")
    .limit(count);

  res.json(foods);
}

export async function getFoods(req: any, res: any) {
  const foods = await FoodsModel.find().populate("categoryId", "userId");

  res.json(foods);
}

export async function createFoods(req: any, res: any) {
  const { name, ingredient, price, saleprice, categoryId, userId, image } =
    req.body;
  console.log({ name, ingredient, price, saleprice, categoryId, image });

  try {
    const foods = await FoodsModel.create({
      name: name,
      ingredient: ingredient,
      price: price,
      saleprice: saleprice,
      categoryId: categoryId,
      userId: userId,
      image: image,
    });

    console.log({ foods });

    res.json(foods);
  } catch (error) {
    console.log(error);
  }
}

export async function updateFoods(req: any, res: any) {
  const { id } = req.params;
  const { name, ingredient, price, saleprice, categoryId, image } = req.body;

  const foods = await FoodsModel.findByIdAndUpdate(id, {
    name: name,
    ingredient: ingredient,
    price: price,
    saleprice: saleprice,
    categoryId: categoryId,
    image: image,
  });

  res.json(foods);
}
export async function deleteFoods(req: any, res: any) {
  const { id } = req.params;

  const foods = await FoodsModel.findByIdAndDelete(id);
  res.json(foods);
}
