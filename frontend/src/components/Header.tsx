"use client";

import { ReactNode, useState } from "react";
import { Login } from "./Login";

import { Navbar } from "./navbar";
import { Card } from "@mui/material";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);

  function Access() {
    setLoginModal(!loginModal);
  }

  return (
    <div
      className="container mx-auto text-sm font-semibold flex h-[57px] gap-2 items-center lg:justify-between 
    max-w-[1200px]"
    >
      <div className="lg:flex items-center w-3/6 block justify-start">
        <a href="http://localhost:3000">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.85857 9.5397L5.65344 17.4105C5.12868 18.3956 4.86572 19.4767 4.86572 20.5592C4.86572 21.6419 5.12868 22.7228 5.65344 23.7079L9.85857 31.5789C10.6336 33.0327 12.1494 33.9407 13.799 33.9407H18.2656V31.711H18.2641C17.4401 31.711 16.6822 31.2577 16.2946 30.5309L12.0911 22.6584C11.7398 22.0022 11.5647 21.2815 11.5647 20.5592C11.5647 19.8369 11.7398 19.1163 12.0911 18.4602L16.2946 10.5878C16.6822 9.86077 17.4401 9.40758 18.2641 9.40758H18.2656V7.17773H13.799C12.1494 7.17773 10.6336 8.08589 9.85857 9.5397Z"
              fill="black"
            />
            <path
              d="M35.3421 17.4106L31.1371 9.53976C30.3619 8.08579 28.8462 7.17779 27.1967 7.17779H22.7299V9.40747H22.7316C23.5556 9.40747 24.3135 9.86082 24.7009 10.5876L28.9044 18.4601C29.2559 19.1163 29.4307 19.837 29.4307 20.5593C29.4307 21.2816 29.2559 22.0022 28.9044 22.6585L24.7009 30.5307C24.3135 31.2577 23.5556 31.7109 22.7316 31.7109H22.7299V33.9408H27.1967C28.8462 33.9408 30.3619 33.0328 31.1371 31.5788L35.3421 23.708C35.8667 22.7229 36.1298 21.6418 36.1298 20.5593C36.1298 19.4767 35.8667 18.3957 35.3421 17.4106Z"
              fill="black"
            />
          </svg>
        </a>
        <Navbar />
      </div>

      <div className=" items-center w-3/6 flex justify-end ">
        <label className="input input-bordered border-black items-center gap-2 w-[260px] h-[36px]  hidden lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow " placeholder="Хайх" />
        </label>
        <div className="flex py-2 px-5 gap-2  group">
          <Drawer>
            <div className="flex flex-col ">
              <div className="flex align-middle">
                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.1125 14L29.8875 15.775L21.6625 24L29.8875 32.225L28.1125 34L18.1125 24L28.1125 14Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
                <div className="text-center text-[20px] align-middle m-0 p-0 text-[">
                  Таны сагс
                </div>
              </div>
              <hr />
              <FoodInfo></FoodInfo>
              <hr />
              <div className=""></div>
            </div>
          </Drawer>
        </div>

        <div className="flex items-center  gap-2 group">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:text-green-600"
          >
            <path
              d="M8.99978 2.54145C10.1838 2.54145 11.1526 3.5102 11.1526 4.69423C11.1526 5.87825 10.1838 6.847 8.99978 6.847C7.81575 6.847 6.847 5.87825 6.847 4.69423C6.847 3.5102 7.81575 2.54145 8.99978 2.54145ZM8.99978 12.2289C11.906 12.2289 15.2428 13.6175 15.4581 14.3817V15.4581H2.54145V14.3925C2.75673 13.6175 6.09353 12.2289 8.99978 12.2289ZM8.99978 0.388672C6.62096 0.388672 4.69423 2.31541 4.69423 4.69423C4.69423 7.07305 6.62096 8.99978 8.99978 8.99978C11.3786 8.99978 13.3053 7.07305 13.3053 4.69423C13.3053 2.31541 11.3786 0.388672 8.99978 0.388672ZM8.99978 10.0762C6.12582 10.0762 0.388672 11.5185 0.388672 14.3817V17.6109H17.6109V14.3817C17.6109 11.5185 11.8737 10.0762 8.99978 10.0762Z"
              fill="currentColor"
            />{" "}
          </svg>
          <button
            className="group-hover:text-green-600"
            onClick={() => Access()}
          >
            Нэвтрэх
          </button>
          {/* 
          // 
          // 
          //  */}
          <dialog
            id="Haruul"
            className={loginModal ? `modal modal-open` : `modal`}
          >
            <div className="modal-box max-w-none w-[549px]">
              <Login />
            </div>
            <form onClick={Access} method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <div className="dropdown">
          <button></button>
        </div>
        <div className="drawer drawer-end z-10 py-2 px-5 gap-2 flex lg:hidden justify-end w-11">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current hover:text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a href="http://localhost:3000">
                  <h1 className=" hover:text-green-600">НҮҮР</h1>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/menu">
                  <h1 className=" hover:text-green-600">ХООЛНЫ ЦЭС</h1>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/deliveryzone">
                  <h1 className=" hover:text-green-600">ХҮРГЭЛТИЙН БҮС</h1>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

type DrawerProps = {
  children: ReactNode;
};
const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content out">
        <label htmlFor="my-drawer" className=" flex py-2 gap-2  group">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:text-green-600"
          >
            <path
              d="M21 7.48977H16.21L11.83 0.929766C11.64 0.649766 11.32 0.509766 11 0.509766C10.68 0.509766 10.36 0.649766 10.17 0.939766L5.79 7.48977H1C0.45 7.48977 0 7.93977 0 8.48977C0 8.57977 0.00999996 8.66977 0.04 8.75977L2.58 18.0298C2.81 18.8698 3.58 19.4898 4.5 19.4898H17.5C18.42 19.4898 19.19 18.8698 19.43 18.0298L21.97 8.75977L22 8.48977C22 7.93977 21.55 7.48977 21 7.48977ZM11 3.28977L13.8 7.48977H8.2L11 3.28977ZM17.5 17.4898L4.51 17.4998L2.31 9.48977H19.7L17.5 17.4898ZM11 11.4898C9.9 11.4898 9 12.3898 9 13.4898C9 14.5898 9.9 15.4898 11 15.4898C12.1 15.4898 13 14.5898 13 13.4898C13 12.3898 12.1 11.4898 11 11.4898Z"
              fill="currentColor"
            />
          </svg>

          <h2 className=" group-hover:text-green-600">Сагс</h2>
        </label>
      </div>
      <div className="drawer-side items-end justify-end ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-[586px] h-full bg-white p-[32px]  min-h-full text-base-content z-40">
          {/* Sidebar content here */}
          {children}
        </ul>
      </div>
    </div>
  );
};

