"use client";
import { useEffect, useState } from "react";
import { QuickCircle } from "./icons/quickfix";
import { utilFetcher } from "@/util/mainUtility";
import { RightSideContent } from "./amountFoodContent";

export function StepTwo() {
  const [orders, setOrders] = useState([]);

  const fetchOrder = async () => {
    try {
      const data = await utilFetcher("orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  });

  return (
    <li className=" justify-center mb-[80px] lg:gap-1/10 my-10 block lg:flex gap-x-10 mx-auto">
      <main className={`w-[432px] h-[612px]  border-2 p-6  block `}>
        <h1 className="mb-3">Захиалгын түүх</h1>
        <div className="flex flex-col gap-y-2">
          {orders.map((item, index) => (
            <QuickCircle key={1000 - index} item={item} />
          ))}
        </div>
      </main>
      <main className={`w-[432px] h-[612px]  border-2 p-6 block `}>
        <h1 className="mb-3">Захиалгын дэлгэрэнгүй</h1>
        <div>
          {orders.map((item, index) => (
            <RightSideContent key={8888 - index} item={item} />
          ))}
        </div>
      </main>
    </li>
  );
}
