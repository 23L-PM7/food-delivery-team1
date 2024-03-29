"use client";
import { useState } from "react";

export default function Hover() {
  const [foodQuantity, setFoodquantity] = useState(1);

  const incementFoodQuantity = () => {
    setFoodquantity(foodQuantity + 1);
  };

  const minusFoodQuantity = () => {
    setFoodquantity(foodQuantity - 1);
  };

  return (
    <div
      id="modal"
      className=" fixed inset-[0] flex justify-center items-center"
    >
      <div className="absolute inset-[0] bg-[#000000]/50"></div>
      <div className="relative w-[981px] h-[564px] bg-white m-auto p-[32px] rounded-[16px]">
        <svg
          className="absolute top-2 right-2 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
        <div className="flex gap-[33px]">
          <div className="w-[500px] h-[500px]">
            <img
              className="object-fill"
              src="./images/menu food photos/menu-1.png"
            ></img>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[2px]">
              <div className="font-semibold text-lg text-[#000000]">
                food name
              </div>
              <div className="font-semibold text-lg text-[#18BA51] mt-[2px]">
                Хэдэн ₮
              </div>
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className="font-semibold text-lg text-[#000000]">Орц</div>
              <div className="bg-[#F6F6F6] p-[8px] rounded-[8px] text-[#767676]">
                Хулуу, төмс, давс
              </div>
            </div>
            <div className="font-semibold text-lg text-[#000000]">Тоо</div>
            <div className="flex">
              <button className="btn" onClick={incementFoodQuantity}>
                {" "}
                +{" "}
              </button>
              <div>{foodQuantity}</div>
              <button className="btn" onClick={minusFoodQuantity}>
                {" "}
                -{" "}
              </button>
            </div>
            <button className="btn">Сагслах</button>
          </div>
        </div>
      </div>
    </div>
  );
}