const FoodInfo = () => {
  let [foodQuantity, setFoodquantity] = useState(1);
  function incementFoodQuantity() {
    foodQuantity = foodQuantity + 1;
    setFoodquantity(foodQuantity);
  }
  const minusFoodQuantity = () => {
    if (foodQuantity > 1) {
      foodQuantity = foodQuantity - 1;
      setFoodquantity(foodQuantity);
    }
  };
  return (
    <div className=" flex  justify-center gap-[16px] bg-white rounded-2xl relative">
      <div>
        <img
          className="object-cover w-[245px] h-[150px]"
          src="https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="flex flex-col gap-[8px] justify-center">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
          X
        </button>
        <div className="flex flex-col gap-[2px] w-[384px]">
          <div className="font-semibold  text-[#000000] text-[18px]">Торт</div>
          <div className="font-semibold text-[18px] text-[#18ba51] mt-[2px]">
            122323 ₮
          </div>
        </div>

        <div className=" p-[8px] font-[400] rounded-[8px] text-[#767676] text-[16px]">
          Хулуу, төмс, давс
        </div>

        <div className="flex flex-start gap-[8px] items-center">
          <button
            className="btn bg-[#18BA51] text-[14px] font-[900] text-[#FFFFFF] w-[45px] h-[40px]"
            onClick={minusFoodQuantity}
          >
            {" "}
            -{" "}
          </button>
          <button className="btn bg-white border-none font-[500] text-[16px]">{foodQuantity}</button>
          <button
            className="btn bg-[#18BA51] text-[14px] font-[900] text-[#FFFFFF] w-[45px] h-[40px]"
            onClick={incementFoodQuantity}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
