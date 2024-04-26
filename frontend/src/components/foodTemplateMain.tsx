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

  const dualFunction = () => {
    addCart({
      tempId: Date.now().toString(),
      foodId: item._id,
      name: item.name,
      ingredient: item.ingredient,
      price: item.saleprice,
      amount: amount,
      image: item.image,
    });
    toggleCartModal();
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
          <img alt="food photo" src={item.image} />
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
            <img className="h-full" src={item.image} />
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
              onClick={() => dualFunction()}
              className="btn bg-[#18BA51] text-center text-white w-full h-[48px] rounded-lg"
            >
              Сагслах
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={toggleCartModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}
