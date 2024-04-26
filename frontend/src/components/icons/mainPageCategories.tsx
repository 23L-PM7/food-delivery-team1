"use client";
import Menu from "@/app/mnde/menu";
import axios from "axios";
import { useEffect, useState } from "react";
import { FoodTemplateMain } from "../foodTemplateMain";
import { GreenStar } from "./greenStar";
import Link from "next/link";
import { RightArrowMainPage } from "./rightArrowMainPage";
import { get } from "http";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export function HymdraltaiFour() {
  const [foods, setFoods] = useState([]);
  const router = useRouter();
  // const [four, setFour] = useState([]);

  // const testRun = () => {
  //   console.log(foods);
  //   console.log(four);
  // };

  const fetchFood = async () => {
    const count = 4;
    try {
      await axios
        .post("http://localhost:9090/foods/custom", {
          count,
        })
        .then((response) => {
          setFoods(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const check = () => {
    console.log(foods);
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-between">
        <div className="w-full flex justify-between">
          {" "}
          <div className="flex gap-2">
            <GreenStar />
            <h1 className="font-bold">Хямдралтай</h1>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="link link-hover text-green-500 hover:text-green-300" onClick={() => router.push("/sale")}>
              Бүгдийг харах
            </div>

            <RightArrowMainPage />
          </div>
        </div>

        <div className="py-10 grid grid-cols-4 gap-6">
          {foods.map((item, index) => (
            <FoodTemplateMain key={1000 - index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TraditionalFood() {
  const [foods, setFoods] = useState([]);
  // const [four, setFour] = useState([]);

  // const testRun = () => {
  //   console.log(foods);
  //   console.log(four);
  // };

  const fetchFood = async () => {
    const count = 4;
    try {
      await axios
        .post("http://localhost:9090/foods/custom", {
          count,
        })
        .then((response) => {
          setFoods(response.data);
        });
    } catch (err) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <div className="flex gap-2">
            <GreenStar />
            <h1 className="font-bold">Үндсэн хоол</h1>
          </div>
          <div className="flex gap-x-2 items-center">
            <Link className="link link-hover text-green-500" href="/home">
              Бүгдийг харах
            </Link>
            <RightArrowMainPage />
          </div>
        </div>
        <div className="py-10 w-full grid grid-cols-4 gap-6">
          {foods.map((item, index) => (
            <FoodTemplateMain key={1000 - index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
