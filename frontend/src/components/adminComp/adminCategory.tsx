"use client";
import { useState } from "react";
import {
  GreyAdd,
  TripleDot,
  TripleDotBlack,
  TripleDotWhite,
} from "../icons/tripledot";

export function AdminCategory() {
  const [color, setColor] = useState("Black");
  const [openModal, setOpenModal] = useState("");

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

  const openCategoryModal = () => {
    if (openModal == "") {
      setOpenModal("modal-open");
    } else {
      setOpenModal("");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="w-full container flex mx-auto">
        {/* categories */}
        <div className="w-[28%] flex flex-col gap-y-5 pl-1 bg-white pt-4">
          {/* Food Menu */}
          <div className="w-[258px]">
            <h2 className="text-xl font-bold">Food Menu</h2>
          </div>
          {/* category mapped */}
          <div className="w-[258px] flex flex-col gap-y-5">
            {category.map((item, index) => (
              <div
                style={{ zIndex: 100 - index }}
                className="h-[40px] relative active:bg-green-500 active:text-white border rounded-md flex items-center px-3 justify-between drop-shadow-md"
              >
                <h3 className="text-lg font-medium">{item.name}</h3>
                <div className="dropdown dropdown-end z-10">
                  <button tabIndex={0} role="button" className="m-1">
                    <TripleDotBlack />
                  </button>
                  <ul
                    tabIndex={0}
                    className="absolute dropdown-content z-10 menu p-2 shadow bg-white rounded-box w-52"
                  >
                    <li>
                      <a>Edit</a>
                    </li>
                    <li>
                      <a>Delete</a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
            <button onClick={openCategoryModal}>
              <div className="btn btn-sm bg-white h-[40px] flex">
                <GreyAdd />
                <h1 className="text-gray-500">Create new Category</h1>
              </div>
            </button>
          </div>
        </div>
        {/* second half */}
        <div className="w-full bg-gray-100">
          {/* title with button */}
          <div className="flex justify-between h-[67px] items-center pl-5">
            <h2 className="text-xl font-bold">Breakfast</h2>
            <button className="btn btn-sm bg-green-500 text-white hover:bg-green-400 h-[35px]">
              Add new food
            </button>
          </div>
          {/* food content */}
        </div>
      </div>
      {/* modal */}
      <dialog id="create_category" className={`modal ${openModal}`}>
        <div className="modal-box p-0">
          <div className="flex w-full justify-between items-center p-4 border-b-[1px]">
            <h1 className="text-xl font-bold">X</h1>
            <h1 className="text-2xl font-semibold">Create New Category</h1>
            <h1 className="text-xl font-bold text-white">x</h1>
          </div>
          <div className="flex flex-col p-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category Name</span>
              </div>
              <input
                type="text"
                placeholder="Category Name"
                className="input input-bordered w-full bg-gray-200"
              />
            </label>
          </div>
          <div className="flex justify-end p-4 gap-3">
            <button
              onClick={openCategoryModal}
              className="btn btn-sm h-[40px] btn-outline"
            >
              Cancel
            </button>
            <button className="btn btn-sm h-[40px] btn-neutral text-white">
              Continue
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={openCategoryModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}
