"use client";
import { Login } from "./Login";

export default function Header() {
  return (
    <div className=" container mx-auto  flex  mt-4 mb-4 p-4 gap-2 items-center justify-between">
      <div className=" flex items-center w-3/6 gap-[8px]">
        <a href="http://localhost:3000" />
        <svg
          className="gap-2 "
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          href="http://localhost:3000"
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
        <div className="items-center">
          <ul className="flex  font-medium">
            <li>
              <a
                href="http://localhost:3000"
                className="block py-2 px-3 rounded  hover:text-green-600"
              >
                НҮҮР
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/menu"
                className="block py-2 px-3  hover:text-green-600"
              >
                ХООЛНЫ ЦЭС
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/deliveryzone"
                className="block py-2 px-3 rounded hover:text-green-600"
              >
                ХҮРГЭЛТИЙН БҮС
              </a>
            </li>{" "}
          </ul>
        </div>{" "}
      </div>

      <div className="flex items-center w-3/6 justify-end">
        <div className="flex border border-black  w-[260px] h-[40px] gap-4">
          <label className=" flex items-center gap-2 py-5 px-3">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" gap-2"
>
              <path
                d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" className="grow" placeholder="Хайх" />
          </label>
        </div>
        <div className="flex py-2 px-5 gap-2  ">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-green-600"
          >
            <path
              d="M21 7.48977H16.21L11.83 0.929766C11.64 0.649766 11.32 0.509766 11 0.509766C10.68 0.509766 10.36 0.649766 10.17 0.939766L5.79 7.48977H1C0.45 7.48977 0 7.93977 0 8.48977C0 8.57977 0.00999996 8.66977 0.04 8.75977L2.58 18.0298C2.81 18.8698 3.58 19.4898 4.5 19.4898H17.5C18.42 19.4898 19.19 18.8698 19.43 18.0298L21.97 8.75977L22 8.48977C22 7.93977 21.55 7.48977 21 7.48977ZM11 3.28977L13.8 7.48977H8.2L11 3.28977ZM17.5 17.4898L4.51 17.4998L2.31 9.48977H19.7L17.5 17.4898ZM11 11.4898C9.9 11.4898 9 12.3898 9 13.4898C9 14.5898 9.9 15.4898 11 15.4898C12.1 15.4898 13 14.5898 13 13.4898C13 12.3898 12.1 11.4898 11 11.4898Z"
              fill="currentColor"
            />
          </svg>

          <h2 className=" hover:text-green-600">Сагс</h2>
        </div>
        <div className="flex items-center  gap-2 hover:">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-green-600"
          >
            <path
              d="M8.99978 2.54145C10.1838 2.54145 11.1526 3.5102 11.1526 4.69423C11.1526 5.87825 10.1838 6.847 8.99978 6.847C7.81575 6.847 6.847 5.87825 6.847 4.69423C6.847 3.5102 7.81575 2.54145 8.99978 2.54145ZM8.99978 12.2289C11.906 12.2289 15.2428 13.6175 15.4581 14.3817V15.4581H2.54145V14.3925C2.75673 13.6175 6.09353 12.2289 8.99978 12.2289ZM8.99978 0.388672C6.62096 0.388672 4.69423 2.31541 4.69423 4.69423C4.69423 7.07305 6.62096 8.99978 8.99978 8.99978C11.3786 8.99978 13.3053 7.07305 13.3053 4.69423C13.3053 2.31541 11.3786 0.388672 8.99978 0.388672ZM8.99978 10.0762C6.12582 10.0762 0.388672 11.5185 0.388672 14.3817V17.6109H17.6109V14.3817C17.6109 11.5185 11.8737 10.0762 8.99978 10.0762Z"
              fill="currentColor"
            />{" "}
          </svg>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Нэвтрэх
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
             <Login/>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
}
