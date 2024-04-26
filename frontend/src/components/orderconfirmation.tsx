"use client";

import { useEffect, useState } from "react";
import * as React from "react";

import Checkbox from "@mui/material/Checkbox";

import { locations, district, horoo } from "../data/data";
import { StepTwo } from "./stepTwo";
import { OrderMainTemplate } from "./orderConfirmMain";
import { useCart } from "@/store/useCart";
import { CircleSelect } from "./icons/circleSelect";

function OrderCon() {
  const [districtId, setDistrictId] = useState("");
  const [microDistrictId, setMicroDistrictid] = useState("");
  const [street, setStreet] = useState("");
  const [houseLocation, setHouseLocation] = useState("");
  const [phone, setPhone] = useState("");

  const [step, setStep] = useState(1);
  const [allDone, setAllDone] = useState("btn-disabled");
  const [wait, setWait] = useState("Хүлээгдэж байна");
  const [icon, setIcon] = useState("flex");
  const [green, setGreen] = useState("hidden");

  const { cart } = useCart();

  useEffect(() => {
    checkFields();
  });

  const handleNextStop = () => {
    setStep(step + 1);
  };

  if (step === 3) {
    return (
      <div>
        <StepTwo />
      </div>
    );
  }

  function checkFields() {
    if (
      districtId == null ||
      districtId == "" ||
      microDistrictId == null ||
      microDistrictId == "" ||
      street == null ||
      street == "" ||
      houseLocation == null ||
      houseLocation == "" ||
      phone == null ||
      phone == ""
    ) {
      setAllDone("btn-disabled");
      setWait("Хүлээгдэж байна");
      setIcon("flex");
      setGreen("hidden");
    } else {
      setAllDone("");
      setWait("Оруулсан");
      setIcon("hidden");
      setGreen("flex");
    }
  }

  return (
    <main>
      {" "}
      <div
        className={`block md:flex justify-center mb-[80px] md:gap-40 mx-auto relative`}
      >
        <main className=" block rounded-xl">
          <div className="flex gap-2 px-4 py-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`flex ${icon} `}
            >
              <circle cx="24" cy="24" r="23.5" stroke="#0468C8" />
              <circle cx="24" cy="24" r="12" fill="#0468C8" />
            </svg>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`flex ${green} `}
            >
              <circle cx="24" cy="24" r="24" fill="#18BA51" />
              <mask
                id="mask0_1_1728"
                maskUnits="userSpaceOnUse"
                x="12"
                y="12"
                width="24"
                height="24"
              >
                <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_1728)">
                <path
                  d="M21.5496 29.9996L15.8496 24.2996L17.2746 22.8746L21.5496 27.1496L30.7246 17.9746L32.1496 19.3996L21.5496 29.9996Z"
                  fill="white"
                />
              </g>
            </svg>

            <div className="block">
              <h5>Алхам 1</h5>
              <h1>Захиалга баталгаажуулах</h1>
              <option>{wait}</option>
            </div>
          </div>
          <main className="w-[432px] h-[612px] block border-[1px] rounded-xl shadow-md  p-6 gap-4 ">
            <div className="gap-4">
              Хаяг аа оруулна уу
              <select
                value={districtId}
                onChange={(e) => setDistrictId(e.target.value)}
                className={`${
                  districtId ? "bg-green-500 text-white" : ""
                } select select-ghost max-w-xs w-[384px] h-12 bg-[#ECEDF0]`}
              >
                {locations.map((horoo) => (
                  <option> {horoo.title}</option>
                ))}
              </select>
            </div>
            <div className="py-4">
              <select
                onChange={(e) => setMicroDistrictid(e.target.value)}
                value={microDistrictId}
                className={` ${
                  microDistrictId ? "bg-green-500 text-white" : ""
                } select select-ghost w-[384px] h-12 max-w-xs bg-[#ECEDF0]`}
              >
                {district.map((horoolol) => (
                  <option selected>{horoolol.title}</option>
                ))}
              </select>
            </div>
            <div className="mb-8 w-[420px] h-12">
              <select
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                className={` ${
                  street ? "bg-green-500 text-white" : ""
                }  w-96 h-12 select select-ghost]  max-w-xs bg-[#ECEDF0]`}
              >
                {horoo.map((house) => (
                  <option>{house.title}</option>
                ))}
              </select>
            </div>
            <label className={` form-control`}>
              <div className="label">
                <span className="label-text">Нэмэлт мэдээлэл</span>
                <span className="label-text-alt"></span>
              </div>
              <textarea
                onChange={(e) => setHouseLocation(e.target.value)}
                value={houseLocation}
                className={` ${houseLocation} textarea textarea-bordered h-24 bg-[#ECEDF0]`}
                placeholder="Орц, давхар, орцны код ..."
              ></textarea>
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Утасны дугаар*</span>
                <span className="label-text-alt"></span>
              </div>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={` ${phone} input input-bordered w-full max-w-xs bg-[#ECEDF0]`}
                type="number"
                placeholder="Утасны дугаараа оруулна уу"
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
              </div>
            </label>
            <p>Төлбөр төлөх</p>
            <div className="flex">
              <div className="block">
                <span>
                  <Checkbox color="default" />
                </span>
                <span className="label-text justify-start">Бэлнээр </span>
              </div>
              <div className="block">
                <span>
                  <Checkbox defaultChecked color="default" />
                </span>
                <span className="label-text justify-end">Картаар</span>
              </div>
            </div>
          </main>
        </main>
        <main className="block">
          <CircleSelect />
          <div className="w-[432px] h-[612px] border-[1px] rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div className="overflow-scroll">
              {cart.cartItems.map((item) => (
                <OrderMainTemplate item={item} />
              ))}
            </div>

            <div className="flex w-[384px] h-[54px] justify-between">
              <div>
                <h1>
                  <u>Нийт төлөх дүн</u>
                </h1>
                <h1 className="font-bold text-green-600">
                  {cart.totalAmount}₮
                </h1>
              </div>

              <button
                onClick={handleNextStop}
                className={`px-2 py-3 w-[187px] h-[47px] btn hover:bg-green-500 bg-green-600 text-white text-center ${allDone} `}
              >
                Захиалах
              </button>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
export default OrderCon;
