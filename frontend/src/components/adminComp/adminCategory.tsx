export function AdminCategory() {
  return (
    <div className="w-full flex container mx-auto">
      {/* categories */}
      <div className="w-[28%]">
        {/* Food Menu */}
        <div className="">
          <h2 className="text-xl font-bold">Food Menu</h2>
        </div>
        {/* category mapped */}
        <div></div>
      </div>
      {/* second half */}
      <div className="w-[72%] bg-gray-100">
        {/* title with button */}
        <div className="flex justify-between h-[67px] items-center">
          <h2 className="text-xl font-bold">Breakfast</h2>
          <button className="btn btn-sm bg-green-400 text-white hover:bg-green-500 h-[35px]">
            Add new food
          </button>
        </div>
        {/* food content */}
      </div>
    </div>
  );
}
