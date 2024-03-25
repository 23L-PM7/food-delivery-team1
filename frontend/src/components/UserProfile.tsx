import { Person } from "./icons/ProfileIcons";

export function UserProfile() {
  return (
    <div className="container mx-auto  w-[432px] border px-[20px] mb-[40px]">
      <div className="">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h1 className="flex justify-center font-bold text-[28px] mt-[40px]">
          УгтахБаяр
        </h1>
      </div>

      <div>
        <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px]">
            <div className="bg-[#FFFFFF]">
            <Person/>
            </div>
            
        </div>
      </div>
    </div>
  );
}
