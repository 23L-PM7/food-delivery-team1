"use client";
import { useState } from "react";
import { TripleDot, TripleDotBlack, TripleDotWhite } from "../icons/tripledot";

export function AdminCategory() {
  const [color, setColor] = useState("Black");

  const category = [
    {
      name: "Breakfast",
      id: 123,
    },
    { name: "Lunch", id: 124 },
    {
      name: "Dinner",
      id: 125,
    },
    { name: "Dessert", id: 126 },
  ];

  return (
    <div className="bg-gray-100">
      <div className="w-full container flex mx-auto">
        {/* categories */}
        <div className="w-[28%] flex flex-col gap-y-5 pl-1 bg-white">
          {/* Food Menu */}
          <div className="w-[258px]">
            <h2 className="text-xl font-bold">Food Menu</h2>
          </div>
          {/* category mapped */}
          <div className="w-[258px] flex flex-col gap-y-5">
            {category.map((item) => (
              <div className="h-[40px] active:bg-green-500 active:text-white border rounded-md flex items-center px-3 justify-between drop-shadow-md">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <button>
                  <TripleDotBlack />
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* second half */}
        <div className="w-full bg-gray-100">
          {/* title with button */}
          <div className="flex justify-between h-[67px] items-center">
            <h2 className="text-xl font-bold">Breakfast</h2>
            <button className="btn btn-sm bg-green-500 text-white hover:bg-green-400 h-[35px]">
              Add new food
            </button>
          </div>
          {/* food content */}
        </div>
      </div>
    </div>
  );
}
