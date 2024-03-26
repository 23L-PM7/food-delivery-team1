"use client";

import { useEffect, useState } from "react";
import { Eye } from "../icons/eyeclosed";

export function Confirmation() {
  // usestate
  const [code, setCode] = useState("");
  const [check, setCheck] = useState("disabled");
  const [visible, setVisible] = useState("password");

  //   useeffect plus check form

  useEffect(() => {
    checkForm();
  });

  const checkForm = () => {
    if (code === null || code === "") {
      setCheck("disabled");
    } else {
      setCheck("");
    }
  };

  const changeCode = (event) => {
    setCode(event.target.value);
  };

  const visibleCode = () => {
    if (visible == "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  };

  return (
    <div className="w-[448px] mx-auto flex justify-center items-center">
      <div className="w-[384px] flex flex-col gap-y-5">
        <div className="w-full flex flex-col justify-center items-center gap-y-10">
          <h1 className="text-2xl font-bold">Нууц үг сэргээх</h1>
          <h1 className="text-slate-600">
            Таны <span className="text-green-500">example@pinecone.mn</span>{" "}
            хаяг руу сэргээх код илгээх болно.
          </h1>
        </div>
        <div className="flex flex-col gap-y-7">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Нууц үг сэргээх код</span>
            </div>
            <label className="input flex items-center justify-between bg-gray-100 rounded-none border border-gray-200">
              <input
                type={visible}
                value={code}
                onChange={changeCode}
                placeholder="***********"
              />
              <button onClick={visibleCode}>
                <Eye />
              </button>
            </label>
          </label>
          {/* button */}
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
