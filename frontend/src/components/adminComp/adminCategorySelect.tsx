"use client";
import { useEffect, useState } from "react";
import {
  GreyAdd,
  TripleDot,
  TripleDotBlack,
  TripleDotWhite,
} from "../icons/tripledot";
import { Pen } from "../icons/pen";
import axios from "axios";
import { Trash } from "../icons/trash";

type ChildProps = {
  zindex: number;
  label: string;
  id: string;
  fetchCat: () => void;
};

export function SideCategory(props: ChildProps) {
  const { zindex, label, id, fetchCat } = props;
  const [selected, setSelected] = useState(false);
  const [openEdit, setEdit] = useState(false);
  const [updatedName, setUpdatedName] = useState("");

  const openEditModal = () => {
    setEdit(!openEdit);
    setUpdatedName(label);
  };

  const selectCategory = () => {
    setSelected(!selected);
  };

  const deleteCategory = async (id: string) => {
    await axios.delete(`http://localhost:9090/category/delete/${id}`);
    fetchCat();
  };

  const updateCategory = async (id: string) => {
    await axios
      .put(`http://localhost:9090/category/update/${id}`, {
        updatedName,
      })
      .then(() => {
        setUpdatedName("");
      });
    fetchCat();
    setEdit(false);
  };

  const changeUpdatedName = (event: any) => {
    setUpdatedName(event.target.value);
  };

  const clearSpace = () => {
    setUpdatedName("");
  };

  return (
    <>
      <div
        style={{
          zIndex: zindex,
          backgroundColor: selected ? "#18BA51" : "",
          color: selected ? "white" : "",
        }}
        className={`h-[40px] relative border rounded-xl flex items-center px-3 justify-between drop-shadow-md`}
      >
        <h3
          onClick={() => selectCategory()}
          className="cursor-pointer text-lg font-medium"
        >
          {label}
        </h3>
        <div className="dropdown dropdown-end z-10">
          <button tabIndex={0} role="button" className="m-1">
            {selected ? <TripleDotWhite /> : <TripleDotBlack />}
          </button>
          <ul
            tabIndex={0}
            className="absolute dropdown-content z-10 menu p-2 shadow bg-white rounded-md w-52 text-black"
          >
            <li>
              <button
                className="flex justify-start"
                onClick={() => openEditModal()}
              >
                <Pen />
                Edit name
              </button>
            </li>
            <li>
              <button
                onClick={() => deleteCategory(id)}
                className="text-red-500 flex justify-start"
              >
                <Trash />
                Delete category
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* modal create */}

      {/* modal edit */}
      <dialog
        id="create_category"
        className={`modal ${openEdit ? "modal-open" : ""}`}
      >
        <div className="modal-box p-0">
          <div className="flex w-full justify-between items-center p-4 border-b-[1px]">
            <button onClick={openEditModal} className="text-xl font-bold">
              X
            </button>
            <h1 className="text-2xl font-semibold">Edit Category</h1>

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
                value={updatedName}
                onChange={changeUpdatedName}
              />
            </label>
          </div>
          <div className="flex justify-end p-4 gap-3">
            <button
              onClick={clearSpace}
              className="btn btn-sm h-[40px] btn-outline"
            >
              Clear
            </button>
            <button
              onClick={() => updateCategory(id)}
              className="btn btn-sm h-[40px] btn-neutral text-white"
            >
              Edit
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={openEditModal}>close</button>
        </form>
      </dialog>
    </>
  );
}
