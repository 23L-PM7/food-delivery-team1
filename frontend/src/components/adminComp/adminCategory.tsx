"use client";
import { useState } from "react";
import { TripleDot, TripleDotBlack, TripleDotWhite } from "../icons/tripledot";

export function AdminCategory() {
  const [color, setColor] = useState("Black");

  const category = [
    {
      name: "Breakfast",
    },
    { name: "Lunch" },
    {
      name: "Dinner",
    },
    { name: "Dessert" },
  ];

  return (
    <div className="w-full flex container mx-auto">
      {/* categories */}
      <div className="w-[28%] flex flex-col gap-y-5 pl-1">
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
      <div className="w-[72%] bg-gray-100">
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
  );
}

const childs = [
  {
    item: 1,
    id: "1238123",
  },
  {
    item: 2,
    id: "1238123",
  },
];

const Parent = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleSelectItem = (item: number) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {childs.map((child) => {
        return (
          <Child
            key={child.id}
            isSelected={child.item === selectedItem}
            onClick={() => handleSelectItem(child.item)}
          />
        );
      })}
    </div>
  );
};

type ChildProps = {
  isSelected: boolean;
  onClick: () => void;
};

const Child = (props: ChildProps) => {
  const { isSelected, onClick } = props;

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isSelected ? "red" : "blue",
      }}
    >
      child
    </div>
  );
};
