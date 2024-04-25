"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/store/useCart";

type Props = {
  item: any;
};

export function FoodTemplateMain(props: Props) {
  const [salePercent, setSalePercent] = useState(0);
  const [modal, setModal] = useState(false);
  const [disable, setDisable] = useState(false);
  const [amount, setAmount] = useState(1);
  const { item } = props;

  // zustand
  const { addCart } = useCart();
  //

  const saleCheck = () => {
    setSalePercent(Math.trunc(100 - (item.saleprice / item.price) * 100));
  };

  const toggleCartModal = () => {
    setModal(!modal);
    setAmount(1);
  };

  const subtract = () => {
    if (amount > 1) {
      setDisable(false);
      setAmount((prevValue) => prevValue - 1);
    } else {
      setDisable(false);
    }
  };

  const add = () => {
    setAmount((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    saleCheck();
  }, []);

  return (
    <div>
      <div
        onClick={toggleCartModal}
        className="w-[282px] flex flex-col gap-2 cursor-pointer"
      >
        <div className="w-[282px] h-[186px] relative overflow-hidden rounded-xl">
          <div
            className={`absolute m-5 top-0 right-0 w-[69px] h-[35px] bg-green-500 rounded-full text-white border-[1px] border-white flex items-center justify-center`}
          >
            <h1>{salePercent}%</h1>
          </div>
          <img alt="food photo" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div> 

        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-lg">{item.name}</h1>
          <div className="flex gap-x-4">
            <h1 className="text-green-500 font-semibold">₮{item.saleprice}</h1>
            <h1 className={``}>
              <s>₮{item.price}</s>
            </h1>
          </div>
        </div>
      </div>
      {/* start of modal */}
      <dialog id="my_modal_2" className={modal ? "modal modal-open" : "modal"}>
        <div className="modal-box max-w-[984px] flex items-center gap-5">
          {/* content */}
          <div className="w-[500px] h-[500px]">
            <img
              className="h-full"
              src="https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-TvDpGXGvdRQZH4XglEVcgcFNTGeYJYmTHfibycEohsC9Q99m2WGp6yev0rjyE4i60VMVu0h1ew5ye0k4TkWqVSHiiEvCqRMaWSeOWvXmJQ1d3V7zi1ZeOLYWsWRq0oyiKY25i-DprsA0VuqB5uog0fpr4e3E2OZZ32RtsZ4juVCutVD9G4lYgjNyE0CALaTHD74yWtrd~8GauLez-lg7uK1Ps59nk4yPx7rWP2Bva6t7rl2MNOWWHXYG1BPPGkpG6Qp05rdxMHW-S3p52hbyxcVNSjcll1UdIFr3rrpm7N9xJCoE6lmJr66mGch60BC0mAiLfl-rYADJGrJ~Ct~w__"
            />
          </div>
          <div className="w-[384px] h-[398px] flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-[28px]">{item.name}</h1>
              <h4 className="text-green-500 font-bold">₮{item.saleprice}</h4>
            </div>
            <div>
              <h1 className="font-bold text-[18px]">Орц</h1>
              <p className="bg-gray-100 text-gray-500 rounded-lg text-[16px] p-[5px]">
                {item.ingredient}
              </p>
            </div>
            <h1 className="font-bold text-[18px]">Too</h1>
            <div className="flex justify-between items-center">
              <button
                onClick={subtract}
                className={
                  disable
                    ? `btn btn-sm bg-[#18BA51] font-bold text-white text-[21px] rounded-lg w-[45px] h-[40px] btn-disabled`
                    : `btn btn-sm bg-[#18BA51] font-bold text-white text-[21px] rounded-lg w-[45px] h-[40px]`
                }
              >
                -
              </button>

              <h1 className="font-bold">{amount}</h1>
              <button
                onClick={add}
                className="btn btn-sm bg-[#18BA51] text-center font-bold text-white text-[21px] rounded-lg w-[45px] h-[40px]"
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                addCart({
                  tempId: Date.now().toString(),
                  foodId: item._id,
                  name: item.name,
                  ingredient: item.ingredient,
                  price: item.saleprice,
                  amount: amount,
                })
              }
              className="btn bg-[#18BA51] text-center text-white w-full h-[48px] rounded-lg"
            >
              Сагслах
            </button>
          </div>

          {/*  */}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={toggleCartModal}>close</button>
        </form>
      </dialog>
      {/*  */}
    </div>
  );
}
