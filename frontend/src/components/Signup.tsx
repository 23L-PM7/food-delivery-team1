"use client";
import { useEffect, useState } from "react";
import { Eye } from "./icons/eyeclosed";

export default function Signup() {
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

  // onchange
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const changeSecondpass = (event) => {
    setSecondpass(event.target.value);
  };

  // checkbox check checker
  const changeCheckbox = (event) => {
    setCheckbox(event.target.checked);
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
    <div className="flex flex-col items-center gap-y-4 m-3">
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
              type="password"
              value={password}
              onChange={changePassword}
              placeholder="Нууц үгээ оруулна уу"
            />
            <button>
              <Eye />
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
              type="password"
              value={secondpass}
              onChange={changeSecondpass}
              placeholder="Нууц үгээ оруулна уу"
            />
            <button>
              <Eye />
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
        >
          Бүртгүүлэх
        </button>
        <h1 className="text-red-700">{error}</h1>
      </div>
    </div>
  );
}
