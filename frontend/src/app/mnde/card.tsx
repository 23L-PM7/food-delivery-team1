import { foodlist } from "./datalist";


export default function Card() {
    return (
        <div>
            <div className="relative overflow-hidden w-fit" >
                <div className="absolute 20% bg-green-600 text-white w-[69px] h-[35px] left-[197px] top-[16px] rounded-[16px] border-[1px] flex item-center justify-center">20%
                </div>
                <img src="./images/menu food photos/menu breakfast-1.png"></img>
                <div className="absolute h-full w-full bg-black/50 bottom-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 rounded-2xl" >
                    <button className="bg-white text-black p-[8px] w-[166px] h-[40px] rounded-[100px]">Edit</button>
                </div>
            </div>
            <div className="flex flex-col mt-[14px]">
                <div className="font-semibold text-lg text-[#000000]">
                    Өглөөний хоол
                </div>
                <div className="font-semibold text-lg text-[#18BA51] mt-[2px]">
                    4800₮
                </div>
            </div>
        </div>
    )
}