"use client";
import { ReactNode, useState } from "react";

export default function Modal() {
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
      <div>
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
        <Drawer>hi</Drawer>
      </div>
    </div>
  );
}

type DrawerProps = {
  children: ReactNode;
};
const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn bg-[#18BA51] text-[#FFFFFF] drawer-button"
        >
          Сагслах
        </label>
      </div>
      <div className="drawer-side items-end justify-end ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {children}
        </ul>
      </div>
    </div>
  );
};
