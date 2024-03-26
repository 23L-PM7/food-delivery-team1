"use client";

import { useEffect, useState } from "react";
import { Eye } from "../icons/eyeclosed";

export function NewPassword() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("password");
  const [pass2, setPass2] = useState("");
  const [visible2, setVisible2] = useState("password");
  const [check, setCheck] = useState("disabled");

  useEffect(() => {
    checkForm();
  });

  const checkForm = () => {
    if (
      pass2 == null ||
      pass2 == "" ||
      password == null ||
      password == "" ||
      pass2 !== password
    ) {
      setCheck("disabled");
    } else {
      setCheck("");
    }
  };

  const changePass = (event) => {
    setPassword(event.target.value);
  };

  const changePass2 = (event) => {
    setPass2(event.target.value);
  };

  const visiblePass = () => {
    if (visible === "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  };

  const visiblePass2 = () => {
    if (visible2 === "password") {
      setVisible2("text");
    } else {
      setVisible2("password");
    }
  };

  return (
    <div className="flex w-[448px] justify-center mx-auto">
      <div className="w-[384px] flex flex-col items-center gap-y-7">
        {/* title */}
        <div className="w-full">
          <h1 className="text-2xl font-bold">Шинэ нууц үг зохиох</h1>
        </div>
        {/* set password */}
        <div className="w-full flex flex-col gap-y-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Нууц үг</span>
            </div>
            <label className="input flex items-center justify-between bg-gray-100 rounded-none border border-gray-200">
              <input
                type={visible}
                value={password}
                onChange={changePass}
                placeholder="***********"
              />
              <button onClick={visiblePass}>
                <Eye />
              </button>
            </label>
          </label>
          {/* second input */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Нууц үг давтах</span>
            </div>
            <label className="input flex items-center justify-between bg-gray-100 rounded-none border border-gray-200">
              <input
                type={visible2}
                value={pass2}
                onChange={changePass2}
                placeholder="***********"
              />
              <button onClick={visiblePass2}>
                <Eye />
              </button>
            </label>
          </label>
        </div>
        {/* button */}
        <div className="w-full mt-5">
          <button
            className="btn bg-green-500 text-white max-w-none w-full hover:bg-green-500"
            disabled={check}
          >
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
}
