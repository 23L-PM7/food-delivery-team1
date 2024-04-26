"use client";

import { useEffect, useState } from "react";
import * as React from "react";

import Checkbox from "@mui/material/Checkbox";

import { locations, district, horoo } from "../data/data";
import { StepTwo } from "./stepTwo";
import { OrderMainTemplate } from "./orderConfirmMain";
import { useCart } from "@/store/useCart";
import { CircleSelect } from "./icons/circleSelect";
import { utilMutator } from "@/util/mainUtility";
import { useCurrentUser } from "@/store/useCurrentUser";
import { Circular } from "./icons/circular";

function OrderCon() {
  const [districtId, setDistrictId] = useState("");
  const [microDistrictId, setMicroDistrictid] = useState("");
  const [street, setStreet] = useState("");
  const [houseLocation, setHouseLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");

  const [step, setStep] = useState(1);
  const [allDone, setAllDone] = useState("btn-disabled");
  const [wait, setWait] = useState("Хүлээгдэж байна");
  const [icon, setIcon] = useState("flex");
  const [green, setGreen] = useState("hidden");
  const { currentUser } = useCurrentUser();
  const { cart } = useCart();

  useEffect(() => {
    checkFields();
  });

  const handleNextStop = () => {
    createOrder();
    setStep(step + 1);
  };

  if (step === 3) {
    return (
      <div>
        <StepTwo />
      </div>
    );
  }

  const createOrder = async () => {
    const address =
      districtId + " " + microDistrictId + " " + street + " " + houseLocation;
    const userId = currentUser._id;
    if (cart.cartItems) {
      try {
        await utilMutator("orders", {
          address: address,
          userId: userId,
          adminId: Date.now(),
          totalPrice: cart.totalAmount,
          payment: payment,
          createdDate: Date.now(),
          items: [cart.cartItems],
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCheckboxChange = (event: any) => {
    setPayment(event.target.value);
  };

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
            <Circular icon={icon} green={green} />

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
            <label className={`form-control`}>
              <div className="label">
                <span className="label-text">Нэмэлт мэдээлэл</span>
                <span className="label-text-alt"></span>
              </div>
              <textarea
                onChange={(e) => setHouseLocation(e.target.value)}
                value={houseLocation}
                className={`${houseLocation} textarea textarea-bordered h-24 bg-[#ECEDF0]`}
                placeholder="Орц, давхар, орцны код ..."
              ></textarea>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Утасны дугаар*</span>
                <span className="label-text-alt"></span>
              </div>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={`${phone} input input-bordered w-full max-w-xs bg-[#ECEDF0]`}
                type="number"
                placeholder="Утасны дугаараа оруулна уу"
              />
            </label>
            <p>Төлбөр төлөх</p>
            <div className="flex">
              <div className="block">
                <Checkbox
                  value="Cash"
                  checked={payment === "Cash"}
                  onChange={handleCheckboxChange}
                  color="default"
                />
                <span className="label-text justify-start">Бэлнээр </span>
              </div>
              <div className="block">
                <Checkbox
                  value="Card"
                  checked={payment === "Card"}
                  onChange={handleCheckboxChange}
                  defaultChecked
                  color="default"
                />
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
