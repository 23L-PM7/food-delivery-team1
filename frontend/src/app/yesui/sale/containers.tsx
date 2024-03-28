export function Containers() {
  return (
    <div className="w-[587px] h-[702px] m-5 border rounded-2xl">
      <div className="flex h-[64px] justify-center border-b border-gray-400">
        <div className="w-[10%] flex items-center justify-center text-2xl border">
          <h1 className="font-sm">x</h1>
        </div>
        <div className="w-[80%] flex justify-center items-center">
          <h1 className="font-bold text-2xl">Create food</h1>
        </div>
        {/* just for centering the main title CREATE FOOD */}
        <div className="w-[10%]">
          <h1 className="font-bold text-white">x</h1>
        </div>
        {/*  */}
      </div>
      <div>
        <div>
          <h1>Хоолны нэр</h1>
          <input
            type="text"
            placeholder="Хоолны нэр"
            className="input h-[56px] border-none input-bordered input-lg w-full max-w-xxl bg-gray-200"
          />
          <h1>Хоолны ангилал</h1>
          <input
            type="text"
            placeholder="Placeholder"
            className="input h-[56px] border-none input-bordered input-lg w-full max-w-xxl bg-gray-200"
          />
          <h1>Хоолны орц</h1>
          <input
            type="text"
            placeholder="Placeholder"
            className="input h-[56px] border-none input-bordered input-lg w-full max-w-xxl bg-gray-200"
          />
          <h1>Хоолны үнэ</h1>
          <input
            type="text"
            placeholder="Placeholder"
            className="input h-[56px] border-none input-bordered input-lg w-full max-w-xxl bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
