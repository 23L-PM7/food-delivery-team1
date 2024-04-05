"use client";
import { useState } from "react";

export default function Modal() {
  const [foodQuantity, setFoodquantity] = useState(1);

  const incementFoodQuantity = () => {
    setFoodquantity(foodQuantity + 1);
  };

<<<<<<< HEAD
  const minusFoodQuantity = () => {};

  return (
    <div
      id="modal"
      className=" fixed inset-[0] flex justify-center items-center "
    >
      <div className="absolute inset-[0] bg-[#000000]/50"></div>
      <div className="relative w-[981px] h-[564px] bg-white m-auto p-[32px] rounded-[16px]">
        <svg
          className="absolute top-[37px] right-[37px] fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
        <div className="container flex flex-row justify-between gap-[33px]">
          <div className="w-[500px] h-[500px]">
            <img
              className="object-cover w-[500px] h-[500px]"
              src="./images/menu food photos/menu-1.png"
            ></img>
          </div>
          <div className="flex flex-col gap-[32px] justify-center">
            <div className="flex flex-col gap-[2px] w-[384px]">
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
            <div className="flex justify-between">
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
=======
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
>>>>>>> 3384f54fafd92b0f5e1db339727274c5b59d8be7
          </div>
        </div>
      </div>
    </div>
  );
}

