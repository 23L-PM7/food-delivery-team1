export function Containers() {
  return (
    <div className="w-[587px] h-[702px] m-5">
      <div className="flex justify-center border-b border-gray-400">
        <div className="w-[10%] flex items-center text-2xl">
          <h1 className="font-sm">x</h1>
        </div>
        <div className="w-[80%] flex justify-center">
          <h1 className="font-bold text-2xl">Create food</h1>
        </div>
        {/* just for centering the main title CREATE FOOD */}
        <div className="w-[10%]">
          <h1 className="font-bold text-white">x</h1>
        </div>
        {/*  */}
      </div>
      <div>
        <h1> Хоолны нэр</h1>
        <input
          type="text"
          placeholder="Placeholder"
          className="input border-none input-bordered input-lg w-full max-w-xxl bg-gray-200"
        />
        <h1>Хоолны ангилал</h1>
        <input
          type="text"
          placeholder="Placeholder"
          className="input border-none input-bordered input-lg w-full max-w-xxl bg-gray-200"
        />
        <h1>Хоолны орц</h1>
        <input
          type="text"
          placeholder="Placeholder"
          className="input border-none input-bordered input-lg w-full max-w-xxl bg-gray-200"
        />
        <h1>Хоолны үнэ</h1>
        <input
          type="text"
          placeholder="Placeholder"
          className="input border-none input-bordered input-lg w-full max-w-xxl bg-gray-200"
        />
      </div>
    </div>
  );
}
