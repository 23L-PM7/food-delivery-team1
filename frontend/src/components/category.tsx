"use client";

import { utilFetcher } from "@/util/mainUtility";
import axios from "axios";

import { useEffect, useState } from "react";

export function Category() {
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    // await axios.get("http://localhost:9090/category").then((response) => {
    //   setCategory(response.data);
    // });
    const data = await utilFetcher("category");
    setCategory(data);
    console.log("mm",data);
    
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="max-w-[1200px] container mx-auto mt-[32px] mb-[86px]">
      <div className="w-full flex justify-between gap-x-[26px]">
        {category.map((item: any) => (
          <button className="btn w-[280px] h-[43px] outline-slate-200 text-black hover:bg-green-500 hover:text-white bg-transparent">
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
