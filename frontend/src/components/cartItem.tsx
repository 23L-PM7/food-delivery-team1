"use client";
import { useEffect, useState } from "react";

import { Xmark } from "./icons/chrom";

type CartProps = {
  item: any;
};

export function CartItem(props: CartProps) {
  const { item } = props;
  const [amount, setAmount] = useState(1);

  const subtract = () => {
    if (amount > 1) {
      setAmount((prevValue) => prevValue - 1);
    }
  };

  const add = () => {
    setAmount((prevValue) => prevValue + 1);
  };
  return (
    <div className="flex gap-5 p-3">
      <img className="rounded" src="/images/pizza.png" />
      <div className="w-full flex flex-col justify-between relative">
        <h1 className="font-bold text-[18px]">{item.name}</h1>
        <button className="absolute right-2">
          <Xmark />
        </button>

        <h1 className="text-green-600 text-[18px]">{item.price}</h1>
        <h3 className="text-gray-500 text-[14px] w-[250px]">
          {item.ingredient}
        </h3>

        <div className="flex gap-3 items-center">
          <button
            onClick={subtract}
            className="btn btn-sm bg-[#18BA51] font-bold text-white text-[21px] rounded-lg w-[45px] h-[40px] "
          >
            -
          </button>
          <h1>{item.amount}</h1>
          <button
            onClick={add}
            className="btn btn-sm bg-[#18BA51] font-bold text-white text-[21px] rounded-lg w-[45px] h-[40px] "
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
