"use client";
import { useEffect, useState } from "react";

type Props = {
  item: any;
};

export function FoodTemplateMain(props: Props) {
  const [salePercent, setSalePercent] = useState(0);
  const { item } = props;

  const saleCheck = () => {
    setSalePercent(Math.trunc((item.saleprice / item.price) * 100));
  };

  useEffect(() => {
    saleCheck();
  }, []);

  return (
    <div className="w-[282px] flex flex-col gap-2">
      <div className="w-[282px] h-[186px] relative overflow-hidden rounded-xl">
        <div
          className={`absolute m-5 top-0 right-0 w-[69px] h-[35px] bg-green-500 rounded-full text-white border-[1px] border-white flex items-center justify-center`}
        >
          <h1>%{salePercent}</h1>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mG-TdRa5NLz3Ts49HmAfHVxYyUrh0RG2~ofgV5jEia2yVWoGonnV0opQE60IWlw1wMUZUagVL-ozBB21eGmaDVPT57~08AJJES9fJktUs6bTHVbv0sld7N94draz85tEEQaBVs6mVuL7~laIaHMPNXRd-yspK3e11gclZb6tsuQxwAhOBTdwXbmZlV7Kb6MlIfBihwLcafQV56eVHKq9ojZ8YuStutcXseXoPcOrOBVPio0Lt4IftC2m2Ge0MbU738ZD4sTNHD~F~d8jeLBg5JF~VrhKeEidPkAONmQ8FpxumS5xmiVmXeSnnOrl9iI17lQMipYDa00378oH0FjBeA__" />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-lg">{item.name}</h1>
        <div className="flex gap-x-4">
          <h1 className="text-green-500 font-semibold">₮{item.price}</h1>
          <h1 className={``}>
            <s>₮{item.saleprice}</s>
          </h1>
        </div>
      </div>
    </div>
  );
}
