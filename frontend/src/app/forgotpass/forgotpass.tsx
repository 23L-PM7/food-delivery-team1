"use client";

import { useEffect, useState } from "react";

export function Forgot() {
  // usestate
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState("disabled");

  //   useeffect plus check form

  useEffect(() => {
    checkForm();
  });

  const checkForm = () => {
    if (email === null || email === "") {
      setCheck("disabled");
    } else {
      setCheck("");
    }
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="w-[448px] mx-auto flex justify-center items-center mt-[86px] mb-[131px]">
      <div className="w-[384px] flex flex-col gap-y-5">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl font-bold">Нууц үг сэргээх</h1>
        </div>
        <div className="flex flex-col gap-y-7">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Имэйл</span>
            </div>
            <input
              type="text"
              value={email}
              onChange={changeEmail}
              placeholder="Имэйл хаягаа оруулна уу"
              className="input bg-gray-100 rounded-none w-full border border-gray-200"
            />
          </label>
          {/* button */}
          <button
            className="btn bg-green-500 text-white max-w-none w-full hover:bg-green-500"
            disabled={check}
          >
            Нэвтрэх
          </button>
        </div>
      </div>
    </div>
  );
}
