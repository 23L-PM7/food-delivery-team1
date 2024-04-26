"use client";
import { useEffect, useState } from "react";
import { AdminFoodContent } from "./adminFoodcontent";
import { AdminGreyhead } from "./adminGreyhead";
import { utilFetcher, utiloneFetcher } from "@/util/mainUtility";
import { useCurrentUser } from "@/store/useCurrentUser";

export function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  // const [user, setUser] = useState([]);
  const { currentUser } = useCurrentUser();

  const fetchOrder = async () => {
    try {
      const data = await utilFetcher("orders");
      // const user = await utiloneFetcher(`users`, currentUser._id);
      setOrders(data);
      // setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const check = () => {
    console.log({ orders, currentUser });
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center gap-y-5 h-full pt-10">
      <div className="w-[1024px] h-[624px] bg-white rounded-3xl drop-shadow-sm">
        {/* title with search bar */}
        <div className="flex w-full justify-between p-5 items-center">
          <h1 onClick={check} className="font-bold text-xl">
            Admin Dashboard
          </h1>
          {/* search */}
          <label className="input input-bordered flex items-center gap-2 w-[356px] h-[36px] bg-gray-100">
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
            <input type="text" className="grow" placeholder="Search" />
          </label>
          {/* end of search */}
        </div>
        {/* table of contents titles */}
        <AdminGreyhead />
        {/* contents mapped */}
        <div className="w-full h-full">
          {orders.map((item, index) => (
            <AdminFoodContent
              key={333 - index}
              item={item}
              user={currentUser}
            />
          ))}
        </div>
      </div>
      {/* page selector with numbers */}
      <div className="w-[1024px] h-[60px] flex justify-between items-end pt-5 border-t-[1px]">
        <button className="btn btn-sm bg-white h-[36px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6666 9.16634H6.52498L11.1833 4.50801L9.99998 3.33301L3.33331 9.99967L9.99998 16.6663L11.175 15.4913L6.52498 10.833H16.6666V9.16634Z"
              fill="#121316"
            />
          </svg>
          Previous
        </button>
        {/* pagination */}
        <div className="join">
          <button className="join-item btn btn-sm">1</button>
          <button className="join-item btn btn-sm btn-active">2</button>
          <button className="join-item btn btn-sm">3</button>
          <button className="join-item btn btn-sm">4</button>
        </div>
        {/* end of pagination */}
        <button className="btn btn-sm bg-white h-[36px]">
          Next
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3.33301L8.82504 4.50801L13.475 9.16634H3.33337V10.833H13.475L8.82504 15.4913L10 16.6663L16.6667 9.99967L10 3.33301Z"
              fill="#121316"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
