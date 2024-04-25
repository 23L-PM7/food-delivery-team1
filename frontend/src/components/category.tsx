"use client";

import { useCategories, useCategory } from "@/app/globals";
import { utilFetcher } from "@/util/mainUtility";
import axios from "axios";

import { useEffect, useState } from "react";
import { create } from "zustand";

export function Category() {
  // const [categories, setCategories] = useState([]);
  const { category, setCategory }: any = useCategory();
  const { categories, setCategories }: any = useCategories();

  const fetchCategory = async () => {
    await axios.get("http://localhost:9090/category").then((response) => {
      setCategory(response.data);
    });
    const data = await utilFetcher("category");
    setCategories(data);
    console.log("mm", data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleClick = (id: string) => {
    if (category === id) {
      setCategory("");
    } else {
      setCategory(id);
    }
  };

  return (
    <div className="max-w-[1200px] container mx-auto mt-[32px] mb-[86px]">
      <div className="w-full flex justify-between gap-x-[26px]">
        {categories.map((item: any) => (
          <button
            key={item._id}
            className={`btn w-[280px] h-[43px] outline-slate-200 text-black hover:bg-green-500 hover:text-white ${
              category === item._id ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
