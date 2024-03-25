"use client";
import { useEffect, useState } from "react";
import { Eye } from "./icons/eyeclosed";

export function Login() {
  const [check, setCheck] = useState("disabled");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState("");

  const [visible, setVisible] = useState("password");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const visiblePassword = () => {
    if (visible == "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  };

  const changeCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  useEffect(() => {
    checkForm();
  });

  const checkForm = () => {
    if (
      email === "" ||
      password === "" ||
      email === null ||
      password === null ||
      checkbox === false
    ) {
      return setCheck("disabled"), setError("Password 8-аас их оронтой байна.");
    } else {
      return setCheck("");
    }
  };

  return (
    <div className="container mx-auto w-[549px] p-[32px]  mt-[111px] mb-[76px]">
      <h1 className="flex justify-center font-bold text-xl">Нэвтрэх</h1>
      <div className="mt-[48px]">
        <h1>Имэйл </h1>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Имэйл хаягаа оруулна уу"
            value={email}
            onChange={changeEmail}
          />
        </label>
      </div>
      <div className="mt-[16px]">
        <h1>Нууц үг</h1>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            />
          </svg>
          <input
            type={visible}
            className="grow"
            placeholder="Нууц үг"
            value={password}
            onChange={changePassword}
          />
           <button onClick={visiblePassword}>
              <Eye />
            </button>
        </label>
        <p className="flex justify-end cursor-pointer">Нууц үг сэргээх</p>
      </div>
      <div className="mt-[48px] flex flex-col items-center cursor-pointer">
      <div className="flex gap-x-3 mb-[20px]">
          <input
            onChange={changeCheckbox}
            type="checkbox"
            className="checkbox"
          />
          <h3 className="">Нэвтрэхийг зөвшөөрөх</h3>
        </div>
        <button className="w-full btn bg-green-500 hover:bg-green-500" disabled={check}>
          Нэвтрэх
        </button>
        <h1 className="text-red-700">{error}</h1>
        <p className="my-[32px]">Эсвэл</p>

        <a href="http://localhost:3000/ari" className="w-full btn btn-outline btn-success">
        <button>
          Бүртгүүлэх
        </button>
        </a>
       
      </div>
    </div>
  );
}
