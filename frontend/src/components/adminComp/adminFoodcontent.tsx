import { TripleDot } from "../icons/tripledot";
import { Paid, Progress } from "./iconsForDashboard";

type ChildProps = {
  item: any;
};

export function AdminFoodContent(props: ChildProps) {
  return (
    <div className="w-full h-[72px] flex">
      {/*  */}
      <div className="w-[21%] h-full flex items-center pl-3 gap-x-2">
        <img className="w-[40px] h-[40px]" src="./images/image13.png" />
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-sm">#00000</h3>
          <h3 className="text-gray-700 text-sm">Breakfast</h3>
        </div>
      </div>
      {/*  */}
      <div className="w-[15%] h-full flex flex-col justify-center pl-3">
        <h3 className="font-semibold text-sm">99123456</h3>
        <h3 className="text-gray-700 text-sm">Bobby</h3>
      </div>
      {/*  */}
      <div className="w-[23%] h-full flex items-center pl-3 gap-x-2">
        <div>
          <h3 className="font-semibold text-sm">₮24500</h3>
          <h3 className="text-gray-700 text-sm">2024/03/29 17:40</h3>
        </div>
        <Paid />
      </div>
      {/*  */}
      <div className="w-[21%] h-full flex items-center pl-3 text-sm">
        <p className="text-gray-700">
          БЗД, 2-р хороо, Нархан хотхон, 2-р орц, 5 - 63тоот
        </p>
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
