import { TripleDot, TripleDotWhite } from "../icons/tripledot";

export function AdminCategory() {
  const category = ["Breakfast", "Lunch", "Dinner", "Dessert"];

  return (
    <div className="w-full flex container mx-auto">
      {/* categories */}
      <div className="w-[28%] flex flex-col gap-y-5">
        {/* Food Menu */}
        <div className="w-[258px]">
          <h2 className="text-xl font-bold">Food Menu</h2>
        </div>
        {/* category mapped */}
        <div className="w-[258px]">
          <div className="h-[40px] bg-green-500 border rounded-md flex items-center px-3 justify-between drop-shadow-md">
            <h3 className="text-lg font-medium text-white">Breakfast</h3>
            <button>
              <TripleDotWhite />
            </button>
          </div>
        </div>
      </div>
      {/* second half */}
      <div className="w-[72%] bg-gray-100">
        {/* title with button */}
        <div className="flex justify-between h-[67px] items-center">
          <h2 className="text-xl font-bold">Breakfast</h2>
          <button className="btn btn-sm bg-green-500 text-white hover:bg-green-400 h-[35px]">
            Add new food
          </button>
        </div>
        {/* food content */}
      </div>
    </div>
  );
}
