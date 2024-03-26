export function Category() {
  return (
    <div className="w-full px-[120px] py-[32px]">
      <div className="w-full flex justify-between gap-[26px]">
        <button className="btn w-[280px] h-[43px] outline-slate-200 text-black hover:bg-green-500 hover:text-white bg-transparent">
          Breakfast
        </button>
        <button className="btn w-[280px] h-[43px] outline-slate-200 text-black hover:bg-green-500 hover:text-white bg-transparent">
          Soup
        </button>
        <button className="btn w-[280px] h-[43px] outline-slate-200 text-black hover:bg-green-500 hover:text-white bg-transparent">
          Main course
        </button>
        <button className="btn w-[280px] h-[43px] outline-slate-200 text-black hover:bg-green-500 hover:text-white bg-transparent">
          Dessert
        </button>
      </div>
    </div>
  );
}
