"use client";
import axios from "axios";
import { SellChip } from "../mnde/Sellchip";
import { useEffect, useState } from "react";

import { FoodsCardModal } from "./FoodsCardModal";

type Props = {
  fetchFoods: () => void;
  food: any;
};

export const FoodCard = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { fetchFoods, food } = props;

  const deleteButton = () => {
    deleteFoods();
    fetchFoods();
  };

  const deleteFoods = async () => {
    await axios.delete(`http://localhost:9090/foods/delete/${food._id}`),
      {
        food,
      };
  };

  return (
    <div>
      <>
        <div className="relative overflow-hidden w-fit  ">
          <main className="group">
            <button
              className="absolute bg-green-200 hidden group-hover:bg-white group-hover:inline-block z-10  justify-center rounded-box  w-fit btn btn-xs"
              onClick={deleteButton}
            >
              delete
            </button>
            <div className="absolute z-10 right-6 top-4 inline group-hover:hidden">
              <SellChip />
            </div>
            <div className="w-[282px] h-[196px] ease-in cursor-pointer group">
              <img
                className="rounded-lg relative  "
                src="https://media.istockphoto.com/id/1690090007/photo/a-cropped-image-of-a-womans-hand-holding-a-piece-of-toasted-bread-with-scrambled-eggs-on-top.jpg?s=2048x2048&w=is&k=20&c=KYa9toFXQyJ_pWcikPGQ6qxHl127RRM7txLFfDv5SMM="
              />
              <button
                onClick={() => setOpen(true)}
                className="absolute bg-green-200 hidden group-hover:bg-white group-hover:inline-block z-10 w-30 inset-20  justify-center rounded-box "
              >
                {" "}
                Edit
              </button>
            </div>
          </main>
        </div>
        <div className="flex flex-col mt-[14px]">
          <h1 className="font-semibold text-lg">{food.name}</h1>

          <div className="flex gap-2">
            <p className="font-semibold text-lg text-green-600">
              {food.price + ""}
            </p>

            <p className="font-semibold text-lg line-through ">
              {food.saleprice}
            </p>
          </div>
        </div>
      </>

      {open && (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
          <FoodsCardModal
            food={food}
            key={food._id}
            onClick={() => setOpen(false)}
          />
          {/* <button
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 "
            onClick={() => setOpen(false)}
          >
            X
          </button> */}
        </dialog>
      )}
    </div>
  );
};
