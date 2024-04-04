import { CategoryModel } from "../models/category.model";

export async function getCategory(req: any, res: any) {
  const category = await CategoryModel.find();

  res.json(category);
}

export async function createCategory(req: any, res: any) {
  const { id, name } = req.body;
  console.log(req.body);

  const category = await CategoryModel.create({
    id: id,
    name: name,
  });
  res.send("Successfully created.");
}

export async function updateCategory(req: any, res: any) {
  const { name } = req.body;
  const { id } = req.params;

  const category = await CategoryModel.findByIdAndUpdate(id, {
    name: name,
  });
  res.send("Successfully updated.");
}
export async function deleteCategory(req: any, res: any) {
  const { id } = req.params;

  const category = await CategoryModel.findByIdAndDelete(id);
  res.send("Successfully deleted.");
}
