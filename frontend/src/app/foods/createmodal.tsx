import Modal from "../mnde/Modal/modal";
import { SellChip } from "../mnde/Sellchip";
import ShowModal from "./showmodal";

// export default function FoodMap() {
//   return (
//     <div
//       className="grid grid-rows-12 grid-cols-1 sm:grid-rows-6 sm-grid-cols-2 md:grid-rows-6 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 xl:grid-rows-3 xl:grid-cols-4 2xl:grid-rows-3 2xl:grid-cols-4 2xl:gap-x-[24px] 2xl:gap-y-[60px] container mx-auto 2xl:max-w-[1200px]"
//       id="my_modal_2"
//     >
//       <FoodCard />
//     </div>
//   );
// }

export const FoodCard = () => {
  return (
    <>
      <div onClick={() => document.getElementById("my_modal_4").showModal()}>
        <div className="relative overflow-hidden w-fit">
          <div className="absolute right-6 top-4">
            <SellChip />
          </div>
          <div className="w-[282px] h-[196px] ease-in cursor-pointer">
            <img
              className="object-fill rounded-lg"
              src="https://media.istockphoto.com/id/1690090007/photo/a-cropped-image-of-a-womans-hand-holding-a-piece-of-toasted-bread-with-scrambled-eggs-on-top.jpg?s=2048x2048&w=is&k=20&c=KYa9toFXQyJ_pWcikPGQ6qxHl127RRM7txLFfDv5SMM="
            ></img>
          </div>
        </div>
        <div className="flex flex-col mt-[14px]">
          <h1 className="font-semibold text-lg">Tsuivan</h1>
          <div className="flex gap-2">
            <p className="font-semibold text-lg text-green-600">100₮</p>
            <p className="font-semibold text-lg line-through ">1000₮</p>
          </div>
        </div>
        <dialog id="my_modal_4" className="modal ">
          <ShowModal />
        </dialog>
      </div>
    </>
  );
};
