"use client";

import { useState } from "react";
import { UserData } from "./Userpro";
import { Exit, Pencil, Timer } from "../icons/ProfileIcons";

function myFunction() {
  document.getElementById("myDialog").showModal();
  // const myTimeout = setTimeout(myFunction, 5000);
}

export function UserProfile() {
  const [edit, setEdit] = useState("");
  const [Timeout, setTimeout] = useState("");


  return (
    <div className="container mx-auto  w-[432px] px-[20px] mb-[40px]">
      <div className="">
        <div className="avatar flex justify-center relative">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <div className="bg-[#FFFFFF] w-[34px] h-[34px] p-2 border rounded-full absolute bottom-0 right-[135px]">
            <Pencil />
          </div>
        </div>

        <h1 className="flex justify-center font-bold text-[28px] mt-[40px]">
          УгтахБаяр
        </h1>
      </div>

      <div>
        {UserData.map((item) => (
          <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
            <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
              {item.icon}
            </div>
            <div className="w-8/12">
              <h1 className="text-xs text-[#888A99]">{item.title} </h1>
              <h1 className="text-base">{item.name}{item.number}{item.email}</h1>
            </div>
            <div className="w-2/12 justify-end flex">
              {item.icon2}
            </div>
          </div>
        ))}


        {/* <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
            <Call />
          </div>
          <div className="w-8/12">
            <h1 className="text-xs text-[#888A99]">Утасны дугаар</h1>
            <h1 className="text-base">88883345</h1>
          </div>
          <div className="w-2/12 justify-end flex">
            <Pencil />
          </div>
        </div>
        <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
            <Mail />
          </div>
          <div className="w-8/12">
            <h1 className="text-xs text-[#888A99]">Имэйл хаяг</h1>
            <h1 className="text-base">Ugtakhbayr@gmail.com</h1>
          </div>
          <div className="w-2/12 justify-end flex">
            <Pencil />
          </div>
        </div> */}

        <div className=" w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full border">
            <Timer />
          </div>
          <div className="w-8/12">
            <h1 className="text-base ">Захиалгын түүх</h1>
          </div>
        </div>

        <div className=" w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
          <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full border">
            <Exit />
          </div>
          <div className="w-8/12">
            <h1
              className="text-base cursor-pointer"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Гарах
            </h1>
          </div>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box w-[384px] p-0">
            <p className=" font-semibold text-xl p-10 flex flex-col justify-center">
              Та системээс гарахдаа итгэлтэй байна уу?
            </p>
            <div className="modal-action p-0 mt-0 justify-center ">
              <form method="dialog" className="w-full ">
                <a className="btn bg-green-100 hover:bg-green-500 w-6/12" href="http://localhost:3000/login">
                  Тийм
                </a>
                <button className="btn w-6/12 bg-green-100 hover:bg-green-500">
                  Үгүй
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <button
        className="btn w-full bg-green-400 hover:bg-green-600"
        onClick={() => myFunction()}
      >
        Хадгалах
      </button>
      <dialog className="bg-transparent" id="myDialog">
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Мэдээлэл амжилттай хадгалагдлаа</span>
        </div>
      </dialog>
    </div >
  );
}
