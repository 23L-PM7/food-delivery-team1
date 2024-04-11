"use client";
import axios from "axios";
import { SellChip } from "../mnde/Sellchip";
import ShowModal from "./showmodal";
import { useEffect, useState } from "react";

type MapProps = {
  foods: any;
};

export default function FoodMap({ foods }: MapProps) {
  const [getfoods, setGetFoods] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchFoods = async () => {
    await axios.get("http://localhost:9090/foods").then((response) => {
      setGetFoods(response.data);
    });
  };
  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div>
      {getfoods.map((foods: any) => (
        <>
          <div className="relative overflow-hidden w-fit  ">
            <main className="">
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
            <h1 className="font-semibold text-lg">{foods.name}</h1>

            <div className="flex gap-2">
              <p className="font-semibold text-lg text-green-600">
                {foods.price}
              </p>

              <p className="font-semibold text-lg line-through ">
                {foods.saleprice}
              </p>
            </div>
          </div>
        </>
      ))}

      <dialog className={`modal ${open ? "modal-open" : ""}`}>
        <ShowModal food={foods} />
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 "
          onClick={() => setOpen(false)}
        >
          X
        </button>
      </dialog>
    </div>
  );
}
