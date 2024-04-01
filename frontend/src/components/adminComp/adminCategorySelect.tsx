"use client";
import { useState } from "react";
import {
  GreyAdd,
  TripleDot,
  TripleDotBlack,
  TripleDotWhite,
} from "../icons/tripledot";
import { Pen } from "../icons/pen";
import { Trash } from "../icons/trash";

export function SideCategory() {
  const [selected, setSelected] = useState("Breakfast");

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

  const selectCategory = (name: string) => {
    setSelected(name);
  };

  return (
    <>
      {category.map((item, index) => (
        <div
          style={{
            zIndex: 100 - index,
            backgroundColor: selected === item.name ? "#18BA51" : "",
            color: selected === item.name ? "white" : "",
          }}
          className={`h-[40px] relative border rounded-xl flex items-center px-3 justify-between drop-shadow-md`}
          onClick={() => selectCategory(item.name)}
        >
          <h3 className="text-lg font-medium">{item.name}</h3>
          <div className="dropdown dropdown-end z-10">
            <button tabIndex={0} role="button" className="m-1">
              {selected === item.name ? <TripleDotWhite /> : <TripleDotBlack />}
            </button>
            <ul
              tabIndex={0}
              className="absolute dropdown-content z-10 menu p-2 shadow bg-white rounded-md w-52 text-black"
            >
              <li>
                <button className="flex justify-start">
                  <Pen />
                  Edit name
                </button>
              </li>
              <li>
                <button className="text-red-500 flex justify-start">
                  <Trash />
                  Delete category
                </button>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
