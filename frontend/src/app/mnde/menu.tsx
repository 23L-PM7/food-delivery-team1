"use client";

import { Children, ReactNode, useEffect, useState } from "react";
import { SellChip } from "./Sellchip";
import axios from "axios";
import { utilFetcher } from "@/util/mainUtility";
import { useCategory, useFood } from "../globals";

export default function Menu() {
  // const [foods, setFoods] = useState([]);
  const {category, setCategory}: any = useCategory();
  const {foods, setFoods}: any = useFood();
  const fetchFoods = async () => {
    try {
      const data: any = await utilFetcher("foods");
      console.log("shalgah",data);
      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const check = () => {
    console.log(foods);
  };

  return (
    <div
      className="sm:mx-auto container mx-auto items-center inset-1  mb-[82px] flex flex-col justify-center sm:grid sm:grid-cols-2 sm:gap-x-[24px] sm:gap-y-[60px] lg:grid-cols-3 xl:grid-cols-4 2xl:max-w-[1200px]"
      id="my_modal_2"
    >
      {/* {foods.filter((food: any) => food.categoryId._id === category).map((food:any) => (
        <FoodCard key={food._id} {...food} />
      ))} */}
      {
        category === "" ? foods.map((food:any) => (
          <FoodCard key={food._id} {...food} />
        )) : foods.filter((food: any) => food.categoryId._id === category).map((food:any) => (
          <FoodCard key={food._id} {...food} />
        ))
      }
    </div>
  );
}

type FoodCardProps = {
  id: number;
  image: string;
  name: string;
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

  const { id, image, name, price, saleprice } = props;

  return (
    <>
      <div>
        <div className="relative overflow-hidden w-fit">
          <div className="-z-10 absolute right-6 top-4">
            <SellChip {...props} />
          </div>
          <div
            onClick={() => setMenuOpen(true)}
            className="w-[282px] h-[196px] ease-in cursor-pointer"
          >
            <img
              className="object-fill rounded-lg absolute -z-20"
              src={image}
            ></img>
          </div>
        </div>
        <div className="flex flex-col mt-[14px]">
          <h1 className="font-semibold text-lg">{name}</h1>
          <div className="flex gap-2">
            <p className="font-semibold text-lg text-green-600">{saleprice}₮</p>
            <p className="font-semibold text-lg line-through ">{price}₮</p>
          </div>
        </div>
        <dialog className={`modal ${menuOpen ? "modal-open" : ""}`}>
          <div
            className="absolute inset-[0]"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="flex flex-col justify-center container mx-auto bg-white rounded-2xl relative h-[564px] w-[365px] p-[10px] gap-[5px] sm:gap-[20px] sm:p-[20px] sm:flex-row sm:w-[640px] md:w-[750px] md:p-[32px] md:gap-[33px] lg:w-[981px]">
            <img
              className="mx-auto object-cover w-[365px] h-[300px] sm:h-[500px] sm:w-[300px] md:w-[400px] lg:w-[500px] "
              src="https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>

            <div className="flex flex-col justify-center gap-[5px] lg:gap-[32px]">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 lg:right-4 lg:top-4"
                onClick={() => setMenuOpen(false)}
              >
                X
              </button>
              <div className="flex flex-col gap-[2px] sm:w-[280px] lg:w-[384px]">
                <div className="text-[#000000] font-semibold text-base md:text-xl">
                  Торт
                </div>
                <div className="text-[#18ba51] font-semibold text-base md:text-lg lg:mt-[2px]">
                  122323 ₮
                </div>
              </div>
              <div className="flex flex-col lg:gap-[2px]">
                <div className="text-[#000000] font-semibold text-base md:text-lg">
                  Орц
                </div>
                <div className="bg-[#F6F6F6] rounded-[8px] text-[#767676] lg:p-[8px] ">
                  Хулуу, төмс, давс
                </div>
              </div>
              <div className="text-[#000000] font-semibold text-base md:text-lg">
                Тоо
              </div>
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
