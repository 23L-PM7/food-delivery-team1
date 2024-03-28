"use client";

import { useEffect, useState } from "react";
import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { useAccordionButton } from "react-bootstrap";
import { Mainbutton } from "./Mainbutton";

function OrderCon() {
  const [districtId, setDistrictId] = useState("");
  const [microDistrictId, setMicroDistrictid] = useState("");
  const [street, setStreet] = useState("");
  const [houseLocation, setHouseLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [radio, setRadio] = useState("");
  const [toggle, setToggle] = useState("");
  const [allDone, setAllDone] = useState("btn-disabled");
  const [wait, setWait] = useState("Хүлээгдэж байна");
  const [icon, setIcon] = useState("flex");
  const [green, setGreen] = useState("hidden");
  const [mainhidden, setMainHidden] = useState("flex");
  const [alert, setAlert] = useState("hidden");
  const [newmain, setNewMain] = useState("hidden");

  useEffect(() => {
    checkFields();
  });
  function alertOnclick() {
    setMainHidden("hidden");
    setAlert("hidden");
    setNewMain("flex");
  }

  function buttonMain() {
    setAlert("flex");
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

  const changeRadio = (event) => {
    setRadio(event.target.value);
    console.log(radio);
  };

  return (
    <main>
      {" "}
      <div
        role="alert"
        className={`alert block bg-white rounded-e-none z-0 ${alert}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>we use cookies for no reason.</span>
        <div>
          <button className="btn btn-sm">Deny</button>
          <button onClick={alertOnclick} className="btn btn-sm btn-primary">
            Accept
          </button>
        </div>
      </div>
      <div
        className={`flex justify-center mb-[80px] gap-[180px] relative ${mainhidden}`}
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
          <main
            className="w-[432px] h-[612px] block border-2  p-6 gap-4
        "
          >
            <div className="gap-4">
              Хаяг аа оруулна уу
              <select
                value={districtId}
                onChange={(e) => setDistrictId(e.target.value)}
                className={`${
                  districtId ? "bg-green-500 text-white" : ""
                } select select-ghost max-w-xs w-[384px] h-12 bg-[#ECEDF0]`}
              >
                <option>Дүүрэг сонгоно уу</option>
                <option>Баянзүрх дүүрэг</option>
                <option>Хан-Уул дүүрэг</option>
                <option>Баянгол дүүрэг</option>
                <option>Сонгинохайрхан дүүрэг</option>
                <option>Чингэлтэй дүүрэг</option>
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
                <option selected>Хороо сонгоно уу</option>
                <option>1-р хороо</option>
                <option>2-р хороо</option>
                <option>3-р хороо</option>
                <option>4-р хороо</option>
                <option>5-р хороо</option>
                <option>5-р хороо</option>
                <option>7-р хороо</option>
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
                <option>Байр, гудамж сонгоно уу</option>
                <option className="text-base">Нархан хотхон</option>
                <option>26-р байр</option>
                <option>Хоймор хотхон</option>
                <option>45-р байр</option>
                <option>Зайсан хотхон </option>
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
        <main className="block rounded-xl">
          <div className="flex gap-2 px-4 py-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="23.5" stroke="#0468C8" />
              <circle cx="24" cy="24" r="12" fill="#0468C8" />
            </svg>
            <div className="block">
              <h5>Алхам 1</h5>
              <h1>Хаягийн мэдээлэл оруулах</h1>
              <h5>Хүлээгдэж байна</h5>
            </div>
          </div>
          <main className="w-[432px] h-[612px]  border-2 p-6">
            <div className="flex gap-2 ">
              <img
                src="/images/Image.png"
                className="w-[184px] h-[121px] object-cover"
              />

              <div>
                <h1 className="font-semibold text-lg">Main Pizza </h1>
                <h2
                  className="font-semibold text-lg text-green-600 mb-2
            "
                >
                  34,800₮
                </h2>
                <h4 className="text-neutral-500">
                  Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
                </h4>{" "}
              </div>
            </div>
            <main className="flex gap-3 w-[384px] h-[54px] mt-[369px] justify-center">
              <span>
                <h1>Нийт төлөх дүн</h1>
                <h1 className="font-bold">34,800₮</h1>
              </span>

              <button
                onClick={buttonMain}
                className={`px-2 py-3 w-[187px] h-[47px] btn hover:bg-green-500 bg-green-600 text-white text-center ${allDone} `}
              >
                Захиалах
              </button>
            </main>
          </main>
        </main>
      </div>
      <li className="flex justify-center mb-[80px] gap-[180px]">
        <main
          onClick={alertOnclick}
          className={`w-[432px] h-[612px]  border-2 p-6  block ${newmain}`}
        >
          <h1>Захиалгын түүх</h1>
          <br />
          <br />
          <br />
          <div className="flex gap-2 px-4 py-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="23.5" stroke="#0468C8" />
              <circle cx="24" cy="24" r="12" fill="#0468C8" />
            </svg>
            <p className="flex">
              <div className="block">
                <h5>Алхам 1</h5>
                <h1>Хаягийн мэдээлэл оруулах</h1>
                <h5>Хүлээгдэж байна</h5>
              </div>
              <h1>2024/04/26</h1>
            </p>
          </div>
        </main>
        <main
          onClick={alertOnclick}
          className={`w-[432px] h-[612px]  border-2 p-6 block ${newmain}`}
        >
          <div>
            {" "}
            <h1 className=" mb-10">Захиалгын дэлгэрэнгүй</h1>
          </div>
          <br />
          <div className="flex">
            <h5>Main pizza</h5>

            <h5>(1)</h5>
          </div>
        </main>
      </li>
    </main>
  );
}

export default OrderCon;
