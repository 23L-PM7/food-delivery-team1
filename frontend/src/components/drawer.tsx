import { CartItem } from "./cartItem";
import { Basket } from "./icons/basket";

export function Drawer() {
  return (
    <div className="drawer drawer-end z-40">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content out p-3">
        <label
          htmlFor="my-drawer"
          className="cursor-pointer flex py-2 gap-2  group"
        >
          <div className="z-0 flex">
            <Basket />
            <h2 className=" group-hover:text-green-600 z-0">Сагс</h2>
          </div>
        </label>
      </div>
      <div className="drawer-side items-end justify-end ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="w-[586px] h-full bg-white  min-h-full text-base-content z-40 flex flex-col justify-between">
          {/* Sidebar content here */}
          <li className="border-b-[2px]">
            <div className="w-full flex justify-center">
              <h1 className="py-[40px] text-[20px]">Таны сагс</h1>
            </div>
          </li>
          {/* top section */}
          <div className="grow border-b-[1px]">
            <CartItem />
          </div>

          {/* bottom section */}
          <li className="flex w-full shadow-md h-[130px] justify-around items-center">
            <div>
              <h1 className=" font-medium text-[18px] text-[#5E6166]">
                Нийт төлөх дүн
              </h1>
              <h1 className="font-bold text-[18px]">34,800₮</h1>
            </div>
            <button className="bg-[#18BA51] w-[256px] h-[48px] btn rounded-md text-white">
              Захиалах
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
