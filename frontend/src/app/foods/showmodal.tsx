import { useEffect, ReactNode, useState } from "react";
import axios from "axios";
type MapProps = {
  food: any;
};

export default function ShowModal({ food }: MapProps) {
  const [getfoods, setGetFoods] = useState([]);

  const fetchFoods = async () => {
    await axios.get("http://localhost:9090/foods").then((response) => {
      setGetFoods(response.data);
    });
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  // fetch categories

  return (
    <div className=" flex w-[981px] h-[564px] container mx-auto p-[32px] gap-[33px] bg-white rounded-2xl relative">
      <div>
        <img
          className="object-cover w-[500px] h-[500px]"
          src="https://media.istockphoto.com/id/1690090007/photo/a-cropped-image-of-a-womans-hand-holding-a-piece-of-toasted-bread-with-scrambled-eggs-on-top.jpg?s=2048x2048&w=is&k=20&c=KYa9toFXQyJ_pWcikPGQ6qxHl127RRM7txLFfDv5SMM="
        />
      </div>

      <div className="flex flex-col gap-[32px] justify-center">
        <form method="dialog">
          {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 ">
            X
          </button> */}
        </form>
        <div className="flex flex-col gap-[2px] w-[384px]">
          <div className="font-semibold  text-[#000000] text-xl">
            <input type="text" value={food.name} />
          </div>
          <div className="font-semibold text-lg text-[#18ba51] mt-[2px]">
            <input type="text" value={food.price} />
          </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          <div className="font-semibold text-lg text-[#000000]">Орц</div>

          <div className="bg-[#F6F6F6] p-[8px] rounded-[8px] text-[#767676]">
            <input type="text" value={food.ingredient} />
          </div>
        </div>
        <div className="font-semibold text-lg text-[#000000] block">
          Хоолны ангилал
          {getfoods.map((fooditem: any) => (
            <h1 className="font-semibold text-lg text-[#18ba51] mt-[2px]">
              {fooditem.foodcategory}
            </h1>
          ))}
        </div>
        <div className="flex justify-between items-center"></div>
      </div>
    </div>
  );
}
