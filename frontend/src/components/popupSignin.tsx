"use client";
import { useEffect, useState } from "react";
import { Eye } from "./icons/eyeclosed";

export function PopupSignin() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("password");
  const [check, setCheck] = useState("disabled");

  //   change

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  //   visible

  const visiblePassword = () => {
    if (visible == "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  };

  //   open close modals

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  //   check input fields useEffect

  useEffect(() => {
    checkForm();
  });

  const checkForm = () => {
    if (
      email === null ||
      email === "" ||
      password === null ||
      password === ""
    ) {
      setCheck("disabled");
    } else {
      setCheck("");
    }
  };

  return (
    <div>
      {/* <button className="btn" onClick={openModal}>
        open modal
      </button> */}
      {/* OPEN MODAL UGIIN AVTOMATAAR NEEGDEH YSTOI LOGIN HIIGEGUI BOL */}
      <dialog className={`modal ${showModal ? "modal-open" : ""}`}>
        <div className="modal-box">
          <div className="flex flex-col gap-y-5">
            <div className="w-full flex justify-center">
              <h1 className="text-2xl font-bold">Бүртгүүлэх</h1>
            </div>
            <div className="flex flex-col gap-y-3">
              {/* email */}
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
                  <button onClick={visiblePassword}>
                    <Eye />
                  </button>
                </label>
              </label>
              {/* button for forgot password */}
              <div className="w-full flex justify-end">
                <button>Нууц үг сэргээх</button>
              </div>
            </div>
            {/* first div end */}
            <div className="flex flex-col gap-y-5">
              <button
                className="btn bg-green-500 text-white max-w-none w-full hover:bg-green-500"
                disabled={check}
              >
                Нэвтрэх
              </button>
              <button className="btn btn-outline outline-green-500 border-green-500 hover:bg-green-500 hover:border-green-500">
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}
