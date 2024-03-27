"use client";

import { useEffect, useState } from "react";
import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

function OrderCon() {
  const [districtId, setDistrictId] = useState("");
  const [microDistrictId, setMicroDistrictid] = useState("");
  const [street, setStreet] = useState("");
  const [houseLocation, setHouseLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [radio, setRadio] = useState("");
  const [toggle, setToggle] = useState("");
  const [allDone, setAllDone] = useState("btn-disabled");

  useEffect(() => {
    checkFields();
  });

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
    } else {
      setAllDone("");
    }
  }

  const changeRadio = (event) => {
    setRadio(event.target.value);
    console.log(radio);
  };

  return (
    <div className="flex justify-center mb-[80px] gap-[180px]">
      <main className=" block rounded-xl">
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
            <h1>Захиалга баталгаажуулах</h1>
            <h5>Хүлээгдэж байна</h5>
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
              s
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
                <Checkbox defaultChecked color="default" />
              </span>
              <span className="label-text">Бэлнээр </span>
            </div>
            <div className="block">
              <span>
                <Checkbox defaultChecked color="default" />
              </span>
              <span className="label-text ">Картаар</span>
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
              className={`px-2 py-3 w-[187px] h-[47px] btn hover:bg-green-500 bg-green-600 text-white text-center ${allDone}`}
            >
              Захиалах
            </button>
          </main>
        </main>
      </main>
    </div>
  );
}

export default OrderCon;
