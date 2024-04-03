"use client";

import { useState } from "react";
import Basket from "./Modal/basket";
import { SellChip } from "./Sellchip";
import { foodlist } from "./datalist";

[];

export function Modal() {
  let [foodQuantity, setFoodquantity] = useState(1);

  function incementFoodQuantity() {
    foodQuantity = foodQuantity + 1;
    setFoodquantity(foodQuantity);
  }

  const minusFoodQuantity = () => {
    if (foodQuantity > 0) {
      foodQuantity = foodQuantity - 1;
      setFoodquantity(foodQuantity);
    }
  };

  return (
    <div className=" flex w-[981px] h-[564px] container mx-auto p-[32px] gap-[33px] bg-white rounded-2xl relative">
      <div className="">
        <img
          className="object-cover w-[500px] h-[500px]"
          src="https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
      </div>

      <div className="flex flex-col gap-[32px] justify-center">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
            X
          </button>
        </form>
        <div className="flex flex-col gap-[2px] w-[384px]">
          <div className="font-semibold  text-[#000000] text-xl">Торт</div>
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
        <button className="btn bg-[#18BA51] text-[#FFFFFF]">Сагслах</button>
      </div>
    </div>
  );
}

function ShowFood() {
  document.getElementById("my_modal_3").showModal();
}

export default function Menu() {
  return (
    <div
      className="grid grid-rows-3 grid-cols-4 gap-x-[24px] gap-y-[60px] container mx-auto max-w-[1200px]"
      id="my_modal_2"
    >
      {foodlist.map((food) => (
        <div>
          <div className="relative overflow-hidden w-fit">
            <div className="absolute right-6 top-4">
              <SellChip />
            </div>
            <div className="w-[282px] h-[196px] ease-in">
              <img
                className="object-fill rounded-lg"
                onClick={() => ShowFood()}
                src={food.img}
              ></img>
            </div>
          </div>
          <div className="flex flex-col mt-[14px]">
            <h1 className="font-semibold text-lg">{food.tittle}</h1>
            <div className="flex gap-2">
              <p className="font-semibold text-lg text-green-600">
                {food.price}₮
              </p>
              <p className="font-semibold text-lg line-through ">
                {food.saleprice}₮
              </p>
            </div>
          </div>
        </div>
      ))}
      <div></div>
      <dialog id="my_modal_3" className="modal">
        <Modal />
      </dialog>
    </div>
  );
}
