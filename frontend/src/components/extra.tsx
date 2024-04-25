import { useState } from "react";

const FoodInfo = () => {
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
  return (
    <>
      <div className="mt-[40px]" />
      <div className=" flex justify-center gap-[16px] relative py-[24px]">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
          X
        </button>
        <div>
          <img
            className="object-cover w-[245px] h-[150px]"
            src="https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>

        <div className="flex flex-col gap-[8px] ">
          <div className="flex flex-col gap-[2px] w-[245px]">
            <div className="font-semibold  text-[#000000] text-[18px]">
              Торт
            </div>
            <div className="font-semibold text-[18px] text-[#18ba51] mt-[2px]">
              122323 ₮
            </div>
          </div>

          <div className=" p-[8px] font-[400] rounded-[8px] text-[#767676] text-[16px]">
            Хулуу, төмс, давс
          </div>

          <div className="flex flex-start gap-[8px] items-center">
            <button
              className="btn bg-[#18BA51] text-[14px] font-[900] text-[#FFFFFF] w-[45px] h-[40px]"
              onClick={minusFoodQuantity}
            >
              -
            </button>
            <button className="btn bg-white border-none font-[500] text-[16px]">
              {foodQuantity}
            </button>
            <button
              className="btn bg-[#18BA51] text-[14px] font-[900] text-[#FFFFFF] w-[45px] h-[40px]"
              onClick={incementFoodQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div />
    </>
  );
};
