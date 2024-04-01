import { Pluslogo } from "@/components/icons/pluslogo";

export function Map() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-5 w-[1200px]">
      <img className="w-full h-auto" src="./images/map.png" />
      <div className="flex gap-2  w-full pl-4">
        <Pluslogo />
        <h1 className="font-extrabold">Хүргэлтийн бүс дэх хаягууд</h1>
      </div>
      <div className="flex gap-5 m-10">
        <div className="w-[588px] h-[388px] bg-white drop-shadow-lg rounded-lg text-black flex justify-center items-center pb-5">
          <div className="h-5/6 w-11/12 flex flex-col">
            {/* firsthalf */}
            <div className="border-b-[1px] border-green-600 h-[19%] flex">
              <h1 className="font-semibold text-xl">A бүс</h1>
            </div>
            {/* second half */}
            <div className=" flex justify-content h-full">
              <div className="w-1/2 flex flex-col justify-evenly">
                <h1>Нархан хотхон</h1>
                <h1>26-р байр</h1>
                <h1>26-р байр</h1>
                <h1>45-р байр</h1>
                <h1>3-р байр</h1>
                <h1>Хоймор хотхон</h1>
                <h1>Хоймор хотхон</h1>
              </div>

              <div className="w-1/2 flex flex-col justify-evenly">
                <h1>Нархан хотхон</h1>
                <h1>26-р байр</h1>
                <h1>26-р байр</h1>
                <h1>45-р байр</h1>
                <h1>3-р байр</h1>
                <h1>Хоймор хотхон</h1>
                <h1>Хоймор хотхон</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[588px] h-[388px] bg-white drop-shadow-lg rounded-lg text-black flex justify-center items-center pb-5">
          <div className="h-5/6 w-11/12 flex flex-col">
            {/* firsthalf */}
            <div className="border-b-[1px] border-green-600 h-[19%] flex it">
              <h1 className="font-semibold text-xl">Б бүс</h1>
            </div>
            {/* second half */}
            <div className=" flex justify-content h-full">
              <div className="w-1/2 flex flex-col justify-evenly">
                <h1>Нархан хотхон</h1>
                <h1>26-р байр</h1>
                <h1>26-р байр</h1>
                <h1>45-р байр</h1>
                <h1>3-р байр</h1>
                <h1>Хоймор хотхон</h1>
                <h1>Хоймор хотхон</h1>
              </div>

              <div className="w-1/2 flex flex-col justify-evenly">
                <h1>Нархан хотхон</h1>
                <h1>26-р байр</h1>
                <h1>26-р байр</h1>
                <h1>45-р байр</h1>
                <h1>3-р байр</h1>
                <h1>Хоймор хотхон</h1>
                <h1>Хоймор хотхон</h1>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="flex gap-2  w-full pl-4"></div>
    </div>
  );
}
