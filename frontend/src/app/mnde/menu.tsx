"use client";

import { useState } from "react";
import Basket from "./Modal/basket";
import { SellChip } from "./Sellchip";
import { foodlist } from "./datalist";
import Modal from "./Modal/modal";


function ShowFood() {
  document.getElementById("my_modal_3").showModal();
}

export default function Menu() {
  return (
    <div
      className="grid grid-rows-12 grid-cols-1 sm:grid-rows-6 sm-grid-cols-2 md:grid-rows-6 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 xl:grid-rows-3 xl:grid-cols-4 2xl:grid-rows-3 2xl:grid-cols-4 2xl:gap-x-[24px] 2xl:gap-y-[60px] container mx-auto 2xl:max-w-[1200px]"
      id="my_modal_2"
    >
      {foodlist.map((food) => (
        <div>
          <div className="relative overflow-hidden w-fit">
            <div className="absolute right-6 top-4">
              <SellChip />
            </div>
            <div className="w-[282px] h-[196px] ease-in cursor-pointer">
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
      <dialog id="my_modal_3" className="modal">
        <Modal />
      </dialog>
    </div>
  );
}
