import { Call, Exit, Mail, Pencil, Person, Timer } from "./icons/ProfileIcons";

export function UserProfile() {
  return (
    <div className="container mx-auto  w-[432px] px-[20px] mb-[40px]">
      <div className="">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <Pencil/>
        <h1 className="flex justify-center font-bold text-[28px] mt-[40px]">
          УгтахБаяр
        </h1>
      </div>

      <div>
        <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[40px]">
            <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
            <Person/>
            </div>
            <div className="w-8/12">
                <h1 className="text-xs text-[#888A99]">Таны нэр</h1>
                <h1 className="text-base">УгтахБаяр</h1>
            </div>
            <div className="w-2/12 justify-end flex">
                <Pencil/>
            </div>
        </div>

        <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
            <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
            <Call/>
            </div>
            <div className="w-8/12">
                <h1 className="text-xs text-[#888A99]">Утасны дугаар</h1>
                <h1 className="text-base">88883345</h1>
            </div>
            <div className="w-2/12 justify-end flex">
                <Pencil/>
            </div>
        </div>
        <div className="bg-[#F6F6F6] w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
            <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full">
            <Mail/>
            </div>
            <div className="w-8/12">
                <h1 className="text-xs text-[#888A99]">Имэйл хаяг</h1>
                <h1 className="text-base">Ugtakhbayr@gmail.com</h1>
            </div>
            <div className="w-2/12 justify-end flex">
                <Pencil/>
            </div>
        </div>

        <div className=" w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
            <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full border">
            <Timer/>
            </div>
            <div className="w-8/12">
                <h1 className="text-base">Захиалгын түүх</h1>
            </div>
        </div>

        <div className=" w-full rounded px-[20px] py-[8px] flex items-center  gap-[8px] mt-[16px]">
            <div className="bg-[#FFFFFF] w-[48px] h-[48px] p-3 rounded-full border">
            <Exit/>
            </div>
            <div className="w-8/12">
                <h1 className="text-base">Гарах</h1>
            </div>
        </div>

      </div>
    </div>
  );
}
