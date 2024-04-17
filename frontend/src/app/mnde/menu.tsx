"use client";

import { Children, ReactNode, useEffect, useState } from "react";
import { SellChip } from "./Sellchip";
import { foodlist } from "./datalist";

export default function Menu() {
  return (
    <div
      className="grid grid-rows-12 grid-cols-1 sm:grid-rows-6 sm-grid-cols-2 md:grid-rows-6 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 xl:grid-rows-3 xl:grid-cols-4 2xl:grid-rows-3 2xl:grid-cols-4 2xl:gap-x-[24px] 2xl:gap-y-[60px] container mx-auto 2xl:max-w-[1200px] mb-[82px]"
      id="my_modal_2"
    >
      {foodlist.map((food) => (
        <FoodCard key={food.id} {...food} />
      ))}
    </div>
  );
}

type FoodCardProps = {
  id: number;
  img: string;
  title: string;
  price: number;
  saleprice?: number;
};

const FoodCard = (props: FoodCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function basket() {
    alert("Амжилттай сагслагдлаа");
  }

  let [foodQuantity, setFoodquantity] = useState(1);
  function incementFoodQuantity() {
    foodQuantity = foodQuantity + 1;
    setFoodquantity(foodQuantity);
  }
  const minusFoodQuantity = () => {
    if (foodQuantity > 1) {
      foodQuantity = foodQuantity - 1;
      setFoodquantity(foodQuantity);
    }
  };

  const { id, img, title, price, saleprice } = props;

  return (
    <>
      <div>
        <div className="relative overflow-hidden w-fit">
          <div className="absolute right-6 top-4">
            <SellChip />
          </div>
          <div
            onClick={() => setMenuOpen(true)}
            className="w-[282px] h-[196px] ease-in cursor-pointer"
          >
            <img className="object-fill rounded-lg" src={img}></img>
          </div>
        </div>
        <div className="flex flex-col mt-[14px]">
          <h1 className="font-semibold text-lg">{title}</h1>
          <div className="flex gap-2">
            <p className="font-semibold text-lg text-green-600">{price}₮</p>
            <p className="font-semibold text-lg line-through ">{saleprice}₮</p>
          </div>
        </div>
        <dialog className={`modal ${menuOpen ? "modal-open" : ""}`}>
          <div
            className="absolute inset-[0]"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className=" flex w-[981px] h-[564px] container mx-auto p-[32px] gap-[33px] bg-white rounded-2xl relative">
            <div>
              <img
                className="object-cover w-[500px] h-[500px]"
                src="https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
            </div>

            <div className="flex flex-col gap-[32px] justify-center">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                onClick={() => setMenuOpen(false)}
              >
                X
              </button>
              <div className="flex flex-col gap-[2px] w-[384px]">
                <div className="font-semibold  text-[#000000] text-xl">
                  Торт
                </div>
                <div className="font-semibold text-lg text-[#18ba51] mt-[2px]">
                  122323 ₮
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <div className="font-semibold text-lg text-[#000000]">Орц</div>
                <div className="bg-[#F6F6F6] p-[8px] rounded-[8px] text-[#767676]">
                  Хулуу, төмс, давс
                </div>
              </div>
              <div className="font-semibold text-lg text-[#000000]">Тоо</div>
              <div className="flex justify-between items-center">
                <button
                  className="btn bg-[#18BA51] text-[#FFFFFF]"
                  onClick={minusFoodQuantity}
                >
                  {" "}
                  -{" "}
                </button>
                <div>{foodQuantity}</div>
                <button
                  className="btn bg-[#18BA51] text-[#FFFFFF]"
                  onClick={incementFoodQuantity}
                >
                  {" "}
                  +{" "}
                </button>
              </div>

              <label
                onClick={basket}
                className="btn bg-[#18BA51] text-[#FFFFFF] w-full"
              >
                Сагслах
              </label>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};
