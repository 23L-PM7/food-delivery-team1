"use client";

import { Footer } from "../components/footer/Footer";
import Header from "../components/Header";
import { Mainbutton } from "@/components/herobutton/Mainbutton";
import Menu from "./mnde/menu";
import { Desktop } from "@/components/Desktop";
import {
  HymdraltaiFour,
  TraditionalFood,
} from "@/components/icons/mainPageCategories";
import { Category } from "@/components/category";
import { useEffect, useState } from "react";
import { UserProfile } from "@/app/userprofile/UserProfile";
import { useCategory, useCategories, useFood } from "./globals";
import { utilFetcher } from "@/util/mainUtility";
import { GreenStar } from "@/components/icons/greenStar";
import { Link } from "@mui/material";
import { RightArrowMainPage } from "@/components/icons/rightArrowMainPage";
import { FoodTemplateMain } from "@/components/foodTemplateMain";
import { useRouter } from "next/navigation";

export default function Home() {
  const {categories, setCategories}: any = useCategories();
  const {category, setCategory} : any = useCategory();
  const {foods, setFoods}:any = useFood();
  const router = useRouter();

  const fetchCategory = async () => {
    const data = await utilFetcher("category");
    setCategories(data);
  };

  const fetchFoods = async () => {
    const data = await utilFetcher("foods");
    setFoods(data);
  };

  useEffect(() => {
    fetchCategory();
    fetchFoods();
  }, [categories, foods]);

  return (
    <div>
      <Header />
      {/* <UserProfile /> */}
      <Desktop />
      <Mainbutton />
      <HymdraltaiFour />
      {/* <TraditionalFood /> */}
      {
        categories.map((category: any) => {
          return (
          <>
            <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <div className="flex gap-2">
            <GreenStar />
            <h1 className="font-bold">{category.name}</h1>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="link link-hover text-green-500" onClick={() => {
              setCategory(category._id);
              router.push("/menu");
            }}>
              Бүгдийг харах
            </div>
            <RightArrowMainPage />
          </div>
        </div>
        <div className="py-10 w-full grid grid-cols-4 gap-6">
          {foods.filter((food: any) => food.categoryId._id === category._id).slice(0, 4).map((item: any, index: number) => (
            <FoodTemplateMain key={1000 - index} item={item} />
          ))}
        </div>
      </div>
    </div>
          </>
        )
        })
      }
      <Footer />
    </div>
  );
}
