"use client";
import { useState } from "react";
import { GreyAdd, GreenPlus } from "../icons/tripledot";
import { SideCategory } from "./adminCategorySelect";
import { categoryMutator } from "@/util/categoryFetcher";
import { categoryFetcher } from "@/util/categoryFetcher";
import axios from "axios";

export function AdminCategory() {
  const [openCreate, setOpenCreate] = useState(false);
  // const [category, setCategory] = useState([])
  const [name, setName] = useState("");

  const openCreateModal = () => {
    setOpenCreate(!openCreate);
    setName("");
  };

  const createCategory = async () => {
    console.log(name);

    // const data = await categoryMutator("category", { name });
    await axios
      .post("http://localhost:9090/category", {
        name,
      })
      .then(() => {
        setName("");
        setOpenCreate(!openCreate);
      });
  };

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

  const clearField = () => {
    setName("");
  };

  return (
    <div className="">
      <div className="w-full container flex mx-auto">
        {/* categories */}
        <div className="w-[30%] h-screen flex flex-col items-center gap-y-5 pl-1 bg-white pt-4 border rounded-xl">
          {/* Food Menu */}
          <div className="w-[258px]">
            <h2 className="text-xl font-bold">Food Menu</h2>
          </div>
          {/* category mapped */}
          <div className="w-[258px] flex flex-col gap-y-5">
            {category.map((item, index) => (
              <SideCategory
                zindex={100 - index}
                label={item.name}
                id={item.id}
              />
            ))}
            <button onClick={openCreateModal}>
              <div className="btn btn-sm bg-white h-[40px] flex">
                <GreyAdd />
                <h1 className="text-gray-500">Create new Category</h1>
              </div>
            </button>
          </div>
        </div>
        {/* second half */}
        <div className="h-full w-full">
          {/* title with button */}
          <div className="flex justify-between h-[67px] items-center pl-5">
            <h2 className="text-xl font-bold">Breakfast</h2>
            <button className="btn btn-sm bg-green-500 text-white hover:bg-green-400 h-[35px]">
              Add new food
            </button>
          </div>
          {/* food content */}
          <div className="w-full h-full flex flex-col items-center pt-[50px] gap-5">
            <GreenPlus />

            <h1 className="text-gray-400">
              Уучлаарай, Таны меню хоосон байна.
            </h1>
          </div>
        </div>
      </div>
      {/* modal for creation */}
      <dialog
        id="create_category"
        className={`modal ${openCreate ? "modal-open" : ""}`}
      >
        <div className="modal-box p-0">
          <div className="flex w-full justify-between items-center p-4 border-b-[1px]">
            <button onClick={openCreateModal} className="text-xl font-bold">
              X
            </button>
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
                value={name}
                placeholder="Category Name"
                className="input input-bordered w-full bg-gray-200"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-end p-4 gap-3">
            <button
              onClick={clearField}
              className="btn btn-sm h-[40px] btn-outline"
            >
              Clear
            </button>
            <button
              onClick={createCategory}
              className="btn btn-sm h-[40px] btn-neutral text-white"
            >
              Create
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={openCreateModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}

// const Category = ({ name }) => {

//   const modal = () => <div>modal</div>;
//   return (
//     <div>
//       {name}
//       <modal />
//     </div>
//   );
// };

// <Category name="food">
// <Category name="food">
