"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/store/useCart";
import { Xmark } from "./icons/chrom";

type CartProps = {
  item: any;
};

export function CartItem(props: CartProps) {
  const { removeCart, subtractCartItem, addCartItem } = useCart();
  const { item } = props;
  const [amount, setAmount] = useState(item.amount);

  const subtract = async (id: string) => {
    if (amount > 1) {
      setAmount((prevValue: number) => prevValue - 1);
      subtractCartItem(id);
    }
  };

  const add = (id: string) => {
    setAmount((prevValue: number) => prevValue + 1);

    addCartItem(id);
  };

  return (
    <div className="flex gap-5 p-3">
      <img className="rounded" src="/images/pizza.png" />
      <div className="w-full flex flex-col justify-between relative">
        <h1 className="font-bold text-[18px]">{item.name}</h1>
        <button
          onClick={() => removeCart(item.tempId)}
          className="absolute right-2"
        >
          <Xmark />
        </button>

        <h1 className="text-green-600 text-[18px]">{item.price}</h1>
        <h3 className="text-gray-500 text-[14px] w-[250px]">
          {item.ingredient}
        </h3>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => subtract(item.tempId)}
            className="btn btn-sm bg-[#18BA51] font-bold text-white text-[21px] rounded-lg w-[45px] h-[40px] "
          >
            -
          </button>
          <h1>{amount}</h1>
          <button
            onClick={() => add(item.tempId)}
            className="btn btn-sm bg-[#18BA51] font-bold text-white text-[21px] rounded-lg w-[45px] h-[40px] "
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
