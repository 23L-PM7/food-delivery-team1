"use client";

import { TripleDot } from "../icons/tripledot";
import { Paid, Progress } from "./iconsForDashboard";

type ChildProps = {
  item: any;
  user: any;
};

export function AdminFoodContent(props: ChildProps) {
  const { item, user } = props;
  const lastFiveDigits = item.adminId.slice(-5);

  const date = new Date(item.createdDate);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const parsedDate = `${year}/${month}/${day}`;

  return (
    <div className="w-full h-[72px] flex">
      {/*  */}
      <div className="w-[21%] h-full flex items-center pl-3 gap-x-2">
        <img className="w-[40px] h-[40px]" src="./images/image13.png" />
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-sm">#{lastFiveDigits}</h3>
          <h3 className="text-gray-700 text-sm">Breakfast</h3>
        </div>
      </div>
      {/*  */}
      <div className="w-[15%] h-full flex flex-col justify-center pl-3">
        <h3 className="font-semibold text-sm">{user.phoneNumber}</h3>
        <h3 className="text-gray-700 text-sm">{user.name}</h3>
      </div>
      {/*  */}
      <div className="w-[23%] h-full flex items-center pl-3 gap-x-2">
        <div>
          <h3 className="font-semibold text-sm">₮{item.totalPrice}</h3>
          <h3 className="text-gray-700 text-sm">{parsedDate}</h3>
        </div>
        <Paid />
      </div>
      {/*  */}
      <div className="w-[21%] h-full flex items-center pl-3 text-sm">
        <p className="text-gray-700">{item.address}</p>
      </div>
      {/*  */}
      <div className="w-[14%] h-full flex items-center pl-3 text-sm">
        <Progress />
      </div>
      {/*  */}
      <div className="w-[6%] h-full flex items-center pl-3 text-sm">
        <button>
          <TripleDot />
        </button>
      </div>
    </div>
  );
}
