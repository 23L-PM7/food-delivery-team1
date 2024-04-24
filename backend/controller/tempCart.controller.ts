import { TempCartModel } from "../models/temporaryCart.model";

export async function getTempCart(req: any, res: any) {
  const tempcart = await TempCartModel.find();

  res.json(tempcart);
}

export async function createTempCart(req: any, res: any) {
  const { id, name } = req.body;
  console.log(req.body);

  const category = await TempCartModel.create({
    id: id,
    name: name,
  });
  res.json(category);
}

export async function updateTempCart(req: any, res: any) {
  const { id } = req.params;
  const { updatedName } = req.body;

  await TempCartModel.findByIdAndUpdate(id, {
    name: updatedName,
  });
  res.send("Successfully updated.");
}
export async function deleteTempCart(req: any, res: any) {
  const { id } = req.params;

  await TempCartModel.findByIdAndDelete(id);
  res.send("Successfully deleted.");
}
