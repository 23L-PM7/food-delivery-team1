import { useEffect, ReactNode, useState } from "react";
import axios from "axios";

// export type Food = {
//   id: string;
//   name: string;
//   image: string;
//   ingredient: string;
//   price: number;
//   saleprice: number;
//   category: string;
// };
// export const FoodsCardModal = (props: Food) => {
export const FoodsCardModal = ({ foodmodal }: { foodmodal: any }) => {
  // const { id, name, image, ingredient, price, category } = props;
  const [name, setFoodName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);

  const createFoods = async (id: string) => {
    console.log(name);
    if (name == "" || name == null) {
    } else {
      await axios
        .put(`http://localhost:9090/foods/update/${id}`, {
          name,
          ingredient,
          price,
          category,

          // category: selectedCategoryOption.value,
        })
        .then(() => {
          setFoodName("");
          setIngredient("");
          setPrice("");
          // setCategory("1");

          // setSelectedCategoryOption(undefined);
        });
    }
  };
  console.log(name);
  return (
    <div className=" flex w-[981px] h-[564px] container mx-auto p-[32px] gap-[33px] bg-white rounded-2xl relative">
      <div>
        <img
          className="object-cover w-[500px] h-[500px]"
          src="https://media.istockphoto.com/id/1690090007/photo/a-cropped-image-of-a-womans-hand-holding-a-piece-of-toasted-bread-with-scrambled-eggs-on-top.jpg?s=2048x2048&w=is&k=20&c=KYa9toFXQyJ_pWcikPGQ6qxHl127RRM7txLFfDv5SMM="
        />
        {foodmodal.image}
      </div>

      <div className="flex flex-col gap-[32px] justify-center">
        <form method="dialog">
          {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 ">
            X
          </button> */}
        </form>
        <div className="flex flex-col gap-[2px] w-[384px]">
          <div className="font-semibold  text-[#000000] text-xl">
            <input
              type="text"
              // placeholder={foodmodal.name}
              className="input w-full max-w-xs"
              value={name}
              // id={foodmodal._id}
              // key={foodmodal._id}
              onChange={(e) => setFoodName(e.target.value)}
            />
          </div>
          <div className="font-semibold text-lg text-[#18ba51] mt-[2px]">
            <input
              type="number"
              // placeholder={foodmodal.price}
              className="input w-full max-w-xs"
              value={price}
              // id={foodmodal._id}
              // key={foodmodal._id}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          <div className="font-semibold text-lg text-[#000000]">Орц</div>

          <div className="bg-[#F6F6F6] p-[8px] rounded-[8px] text-[#767676]">
            <input
              type="text"
              // placeholder={foodmodal.ingredient}
              className="input w-full max-w-xs"
              value={ingredient}
              // id={foodmodal._id}
              // key={foodmodal._id}
              onChange={(e) => setIngredient(e.target.value)}
            />
          </div>
        </div>
        <div className="font-semibold text-lg text-[#000000] block">
          Хоолны ангилал
          <h1 className="font-semibold text-lg text-[#18ba51] mt-[2px]">
            {/* {foodmodal.category} */}
          </h1>
        </div>
        <div>
          <button
            onClick={createFoods}
            className="btn w-[109px] h-[40px] bg-zinc-700 text-white"
          >
            Continue
          </button>
        </div>
        <div className="flex justify-between items-center"></div>
      </div>
    </div>
  );
};
