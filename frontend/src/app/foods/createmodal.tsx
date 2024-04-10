"use client";
import axios from "axios";
import Modal from "../mnde/Modal/modal";
import { SellChip } from "../mnde/Sellchip";
import ShowModal from "./showmodal";
import { useEffect, useState } from "react";
import { foodlist } from "../mnde/datalist";
import { Button } from "@mui/material";

export default function FoodMap() {
  return (
    <div
      className="grid grid-rows-12 grid-cols-1 sm:grid-rows-6 sm-grid-cols-2 md:grid-rows-6 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 xl:grid-rows-3 xl:grid-cols-4 2xl:grid-rows-3 2xl:grid-cols-4 2xl:gap-x-[24px] 2xl:gap-y-[60px] container mx-auto 2xl:max-w-[1200px]"
      id="my_modal_2"
    >
      <FoodCard />
    </div>
  );
}

export const FoodCard = () => {
  const [getfoods, setGetFoods] = useState([]);
  const fetchFoods = async () => {
    await axios.get("http://localhost:9090/foods").then((response) => {
      setGetFoods(response.data);
    });
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <>
      {getfoods.map((item: any) => (
        <div>
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
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="absolute bg-green-200 hidden group-hover:bg-white group-hover:inline-block z-10 w-30 inset-20  justify-center rounded-box "
                >
                  {" "}
                  Edit
                </button>
              </div>
            </main>
          </div>
          <div className="flex flex-col mt-[14px]">
            <h1 className="font-semibold text-lg">{item.name}</h1>

            <div className="flex gap-2">
              <p className="font-semibold text-lg text-green-600">
                {item.price}
              </p>

              <p className="font-semibold text-lg line-through ">
                {item.saleprice}
              </p>
            </div>
          </div>
          <dialog id="my_modal_4" className="modal ">
            <ShowModal />
          </dialog>
        </div>
      ))}
    </>
  );
};
