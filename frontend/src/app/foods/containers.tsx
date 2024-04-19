"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

type ChildProps = {
  openTheModal: () => void;
  fetchFoods: () => void;
};

export function Containers(props: ChildProps) {
  const { openTheModal, fetchFoods } = props;
  const [name, setFoodName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [saleprice, setSalePrice] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [selectedCategoryOption, setSelectedCategoryOption] = useState<any>();

  console.log({ selectedCategoryOption });

  const combined = () => {
    fetchFoods();
    createFoods();
  };

  const fetchCategory = async () => {
    await axios.get("http://localhost:9090/category").then((response) => {
      setCategory(response.data);
    });
  };

  const options = category.map((category: any) => {
    return {
      value: category._id,
      label: category.name,
    };
  });

  useEffect(() => {
    fetchCategory();
  }, []);

  const createFoods = async () => {
    setCategoryId(selectedCategoryOption.value);
    const userId = "66224b6f98e6eb965ffc9027";
    console.log(name);
    if (name == "" || name == null) {
    } else {
      await axios
        .post("http://localhost:9090/foods/create", {
          name,
          ingredient,
          price,
          saleprice,
          categoryId,
          userId,
        })
        .then(() => {
          setFoodName("");
          setIngredient("");
          setPrice("");
          setSalePrice("");
          setSelectedCategoryOption("");
        });
    }
  };

  return (
    <div className="w-[587px] bg-white mx-auto m-5 border rounded-2xl">
      <div className="flex justify-between">
        <button onClick={openTheModal} className="p-5 text-gray-900 font-bold">
          X
        </button>
        <div className="flex h-[64px]  justify-center border-b border-gray-200">
          <div className="w-[10%] flex items-center justify-center text-2xl "></div>
          <div className="w-[80%] flex justify-center items-center">
            <h1 className="font-bold text-2xl w-60">Create food</h1>
          </div>
        </div>
        {/* just for centering the main title CREATE FOOD */}
        <div className="w-[10%]">
          <h1 className="font-bold text-white">x</h1>
        </div>
        {/*  */}
      </div>
      <div className="flex flex-col gap-y-3 p-5">
        <h1>Хоолны нэр</h1>
        <input
          type="text"
          placeholder="Хоолны нэр"
          className="input h-[45px] border-none input-bordered input-lg w-full bg-gray-200"
          value={name}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <h1>Хоолны ангилал</h1>
        <Select
          instanceId="1234567" //eniig ustgaj bolku ju :,)
          options={options}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : "black",
              backgroundColor: "rgb(229 231 235)",
              height: "45px",
            }),
          }}
          value={selectedCategoryOption}
          onChange={(value) => setSelectedCategoryOption(value)}
        />
        <h1>Хоолны орц</h1>
        <input
          type="text"
          placeholder="Хоолны орц"
          className="input h-[45px] border-none input-bordered input-lg w-full bg-gray-200"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <h1>Хоолны үнэ</h1>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Хоолны үнэ"
          className="input h-[45px] border-none input-bordered input-lg w-full bg-gray-200"
        />
        <div className="flex gap-2 ">
          <input type="checkbox" className="toggle" />
          <h1>Хямдралтай эсэх</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Хямдралтай эсэх"
            className="input h-[45px] border-none input-bordered input-lg w-full bg-gray-200"
            value={saleprice}
            onChange={(e) => setSalePrice(e.target.value)}
          />

          <h1 className="py-3">Хоолны зураг</h1>
          <div className="bg-gray-100 rounded-xl w-[284px] h-[122px] gap-3 flex flex-col items-center justify-center">
            <h1 className="font-bold text-zinc-700">Add image for the food</h1>
            <button className=" w-[114px] h-[40px] btn bg-zinc-700 text-white">
              <input type="file" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[88px] justify-end items-center gap-5 pr-5 border-t-[1px]">
        <button className="btn w-[109px]  h-[40px] bg-white text-zinc-800">
          Clear
        </button>
        <button
          onClick={combined}
          className="btn w-[109px] h-[40px] bg-zinc-700 text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
