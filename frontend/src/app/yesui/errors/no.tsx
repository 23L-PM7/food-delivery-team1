import { Warning } from "@/components/icons/warning";
import { Yellowmark, Yesmark } from "@/components/icons/yesmark";

export function No() {
  return (
    <div className="absolute h-screen w-screen bg-gray-900/50 flex justify-center pt-[200px]">
      <div
        role="alert"
        className="alert w-[384px] h-[56px] bg-white border-none flex justify-center items-center"
      >
        <Warning />

        <h1 className=" text-center text-red-900">
          Алдаа гарлаа дахин оролдоно уу
        </h1>
      </div>
    </div>
  );
}

export function SuccessGreen() {
  return (
    <div className="absolute h-screen w-screen bg-gray-900/50 flex justify-center pt-[200px]">
      <div
        role="alert"
        className="alert w-[384px] h-[56px] bg-white  rounded-2xl flex justify-center items-center"
      >
        <Yesmark />

        <h1 className=" text-center text-green-900">
          Алдаа гарлаа дахин оролдоно уу
        </h1>
      </div>
    </div>
  );
}

export function SuccessYellow() {
  return (
    <div className="absolute h-screen w-screen bg-gray-900/50 flex justify-center pt-[200px]">
      <div
        role="alert"
        className="alert w-[384px] h-[56px] bg-white  rounded-2xl flex justify-center items-center"
      >
        <Yellowmark />

        <h1 className=" text-center text-yellow-700">
          Алдаа гарлаа дахин оролдоно уу
        </h1>
      </div>
    </div>
  );
}
