import { Warning } from "@/components/icons/warning";

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
