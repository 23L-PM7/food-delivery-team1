import { Pluslogo } from "./pluslogo";

export function Map() {
  return (
    <div>
      <img src="./images/map.png" />
      <div className="flex gap-2">
        <Pluslogo />
        <h1 className="font-extrabold">Хүргэлтийн бүс дэх хаягууд</h1>
      </div>
      <div className="flex gap-5">
        <div className="w-[588px] h-[388px] bg-white drop-shadow-lg rounded-lg text-black flex justify-evenly">
          <div>
            <h1>А бүс</h1>
            <h1>Нархан хотхон</h1>
            <h1>26-р байр</h1>
            <h1>26-р байр</h1>
            <h1>45-р байр</h1>
            <h1>3-р байр</h1>
            <h1>Хоймор хотхон</h1>
            <h1>Хоймор хотхон</h1>
          </div>

          <div>
            <h1>Нархан хотхон</h1>
            <h1>26-р байр</h1>
            <h1>26-р байр</h1>
            <h1>45-р байр</h1>
            <h1>3-р байр</h1>
            <h1>Хоймор хотхон</h1>
            <h1>Хоймор хотхон</h1>
          </div>
        </div>
        <div className="w-[588px] h-[388px] bg-white drop-shadow-lg rounded-lg text-black ">
          <h1>Б бүс</h1>
        </div>
      </div>
    </div>
  );
}
