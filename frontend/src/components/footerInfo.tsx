import { Pluslogo } from "./pluslogo";

export function Map() {
  return (
    <>
      <img src="./images/map.png" />
      <div className="flex gap-2">
        <Pluslogo />
        <h1 className="font-extrabold">Хүргэлтийн бүс дэх хаягууд</h1>
      </div>
      <div className="w-[200px] g-gray-950"></div>
    </>
  );
}
