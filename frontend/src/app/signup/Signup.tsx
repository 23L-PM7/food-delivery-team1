"use client";

import { useEffect, useState } from "react";
import { Eye } from "../../components/icons/eyeclosed";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export default function Signup() {
  const router = useRouter();
  // form is fully filled check
  const [check, setCheck] = useState("disabled");

  // form data

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [secondpass, setSecondpass] = useState("");
  const [error, setError] = useState("");

  // form terms agreement
  const [checkbox, setCheckbox] = useState(false);

  // password visible useState
  const [icon, setIcon] = useState(false);
  const [icon2, setIcon2] = useState(false);
  const [visible, setVisible] = useState("password");
  const [visible2, setVisible2] = useState("password");

  const createUsers = async () => {
    if (!checkForm) {
      return;
    }
    try {
      await axios.post("http://localhost:9090/users/signup", {
        name,
        email,
        address,
        password,
        secondpass,
      });
      router.push("/login");
    } catch (error: any) {
      console.error("Error:", error.response.data.alert);
      alert(error.response.data.alert);
      // alert("There was an error creating a new user.");
    }
  };

  // onchange
  const changeName = (event: any) => {
    setName(event.target.value);
  };
  const changeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const changeAddress = (event: any) => {
    setAddress(event.target.value);
  };
  const changePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const changeSecondpass = (event: any) => {
    setSecondpass(event.target.value);
  };

  // visible passwords
  const visiblePassword = () => {
    setIcon(!icon);
   if (visible === "text") {
    setVisible("password");
  } else {
    setVisible("text");
  }
};
  const visibleSecondpass = () => {
    setIcon2(!icon2);
    if (visible2 === "text") {
     setVisible2("password");
   } else {
     setVisible2("text");
   }
  };

  // checkbox check checker
  const changeCheckbox = (event: any) => {
    setCheckbox(event.target.checked);
    alert(
      "Үйлчилгээний нөхцөл болон нууцлалын бодлогыг уншиж танилцан зөвшөөрнө үү!!"
    );
  };

  // useEffect baingiin field buglusun uguig shalgana, bas agree checkbox shalgana
  useEffect(() => {
    checkForm();
  });

  // signup function checking input, error message togtmol shalgana, password match shalgana
  const checkForm = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      secondpass === "" ||
      name === null ||
      email === null ||
      password === null ||
      secondpass === null ||
      checkbox === false
    ) {
      return setCheck("disabled"), setError("Please Fill all fields");
    } else if (password !== secondpass) {
      return setCheck("disabled"), setError("Passwords don't match");
    } else {
      return setCheck("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-4 m-3 mb-[107px] mt-[74px]">
      {/* burtguuleh title div */}
      <div className="">
        <h1 className="text-2xl font-bold">Бүртгүүлэх</h1>
      </div>
      {/* main input div */}
      <div className="w-[384px]">
        {/* ner */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Нэр</span>
          </div>
          <input
            type="text"
            value={name}
            onChange={changeName}
            placeholder="Нэрээ оруулна уу"
            className="input bg-gray-100 rounded-none w-full border border-gray-200"
          />
        </label>
        {/* email */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">И-мэйл</span>
          </div>
          <input
            type="text"
            value={email}
            onChange={changeEmail}
            placeholder="И-мэйл хаягаа оруулна уу"
            className="input bg-gray-100 rounded-none w-full border border-gray-200"
          />
        </label>
        {/* hayg */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Хаяг</span>
          </div>
          <input
            type="text"
            value={address}
            onChange={changeAddress}
            placeholder="Та хаягаа оруулна уу"
            className="input bg-gray-100 rounded-none w-full border border-gray-200"
          />
        </label>
        {/* password */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Нууц үг</span>
          </div>
          <label className="input flex items-center justify-between bg-gray-100 rounded-none border border-gray-200">
            <input
              type={visible}
              value={password}
              onChange={changePassword}
              placeholder="Нууц үгээ оруулна уу"
            />
            <button onClick={visiblePassword}
            className={`${icon ? "hidden" : "flex"}`}>
            <IoMdEyeOff className="text-[25px]" />
            </button>
            <button onClick={visiblePassword}
            className={`${icon ? "flex" : "hidden"}`}>
             <IoMdEye className="text-[25px]"/>
            </button>
          </label>
        </label>
        {/* repeat password */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Нууц үг давтах</span>
          </div>
          <label className="input flex items-center justify-between bg-gray-100 rounded-none border border-gray-200">
            <input
              type={visible2}
              value={secondpass}
              onChange={changeSecondpass}
              placeholder="Нууц үгээ оруулна уу"
            />
            <button onClick={visibleSecondpass}
             className={`${icon2 ? "hidden" : "flex"}`}>
             <IoMdEyeOff className="text-[25px]"/>
            </button>
            <button onClick={visibleSecondpass}
            className={`${icon2 ? "flex" : "hidden"} `}>
              <IoMdEye className="text-[25px]"/>
            </button>
          </label>
        </label>
      </div>
      {/* uilchilgeeni nuhtsul div with button */}
      <div className="w-[384px] flex flex-col gap-y-4">
        {/* agree to terms */}
        <div className="flex gap-x-3">
          <input
            onChange={changeCheckbox}
            type="checkbox"
            className="checkbox"
          />
          <h3 className="">Үйлчилгээний нөхцөл зөвшөөрөх</h3>
        </div>
        {/* burtguuleh button */}
        <button
          className="btn bg-green-500 text-white max-w-none hover:bg-green-500"
          disabled={check}
          onClick={createUsers}
        >
          Бүртгүүлэх
        </button>
        <h1 className="text-red-700">{error}</h1>
      </div>
    </div>
  );
}
