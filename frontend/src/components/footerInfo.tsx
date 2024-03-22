import { Pluslogo } from "./pluslogo";

export function Map() {
  return (
    <div>
      <img src="./images/map.png" />
      <div className="flex gap-2">
        <Pluslogo />
        <h1 className="font-extrabold">Хүргэлтийн бүс дэх хаягууд</h1>
      </div>
      <div className="flex gap-5 m-10">
        {/* copy */}
        <div className="w-[588px] h-[388px] bg-white drop-shadow-lg rounded-lg text-black flex justify-center items-center">
          <div className="h-[91.6%] w-11/12 flex flex-col">
            {/* firsthalf */}
            <div>
              <h1 className="font-semibold">A бүс</h1>
            </div>
            {/* second half */}
            <div className=" flex justify-content">
              <div className="w-1/2">
                <h1>Нархан хотхон</h1>
                <h1>26-р байр</h1>
                <h1>26-р байр</h1>
                <h1>45-р байр</h1>
                <h1>3-р байр</h1>
                <h1>Хоймор хотхон</h1>
                <h1>Хоймор хотхон</h1>
              </div>

              <div className="w-1/2">
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
        <div className="w-[588px] h-[388px] bg-white drop-shadow-lg rounded-lg text-black flex justify-center items-center">
          <div className="h-[91.6%] w-11/12 flex flex-col">
            {/* firsthalf */}
            <div>
              <h1 className="font-semibold">Б бүс</h1>
            </div>
            {/* second half */}
            <div className=" flex justify-content">
              <div className="w-1/2">
                <h1>Нархан хотхон</h1>
                <h1>26-р байр</h1>
                <h1>26-р байр</h1>
                <h1>45-р байр</h1>
                <h1>3-р байр</h1>
                <h1>Хоймор хотхон</h1>
                <h1>Хоймор хотхон</h1>
              </div>

              <div className="w-1/2">
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
    </div>
  );
}
