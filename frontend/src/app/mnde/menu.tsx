"use client";


import { useState } from "react";
import Basket from "./Modal/basket";
import { SellChip } from "./Sellchip";
import { foodlist } from "./datalist";
import { Food } from "@/components/icons/HeroCard";
import { Modal } from "./Modal/modal";

function ShowFood() {
    document.getElementById('my_modal_3').showModal()
}


export default function Menu() {

    return (
        <div className="grid grid-rows-3 grid-cols-4 gap-x-[24px] gap-y-[60px] container mx-auto max-w-[1200px]">
            {foodlist.map((food) => (
                <div>
                    <div className="relative overflow-hidden w-fit">
                        <div className="absolute right-6 top-4">
                            <SellChip />
                        </div>
                        <div className="w-[282px] h-[196px] ease-in">
                            <img className="object-fill rounded-lg" onClick={() => ShowFood()} src={food.img}></img>
                        </div>
                    </div>
                    <div className="flex flex-col mt-[14px]">
                        <h1 className="font-semibold text-lg">{food.tittle}</h1>
                        <div className="flex gap-2">
                            <p className="font-semibold text-lg text-green-600">{food.price}₮</p>
                            <p className="font-semibold text-lg line-through ">{food.saleprice}₮</p>
                        </div>
                    </div>
                </div>
            ))}
            <div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <Modal />
            </dialog>
        </div>

    );
}
