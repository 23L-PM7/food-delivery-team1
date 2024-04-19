import { FoodsModel } from "../models/foods.model";

export async function getCustomFoods(req: any, res: any) {
  const { category } = req.param;
  const { sale, count } = req.body;
  const foods = await FoodsModel.find({ category: category }).limit(count);

  res.json(foods);
}

export async function getFoods(req: any, res: any) {
  const foods = await FoodsModel.find().populate("categoryId", "userId");

  res.json(foods);
}

export async function createFoods(req: any, res: any) {
  const { name, ingredient, price, saleprice, categoryId, userId } = req.body;
  console.log({ name, ingredient, price, saleprice, categoryId });

  try {
    const foods = await FoodsModel.create({
      name: name,
      ingredient: ingredient,
      price: price,
      saleprice: saleprice,
      categoryId: categoryId,
      userId: userId,
    });

    console.log({ foods });

    res.json(foods);
  } catch (error) {
    console.log(error);
  }
}

export async function updateFoods(req: any, res: any) {
  const { id } = req.params;
  const { name, image, ingeredient, price, saleprice, foodcategory } = req.body;

  const foods = await FoodsModel.findByIdAndUpdate(id, {
    name: name,
    image: image,
    ingeredient: ingeredient,
    price: price,
    saleprice: saleprice,
    foodcategory: foodcategory,
  });

  res.json(foods);
}
export async function deleteFoods(req: any, res: any) {
  const { id } = req.params;

  const foods = await FoodsModel.findByIdAndDelete(id);
  res.json(foods);
}
